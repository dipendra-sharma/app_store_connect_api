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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AppClipAttributes
 */
export interface AppClipAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppClipAttributes
     */
    bundleId?: string;
}

/**
 * Check if a given object implements the AppClipAttributes interface.
 */
export function instanceOfAppClipAttributes(value: object): value is AppClipAttributes {
    return true;
}

export function AppClipAttributesFromJSON(json: any): AppClipAttributes {
    return AppClipAttributesFromJSONTyped(json, false);
}

export function AppClipAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'bundleId': json['bundleId'] == null ? undefined : json['bundleId'],
    };
}

export function AppClipAttributesToJSON(json: any): AppClipAttributes {
    return AppClipAttributesToJSONTyped(json, false);
}

export function AppClipAttributesToJSONTyped(value?: AppClipAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bundleId': value['bundleId'],
    };
}

