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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSONTyped,
} from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface InAppPurchaseImageUpdateRequestData
 */
export interface InAppPurchaseImageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageUpdateRequestData
     */
    type: InAppPurchaseImageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof InAppPurchaseImageUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const InAppPurchaseImageUpdateRequestDataTypeEnum = {
    InAppPurchaseImages: 'inAppPurchaseImages'
} as const;
export type InAppPurchaseImageUpdateRequestDataTypeEnum = typeof InAppPurchaseImageUpdateRequestDataTypeEnum[keyof typeof InAppPurchaseImageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseImageUpdateRequestData interface.
 */
export function instanceOfInAppPurchaseImageUpdateRequestData(value: object): value is InAppPurchaseImageUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function InAppPurchaseImageUpdateRequestDataFromJSON(json: any): InAppPurchaseImageUpdateRequestData {
    return InAppPurchaseImageUpdateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseImageUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function InAppPurchaseImageUpdateRequestDataToJSON(json: any): InAppPurchaseImageUpdateRequestData {
    return InAppPurchaseImageUpdateRequestDataToJSONTyped(json, false);
}

export function InAppPurchaseImageUpdateRequestDataToJSONTyped(value?: InAppPurchaseImageUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

