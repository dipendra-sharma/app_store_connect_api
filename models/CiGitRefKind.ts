
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const CiGitRefKind = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type CiGitRefKind = typeof CiGitRefKind[keyof typeof CiGitRefKind];


export function instanceOfCiGitRefKind(value: any): boolean {
    for (const key in CiGitRefKind) {
        if (Object.prototype.hasOwnProperty.call(CiGitRefKind, key)) {
            if (CiGitRefKind[key as keyof typeof CiGitRefKind] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CiGitRefKindFromJSON(json: any): CiGitRefKind {
    return CiGitRefKindFromJSONTyped(json, false);
}

export function CiGitRefKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiGitRefKind {
    return json as CiGitRefKind;
}

export function CiGitRefKindToJSON(value?: CiGitRefKind | null): any {
    return value as any;
}

export function CiGitRefKindToJSONTyped(value: any, ignoreDiscriminator: boolean): CiGitRefKind {
    return value as CiGitRefKind;
}
