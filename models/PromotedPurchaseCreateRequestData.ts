
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
import type { PromotedPurchaseCreateRequestDataAttributes } from './PromotedPurchaseCreateRequestDataAttributes';
import {
    PromotedPurchaseCreateRequestDataAttributesFromJSON,
    PromotedPurchaseCreateRequestDataAttributesFromJSONTyped,
    PromotedPurchaseCreateRequestDataAttributesToJSON,
    PromotedPurchaseCreateRequestDataAttributesToJSONTyped,
} from './PromotedPurchaseCreateRequestDataAttributes';
import type { PromotedPurchaseCreateRequestDataRelationships } from './PromotedPurchaseCreateRequestDataRelationships';
import {
    PromotedPurchaseCreateRequestDataRelationshipsFromJSON,
    PromotedPurchaseCreateRequestDataRelationshipsFromJSONTyped,
    PromotedPurchaseCreateRequestDataRelationshipsToJSON,
    PromotedPurchaseCreateRequestDataRelationshipsToJSONTyped,
} from './PromotedPurchaseCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface PromotedPurchaseCreateRequestData
 */
export interface PromotedPurchaseCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseCreateRequestData
     */
    type: PromotedPurchaseCreateRequestDataTypeEnum;
    /**
     * 
     * @type {PromotedPurchaseCreateRequestDataAttributes}
     * @memberof PromotedPurchaseCreateRequestData
     */
    attributes: PromotedPurchaseCreateRequestDataAttributes;
    /**
     * 
     * @type {PromotedPurchaseCreateRequestDataRelationships}
     * @memberof PromotedPurchaseCreateRequestData
     */
    relationships: PromotedPurchaseCreateRequestDataRelationships;
}


/**
 * @export
 */
export const PromotedPurchaseCreateRequestDataTypeEnum = {
    PromotedPurchases: 'promotedPurchases'
} as const;
export type PromotedPurchaseCreateRequestDataTypeEnum = typeof PromotedPurchaseCreateRequestDataTypeEnum[keyof typeof PromotedPurchaseCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseCreateRequestData interface.
 */
export function instanceOfPromotedPurchaseCreateRequestData(value: object): value is PromotedPurchaseCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function PromotedPurchaseCreateRequestDataFromJSON(json: any): PromotedPurchaseCreateRequestData {
    return PromotedPurchaseCreateRequestDataFromJSONTyped(json, false);
}

export function PromotedPurchaseCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': PromotedPurchaseCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': PromotedPurchaseCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function PromotedPurchaseCreateRequestDataToJSON(json: any): PromotedPurchaseCreateRequestData {
    return PromotedPurchaseCreateRequestDataToJSONTyped(json, false);
}

export function PromotedPurchaseCreateRequestDataToJSONTyped(value?: PromotedPurchaseCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': PromotedPurchaseCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': PromotedPurchaseCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}
