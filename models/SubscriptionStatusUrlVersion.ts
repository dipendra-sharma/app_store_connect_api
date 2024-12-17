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
export const SubscriptionStatusUrlVersion = {
    V1: 'V1',
    V2: 'V2'
} as const;
export type SubscriptionStatusUrlVersion = typeof SubscriptionStatusUrlVersion[keyof typeof SubscriptionStatusUrlVersion];


export function instanceOfSubscriptionStatusUrlVersion(value: any): boolean {
    for (const key in SubscriptionStatusUrlVersion) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionStatusUrlVersion, key)) {
            if (SubscriptionStatusUrlVersion[key as keyof typeof SubscriptionStatusUrlVersion] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionStatusUrlVersionFromJSON(json: any): SubscriptionStatusUrlVersion {
    return SubscriptionStatusUrlVersionFromJSONTyped(json, false);
}

export function SubscriptionStatusUrlVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionStatusUrlVersion {
    return json as SubscriptionStatusUrlVersion;
}

export function SubscriptionStatusUrlVersionToJSON(value?: SubscriptionStatusUrlVersion | null): any {
    return value as any;
}

export function SubscriptionStatusUrlVersionToJSONTyped(value: any, ignoreDiscriminator: boolean): SubscriptionStatusUrlVersion {
    return value as SubscriptionStatusUrlVersion;
}

