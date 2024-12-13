
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
export const CiTestStatus = {
    Success: 'SUCCESS',
    Failure: 'FAILURE',
    Mixed: 'MIXED',
    Skipped: 'SKIPPED',
    ExpectedFailure: 'EXPECTED_FAILURE'
} as const;
export type CiTestStatus = typeof CiTestStatus[keyof typeof CiTestStatus];


export function instanceOfCiTestStatus(value: any): boolean {
    for (const key in CiTestStatus) {
        if (Object.prototype.hasOwnProperty.call(CiTestStatus, key)) {
            if (CiTestStatus[key as keyof typeof CiTestStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CiTestStatusFromJSON(json: any): CiTestStatus {
    return CiTestStatusFromJSONTyped(json, false);
}

export function CiTestStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiTestStatus {
    return json as CiTestStatus;
}

export function CiTestStatusToJSON(value?: CiTestStatus | null): any {
    return value as any;
}

export function CiTestStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): CiTestStatus {
    return value as CiTestStatus;
}

