
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
 * @interface SubscriptionPromotionalOfferRelationshipsPricesDataInner
 */
export interface SubscriptionPromotionalOfferRelationshipsPricesDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferRelationshipsPricesDataInner
     */
    type: SubscriptionPromotionalOfferRelationshipsPricesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferRelationshipsPricesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionPromotionalOfferRelationshipsPricesDataInnerTypeEnum = {
    SubscriptionPromotionalOfferPrices: 'subscriptionPromotionalOfferPrices'
} as const;
export type SubscriptionPromotionalOfferRelationshipsPricesDataInnerTypeEnum = typeof SubscriptionPromotionalOfferRelationshipsPricesDataInnerTypeEnum[keyof typeof SubscriptionPromotionalOfferRelationshipsPricesDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionPromotionalOfferRelationshipsPricesDataInner interface.
 */
export function instanceOfSubscriptionPromotionalOfferRelationshipsPricesDataInner(value: object): value is SubscriptionPromotionalOfferRelationshipsPricesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON(json: any): SubscriptionPromotionalOfferRelationshipsPricesDataInner {
    return SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferRelationshipsPricesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON(json: any): SubscriptionPromotionalOfferRelationshipsPricesDataInner {
    return SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSONTyped(value?: SubscriptionPromotionalOfferRelationshipsPricesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

