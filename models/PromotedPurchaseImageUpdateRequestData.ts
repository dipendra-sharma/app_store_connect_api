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
 * @interface PromotedPurchaseImageUpdateRequestData
 */
export interface PromotedPurchaseImageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageUpdateRequestData
     */
    type: PromotedPurchaseImageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof PromotedPurchaseImageUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const PromotedPurchaseImageUpdateRequestDataTypeEnum = {
    PromotedPurchaseImages: 'promotedPurchaseImages'
} as const;
export type PromotedPurchaseImageUpdateRequestDataTypeEnum = typeof PromotedPurchaseImageUpdateRequestDataTypeEnum[keyof typeof PromotedPurchaseImageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseImageUpdateRequestData interface.
 */
export function instanceOfPromotedPurchaseImageUpdateRequestData(value: object): value is PromotedPurchaseImageUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function PromotedPurchaseImageUpdateRequestDataFromJSON(json: any): PromotedPurchaseImageUpdateRequestData {
    return PromotedPurchaseImageUpdateRequestDataFromJSONTyped(json, false);
}

export function PromotedPurchaseImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function PromotedPurchaseImageUpdateRequestDataToJSON(json: any): PromotedPurchaseImageUpdateRequestData {
    return PromotedPurchaseImageUpdateRequestDataToJSONTyped(json, false);
}

export function PromotedPurchaseImageUpdateRequestDataToJSONTyped(value?: PromotedPurchaseImageUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

