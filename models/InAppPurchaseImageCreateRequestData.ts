
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
import type { InAppPurchaseImageCreateRequestDataRelationships } from './InAppPurchaseImageCreateRequestDataRelationships';
import {
    InAppPurchaseImageCreateRequestDataRelationshipsFromJSON,
    InAppPurchaseImageCreateRequestDataRelationshipsFromJSONTyped,
    InAppPurchaseImageCreateRequestDataRelationshipsToJSON,
    InAppPurchaseImageCreateRequestDataRelationshipsToJSONTyped,
} from './InAppPurchaseImageCreateRequestDataRelationships';
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSONTyped,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface InAppPurchaseImageCreateRequestData
 */
export interface InAppPurchaseImageCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageCreateRequestData
     */
    type: InAppPurchaseImageCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof InAppPurchaseImageCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {InAppPurchaseImageCreateRequestDataRelationships}
     * @memberof InAppPurchaseImageCreateRequestData
     */
    relationships: InAppPurchaseImageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const InAppPurchaseImageCreateRequestDataTypeEnum = {
    InAppPurchaseImages: 'inAppPurchaseImages'
} as const;
export type InAppPurchaseImageCreateRequestDataTypeEnum = typeof InAppPurchaseImageCreateRequestDataTypeEnum[keyof typeof InAppPurchaseImageCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseImageCreateRequestData interface.
 */
export function instanceOfInAppPurchaseImageCreateRequestData(value: object): value is InAppPurchaseImageCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function InAppPurchaseImageCreateRequestDataFromJSON(json: any): InAppPurchaseImageCreateRequestData {
    return InAppPurchaseImageCreateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseImageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseImageCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': InAppPurchaseImageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function InAppPurchaseImageCreateRequestDataToJSON(json: any): InAppPurchaseImageCreateRequestData {
    return InAppPurchaseImageCreateRequestDataToJSONTyped(json, false);
}

export function InAppPurchaseImageCreateRequestDataToJSONTyped(value?: InAppPurchaseImageCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': InAppPurchaseImageCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}
