#!/bin/bash

# Directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Output file
OUTPUT_FILE="$PROJECT_ROOT/src/client.ts"

# Remove tslint and eslint disable comments from generated files
remove_disable_comments() {
    local dir="$1"
    find "$dir" -type f \( -name "*.ts" -o -name "*.tsx" \) \
        -exec sh -c '
            for file do
                tmp=$(mktemp)
                sed "/\/\* tslint:disable \*\//d; /\/\* eslint-disable \*\//d" "$file" > "$tmp"
                if ! cmp -s "$file" "$tmp"; then
                    mv "$tmp" "$file"
                else
                    rm "$tmp"
                fi
            done' sh {} +
}

# Start generating the file
cat >"$OUTPUT_FILE" <<'EOL'
import { Configuration } from '../runtime';
import * as APIs from '../apis';

export class AppStoreConnectClient {
    private readonly config: Configuration;
    private apis: { [key: string]: any } = {};

    constructor(config: Configuration) {
        this.config = config;
    }

    private getApi<T>(apiName: string, ApiClass: new (config: Configuration) => T): T {
        if (!this.apis[apiName]) {
            this.apis[apiName] = new ApiClass(this.config);
        }
        return this.apis[apiName] as T;
    }
EOL

# Read the .openapi-generator/FILES and generate getters for each API
grep "^apis/.*Api.ts$" "$PROJECT_ROOT/.openapi-generator/FILES" | while read -r file; do
    # Extract the API name from the file path (e.g., ActorsApi from apis/ActorsApi.ts)
    API_NAME=$(basename "$file" .ts)

    # Convert to camelCase for the getter name (e.g., actorsApi)
    GETTER_NAME=$(echo "${API_NAME:0:1}" | tr '[:upper:]' '[:lower:]')${API_NAME:1}

    # Generate the getter
    cat >>"$OUTPUT_FILE" <<EOL

    get ${GETTER_NAME}(): APIs.${API_NAME} {
        return this.getApi('${GETTER_NAME}', APIs.${API_NAME});
    }
EOL
done

# Close the class
echo "}" >>"$OUTPUT_FILE"

# Ensure the export exists in index.ts
INDEX_FILE="$PROJECT_ROOT/index.ts"
EXPORT_STATEMENT='export * from "./src/client";'

# Create index.ts if it doesn't exist
touch "$INDEX_FILE"

# Check if the export statement already exists
if ! grep -q "$EXPORT_STATEMENT" "$INDEX_FILE"; then
    echo "$EXPORT_STATEMENT" >>"$INDEX_FILE"
fi

# Remove disable comments from apis and models directories
remove_disable_comments "$PROJECT_ROOT/apis"
remove_disable_comments "$PROJECT_ROOT/models"

# Make the script executable
chmod +x "$0"

echo "Generated client.ts successfully!"
echo "Removed disable comments from API and model files!"
