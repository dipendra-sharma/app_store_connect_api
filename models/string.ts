export function instanceOfstring(value: any): value is string {
    return typeof value === 'string';
}

export function stringFromJSON(json: any): string {
    return JSON.parse(json);
}

export function stringFromJSONTyped(json: any, ignoreError?: boolean): string {
    if (!instanceOfstring(json)) {
        if (ignoreError) {
            return '';
        }
        throw new Error('Value is not a string');
    }
    return json;
}


export function stringToJSON(value: string): string {
    return JSON.stringify(value);
}
