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
 * @interface PromotedPurchaseUpdateRequestDataAttributes
 */
export interface PromotedPurchaseUpdateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseUpdateRequestDataAttributes
     */
    visibleForAllUsers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseUpdateRequestDataAttributes
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the PromotedPurchaseUpdateRequestDataAttributes interface.
 */
export function instanceOfPromotedPurchaseUpdateRequestDataAttributes(value: object): value is PromotedPurchaseUpdateRequestDataAttributes {
    return true;
}

export function PromotedPurchaseUpdateRequestDataAttributesFromJSON(json: any): PromotedPurchaseUpdateRequestDataAttributes {
    return PromotedPurchaseUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function PromotedPurchaseUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'visibleForAllUsers': json['visibleForAllUsers'] == null ? undefined : json['visibleForAllUsers'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
    };
}

export function PromotedPurchaseUpdateRequestDataAttributesToJSON(json: any): PromotedPurchaseUpdateRequestDataAttributes {
    return PromotedPurchaseUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function PromotedPurchaseUpdateRequestDataAttributesToJSONTyped(value?: PromotedPurchaseUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'visibleForAllUsers': value['visibleForAllUsers'],
        'enabled': value['enabled'],
    };
}

