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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodePrice
 */
export interface SubscriptionOfferCodePrice {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodePrice
     */
    type: SubscriptionOfferCodePriceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodePrice
     */
    id: string;
    /**
     * 
     * @type {SubscriptionOfferCodePriceRelationships}
     * @memberof SubscriptionOfferCodePrice
     */
    relationships?: SubscriptionOfferCodePriceRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionOfferCodePrice
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionOfferCodePriceTypeEnum = {
    SubscriptionOfferCodePrices: 'subscriptionOfferCodePrices'
} as const;
export type SubscriptionOfferCodePriceTypeEnum = typeof SubscriptionOfferCodePriceTypeEnum[keyof typeof SubscriptionOfferCodePriceTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodePrice interface.
 */
export function instanceOfSubscriptionOfferCodePrice(value: object): value is SubscriptionOfferCodePrice {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodePriceFromJSON(json: any): SubscriptionOfferCodePrice {
    return SubscriptionOfferCodePriceFromJSONTyped(json, false);
}

export function SubscriptionOfferCodePriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodePrice {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'relationships': json['relationships'] == null ? undefined : SubscriptionOfferCodePriceRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionOfferCodePriceToJSON(json: any): SubscriptionOfferCodePrice {
    return SubscriptionOfferCodePriceToJSONTyped(json, false);
}

export function SubscriptionOfferCodePriceToJSONTyped(value?: SubscriptionOfferCodePrice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'relationships': SubscriptionOfferCodePriceRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

