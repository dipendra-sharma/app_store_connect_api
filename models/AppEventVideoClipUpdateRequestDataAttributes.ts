
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
 * @interface AppEventVideoClipUpdateRequestDataAttributes
 */
export interface AppEventVideoClipUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipUpdateRequestDataAttributes
     */
    previewFrameTimeCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppEventVideoClipUpdateRequestDataAttributes
     */
    uploaded?: boolean;
}

/**
 * Check if a given object implements the AppEventVideoClipUpdateRequestDataAttributes interface.
 */
export function instanceOfAppEventVideoClipUpdateRequestDataAttributes(value: object): value is AppEventVideoClipUpdateRequestDataAttributes {
    return true;
}

export function AppEventVideoClipUpdateRequestDataAttributesFromJSON(json: any): AppEventVideoClipUpdateRequestDataAttributes {
    return AppEventVideoClipUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppEventVideoClipUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'previewFrameTimeCode': json['previewFrameTimeCode'] == null ? undefined : json['previewFrameTimeCode'],
        'uploaded': json['uploaded'] == null ? undefined : json['uploaded'],
    };
}

export function AppEventVideoClipUpdateRequestDataAttributesToJSON(json: any): AppEventVideoClipUpdateRequestDataAttributes {
    return AppEventVideoClipUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function AppEventVideoClipUpdateRequestDataAttributesToJSONTyped(value?: AppEventVideoClipUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'previewFrameTimeCode': value['previewFrameTimeCode'],
        'uploaded': value['uploaded'],
    };
}

