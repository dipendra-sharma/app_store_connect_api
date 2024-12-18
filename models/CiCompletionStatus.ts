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
export const CiCompletionStatus = {
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED',
    Errored: 'ERRORED',
    Canceled: 'CANCELED',
    Skipped: 'SKIPPED'
} as const;
export type CiCompletionStatus = typeof CiCompletionStatus[keyof typeof CiCompletionStatus];


export function instanceOfCiCompletionStatus(value: any): boolean {
    for (const key in CiCompletionStatus) {
        if (Object.prototype.hasOwnProperty.call(CiCompletionStatus, key)) {
            if (CiCompletionStatus[key as keyof typeof CiCompletionStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CiCompletionStatusFromJSON(json: any): CiCompletionStatus {
    return CiCompletionStatusFromJSONTyped(json, false);
}

export function CiCompletionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiCompletionStatus {
    return json as CiCompletionStatus;
}

export function CiCompletionStatusToJSON(value?: CiCompletionStatus | null): any {
    return value as any;
}

export function CiCompletionStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): CiCompletionStatus {
    return value as CiCompletionStatus;
}

