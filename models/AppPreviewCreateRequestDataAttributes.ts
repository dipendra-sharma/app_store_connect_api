
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
 * @interface AppPreviewCreateRequestDataAttributes
 */
export interface AppPreviewCreateRequestDataAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppPreviewCreateRequestDataAttributes
     */
    fileSize: number;
    /**
     * 
     * @type {string}
     * @memberof AppPreviewCreateRequestDataAttributes
     */
    fileName: string;
    /**
     * 
     * @type {string}
     * @memberof AppPreviewCreateRequestDataAttributes
     */
    previewFrameTimeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AppPreviewCreateRequestDataAttributes
     */
    mimeType?: string;
}

/**
 * Check if a given object implements the AppPreviewCreateRequestDataAttributes interface.
 */
export function instanceOfAppPreviewCreateRequestDataAttributes(value: object): value is AppPreviewCreateRequestDataAttributes {
    if (!('fileSize' in value) || value['fileSize'] === undefined) return false;
    if (!('fileName' in value) || value['fileName'] === undefined) return false;
    return true;
}

export function AppPreviewCreateRequestDataAttributesFromJSON(json: any): AppPreviewCreateRequestDataAttributes {
    return AppPreviewCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppPreviewCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'fileSize': json['fileSize'],
        'fileName': json['fileName'],
        'previewFrameTimeCode': json['previewFrameTimeCode'] == null ? undefined : json['previewFrameTimeCode'],
        'mimeType': json['mimeType'] == null ? undefined : json['mimeType'],
    };
}

export function AppPreviewCreateRequestDataAttributesToJSON(json: any): AppPreviewCreateRequestDataAttributes {
    return AppPreviewCreateRequestDataAttributesToJSONTyped(json, false);
}

export function AppPreviewCreateRequestDataAttributesToJSONTyped(value?: AppPreviewCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileSize': value['fileSize'],
        'fileName': value['fileName'],
        'previewFrameTimeCode': value['previewFrameTimeCode'],
        'mimeType': value['mimeType'],
    };
}

