
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
 * @interface SubscriptionPricePointInlineCreate
 */
export interface SubscriptionPricePointInlineCreate {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPricePointInlineCreate
     */
    type: SubscriptionPricePointInlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPricePointInlineCreate
     */
    id?: string;
}


/**
 * @export
 */
export const SubscriptionPricePointInlineCreateTypeEnum = {
    SubscriptionPricePoints: 'subscriptionPricePoints'
} as const;
export type SubscriptionPricePointInlineCreateTypeEnum = typeof SubscriptionPricePointInlineCreateTypeEnum[keyof typeof SubscriptionPricePointInlineCreateTypeEnum];


/**
 * Check if a given object implements the SubscriptionPricePointInlineCreate interface.
 */
export function instanceOfSubscriptionPricePointInlineCreate(value: object): value is SubscriptionPricePointInlineCreate {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function SubscriptionPricePointInlineCreateFromJSON(json: any): SubscriptionPricePointInlineCreate {
    return SubscriptionPricePointInlineCreateFromJSONTyped(json, false);
}

export function SubscriptionPricePointInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPricePointInlineCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function SubscriptionPricePointInlineCreateToJSON(json: any): SubscriptionPricePointInlineCreate {
    return SubscriptionPricePointInlineCreateToJSONTyped(json, false);
}

export function SubscriptionPricePointInlineCreateToJSONTyped(value?: SubscriptionPricePointInlineCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
