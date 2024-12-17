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
 * @interface AppPreviewUpdateRequestDataAttributes
 */
export interface AppPreviewUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppPreviewUpdateRequestDataAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {string}
     * @memberof AppPreviewUpdateRequestDataAttributes
     */
    previewFrameTimeCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppPreviewUpdateRequestDataAttributes
     */
    uploaded?: boolean;
}

/**
 * Check if a given object implements the AppPreviewUpdateRequestDataAttributes interface.
 */
export function instanceOfAppPreviewUpdateRequestDataAttributes(value: object): value is AppPreviewUpdateRequestDataAttributes {
    return true;
}

export function AppPreviewUpdateRequestDataAttributesFromJSON(json: any): AppPreviewUpdateRequestDataAttributes {
    return AppPreviewUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppPreviewUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'sourceFileChecksum': json['sourceFileChecksum'] == null ? undefined : json['sourceFileChecksum'],
        'previewFrameTimeCode': json['previewFrameTimeCode'] == null ? undefined : json['previewFrameTimeCode'],
        'uploaded': json['uploaded'] == null ? undefined : json['uploaded'],
    };
}

export function AppPreviewUpdateRequestDataAttributesToJSON(json: any): AppPreviewUpdateRequestDataAttributes {
    return AppPreviewUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function AppPreviewUpdateRequestDataAttributesToJSONTyped(value?: AppPreviewUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sourceFileChecksum': value['sourceFileChecksum'],
        'previewFrameTimeCode': value['previewFrameTimeCode'],
        'uploaded': value['uploaded'],
    };
}

