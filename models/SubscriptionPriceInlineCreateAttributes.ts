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
 * @interface SubscriptionPriceInlineCreateAttributes
 */
export interface SubscriptionPriceInlineCreateAttributes {
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionPriceInlineCreateAttributes
     */
    startDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionPriceInlineCreateAttributes
     */
    preserveCurrentPrice?: boolean;
}

/**
 * Check if a given object implements the SubscriptionPriceInlineCreateAttributes interface.
 */
export function instanceOfSubscriptionPriceInlineCreateAttributes(value: object): value is SubscriptionPriceInlineCreateAttributes {
    return true;
}

export function SubscriptionPriceInlineCreateAttributesFromJSON(json: any): SubscriptionPriceInlineCreateAttributes {
    return SubscriptionPriceInlineCreateAttributesFromJSONTyped(json, false);
}

export function SubscriptionPriceInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPriceInlineCreateAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'startDate': json['startDate'] == null ? undefined : (new Date(json['startDate'])),
        'preserveCurrentPrice': json['preserveCurrentPrice'] == null ? undefined : json['preserveCurrentPrice'],
    };
}

export function SubscriptionPriceInlineCreateAttributesToJSON(json: any): SubscriptionPriceInlineCreateAttributes {
    return SubscriptionPriceInlineCreateAttributesToJSONTyped(json, false);
}

export function SubscriptionPriceInlineCreateAttributesToJSONTyped(value?: SubscriptionPriceInlineCreateAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'startDate': value['startDate'] == null ? undefined : ((value['startDate']).toISOString().substring(0,10)),
        'preserveCurrentPrice': value['preserveCurrentPrice'],
    };
}

