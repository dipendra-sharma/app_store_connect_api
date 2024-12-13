
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
export const CiExecutionProgress = {
    Pending: 'PENDING',
    Running: 'RUNNING',
    Complete: 'COMPLETE'
} as const;
export type CiExecutionProgress = typeof CiExecutionProgress[keyof typeof CiExecutionProgress];


export function instanceOfCiExecutionProgress(value: any): boolean {
    for (const key in CiExecutionProgress) {
        if (Object.prototype.hasOwnProperty.call(CiExecutionProgress, key)) {
            if (CiExecutionProgress[key as keyof typeof CiExecutionProgress] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CiExecutionProgressFromJSON(json: any): CiExecutionProgress {
    return CiExecutionProgressFromJSONTyped(json, false);
}

export function CiExecutionProgressFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiExecutionProgress {
    return json as CiExecutionProgress;
}

export function CiExecutionProgressToJSON(value?: CiExecutionProgress | null): any {
    return value as any;
}

export function CiExecutionProgressToJSONTyped(value: any, ignoreDiscriminator: boolean): CiExecutionProgress {
    return value as CiExecutionProgress;
}
