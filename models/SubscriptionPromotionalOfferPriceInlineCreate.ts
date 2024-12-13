
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
import type { SubscriptionOfferCodePriceRelationships } from './SubscriptionOfferCodePriceRelationships';
import {
    SubscriptionOfferCodePriceRelationshipsFromJSON,
    SubscriptionOfferCodePriceRelationshipsFromJSONTyped,
    SubscriptionOfferCodePriceRelationshipsToJSON,
    SubscriptionOfferCodePriceRelationshipsToJSONTyped,
} from './SubscriptionOfferCodePriceRelationships';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferPriceInlineCreate
 */
export interface SubscriptionPromotionalOfferPriceInlineCreate {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferPriceInlineCreate
     */
    type: SubscriptionPromotionalOfferPriceInlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferPriceInlineCreate
     */
    id?: string;
    /**
     * 
     * @type {SubscriptionOfferCodePriceRelationships}
     * @memberof SubscriptionPromotionalOfferPriceInlineCreate
     */
    relationships?: SubscriptionOfferCodePriceRelationships;
}


/**
 * @export
 */
export const SubscriptionPromotionalOfferPriceInlineCreateTypeEnum = {
    SubscriptionPromotionalOfferPrices: 'subscriptionPromotionalOfferPrices'
} as const;
export type SubscriptionPromotionalOfferPriceInlineCreateTypeEnum = typeof SubscriptionPromotionalOfferPriceInlineCreateTypeEnum[keyof typeof SubscriptionPromotionalOfferPriceInlineCreateTypeEnum];


/**
 * Check if a given object implements the SubscriptionPromotionalOfferPriceInlineCreate interface.
 */
export function instanceOfSubscriptionPromotionalOfferPriceInlineCreate(value: object): value is SubscriptionPromotionalOfferPriceInlineCreate {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function SubscriptionPromotionalOfferPriceInlineCreateFromJSON(json: any): SubscriptionPromotionalOfferPriceInlineCreate {
    return SubscriptionPromotionalOfferPriceInlineCreateFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferPriceInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferPriceInlineCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'] == null ? undefined : json['id'],
        'relationships': json['relationships'] == null ? undefined : SubscriptionOfferCodePriceRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionPromotionalOfferPriceInlineCreateToJSON(json: any): SubscriptionPromotionalOfferPriceInlineCreate {
    return SubscriptionPromotionalOfferPriceInlineCreateToJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferPriceInlineCreateToJSONTyped(value?: SubscriptionPromotionalOfferPriceInlineCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'relationships': SubscriptionOfferCodePriceRelationshipsToJSON(value['relationships']),
    };
}
