
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
export const Platform = {
    Ios: 'IOS',
    MacOs: 'MAC_OS',
    TvOs: 'TV_OS',
    VisionOs: 'VISION_OS'
} as const;
export type Platform = typeof Platform[keyof typeof Platform];


export function instanceOfPlatform(value: any): boolean {
    for (const key in Platform) {
        if (Object.prototype.hasOwnProperty.call(Platform, key)) {
            if (Platform[key as keyof typeof Platform] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PlatformFromJSON(json: any): Platform {
    return PlatformFromJSONTyped(json, false);
}

export function PlatformFromJSONTyped(json: any, ignoreDiscriminator: boolean): Platform {
    return json as Platform;
}

export function PlatformToJSON(value?: Platform | null): any {
    return value as any;
}

export function PlatformToJSONTyped(value: any, ignoreDiscriminator: boolean): Platform {
    return value as Platform;
}

