
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
 * @interface SubscriptionCreateRequestDataAttributes
 */
export interface SubscriptionCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreateRequestDataAttributes
     */
    productId: string;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCreateRequestDataAttributes
     */
    familySharable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreateRequestDataAttributes
     */
    subscriptionPeriod?: SubscriptionCreateRequestDataAttributesSubscriptionPeriodEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreateRequestDataAttributes
     */
    reviewNote?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionCreateRequestDataAttributes
     */
    groupLevel?: number;
}


/**
 * @export
 */
export const SubscriptionCreateRequestDataAttributesSubscriptionPeriodEnum = {
    OneWeek: 'ONE_WEEK',
    OneMonth: 'ONE_MONTH',
    TwoMonths: 'TWO_MONTHS',
    ThreeMonths: 'THREE_MONTHS',
    SixMonths: 'SIX_MONTHS',
    OneYear: 'ONE_YEAR'
} as const;
export type SubscriptionCreateRequestDataAttributesSubscriptionPeriodEnum = typeof SubscriptionCreateRequestDataAttributesSubscriptionPeriodEnum[keyof typeof SubscriptionCreateRequestDataAttributesSubscriptionPeriodEnum];


/**
 * Check if a given object implements the SubscriptionCreateRequestDataAttributes interface.
 */
export function instanceOfSubscriptionCreateRequestDataAttributes(value: object): value is SubscriptionCreateRequestDataAttributes {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('productId' in value) || value['productId'] === undefined) return false;
    return true;
}

export function SubscriptionCreateRequestDataAttributesFromJSON(json: any): SubscriptionCreateRequestDataAttributes {
    return SubscriptionCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function SubscriptionCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'productId': json['productId'],
        'familySharable': json['familySharable'] == null ? undefined : json['familySharable'],
        'subscriptionPeriod': json['subscriptionPeriod'] == null ? undefined : json['subscriptionPeriod'],
        'reviewNote': json['reviewNote'] == null ? undefined : json['reviewNote'],
        'groupLevel': json['groupLevel'] == null ? undefined : json['groupLevel'],
    };
}

export function SubscriptionCreateRequestDataAttributesToJSON(json: any): SubscriptionCreateRequestDataAttributes {
    return SubscriptionCreateRequestDataAttributesToJSONTyped(json, false);
}

export function SubscriptionCreateRequestDataAttributesToJSONTyped(value?: SubscriptionCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'productId': value['productId'],
        'familySharable': value['familySharable'],
        'subscriptionPeriod': value['subscriptionPeriod'],
        'reviewNote': value['reviewNote'],
        'groupLevel': value['groupLevel'],
    };
}
