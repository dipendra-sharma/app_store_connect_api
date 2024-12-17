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
 * @interface PromotedPurchaseCreateRequestDataAttributes
 */
export interface PromotedPurchaseCreateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseCreateRequestDataAttributes
     */
    visibleForAllUsers: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseCreateRequestDataAttributes
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the PromotedPurchaseCreateRequestDataAttributes interface.
 */
export function instanceOfPromotedPurchaseCreateRequestDataAttributes(value: object): value is PromotedPurchaseCreateRequestDataAttributes {
    if (!('visibleForAllUsers' in value) || value['visibleForAllUsers'] === undefined) return false;
    return true;
}

export function PromotedPurchaseCreateRequestDataAttributesFromJSON(json: any): PromotedPurchaseCreateRequestDataAttributes {
    return PromotedPurchaseCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function PromotedPurchaseCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'visibleForAllUsers': json['visibleForAllUsers'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
    };
}

export function PromotedPurchaseCreateRequestDataAttributesToJSON(json: any): PromotedPurchaseCreateRequestDataAttributes {
    return PromotedPurchaseCreateRequestDataAttributesToJSONTyped(json, false);
}

export function PromotedPurchaseCreateRequestDataAttributesToJSONTyped(value?: PromotedPurchaseCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'visibleForAllUsers': value['visibleForAllUsers'],
        'enabled': value['enabled'],
    };
}

