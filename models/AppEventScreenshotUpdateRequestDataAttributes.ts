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
 * @interface AppEventScreenshotUpdateRequestDataAttributes
 */
export interface AppEventScreenshotUpdateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof AppEventScreenshotUpdateRequestDataAttributes
     */
    uploaded?: boolean;
}

/**
 * Check if a given object implements the AppEventScreenshotUpdateRequestDataAttributes interface.
 */
export function instanceOfAppEventScreenshotUpdateRequestDataAttributes(value: object): value is AppEventScreenshotUpdateRequestDataAttributes {
    return true;
}

export function AppEventScreenshotUpdateRequestDataAttributesFromJSON(json: any): AppEventScreenshotUpdateRequestDataAttributes {
    return AppEventScreenshotUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppEventScreenshotUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'uploaded': json['uploaded'] == null ? undefined : json['uploaded'],
    };
}

export function AppEventScreenshotUpdateRequestDataAttributesToJSON(json: any): AppEventScreenshotUpdateRequestDataAttributes {
    return AppEventScreenshotUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function AppEventScreenshotUpdateRequestDataAttributesToJSONTyped(value?: AppEventScreenshotUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'uploaded': value['uploaded'],
    };
}

