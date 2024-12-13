
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
import type { PromotedPurchaseUpdateRequestDataAttributes } from './PromotedPurchaseUpdateRequestDataAttributes';
import {
    PromotedPurchaseUpdateRequestDataAttributesFromJSON,
    PromotedPurchaseUpdateRequestDataAttributesFromJSONTyped,
    PromotedPurchaseUpdateRequestDataAttributesToJSON,
    PromotedPurchaseUpdateRequestDataAttributesToJSONTyped,
} from './PromotedPurchaseUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface PromotedPurchaseUpdateRequestData
 */
export interface PromotedPurchaseUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseUpdateRequestData
     */
    type: PromotedPurchaseUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {PromotedPurchaseUpdateRequestDataAttributes}
     * @memberof PromotedPurchaseUpdateRequestData
     */
    attributes?: PromotedPurchaseUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const PromotedPurchaseUpdateRequestDataTypeEnum = {
    PromotedPurchases: 'promotedPurchases'
} as const;
export type PromotedPurchaseUpdateRequestDataTypeEnum = typeof PromotedPurchaseUpdateRequestDataTypeEnum[keyof typeof PromotedPurchaseUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseUpdateRequestData interface.
 */
export function instanceOfPromotedPurchaseUpdateRequestData(value: object): value is PromotedPurchaseUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function PromotedPurchaseUpdateRequestDataFromJSON(json: any): PromotedPurchaseUpdateRequestData {
    return PromotedPurchaseUpdateRequestDataFromJSONTyped(json, false);
}

export function PromotedPurchaseUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : PromotedPurchaseUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function PromotedPurchaseUpdateRequestDataToJSON(json: any): PromotedPurchaseUpdateRequestData {
    return PromotedPurchaseUpdateRequestDataToJSONTyped(json, false);
}

export function PromotedPurchaseUpdateRequestDataToJSONTyped(value?: PromotedPurchaseUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': PromotedPurchaseUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

