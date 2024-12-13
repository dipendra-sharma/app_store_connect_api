
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
import type { SubscriptionUpdateRequestDataRelationshipsPromotionalOffers } from './SubscriptionUpdateRequestDataRelationshipsPromotionalOffers';
import {
    SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSON,
    SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSONTyped,
    SubscriptionUpdateRequestDataRelationshipsPromotionalOffersToJSON,
    SubscriptionUpdateRequestDataRelationshipsPromotionalOffersToJSONTyped,
} from './SubscriptionUpdateRequestDataRelationshipsPromotionalOffers';
import type { SubscriptionUpdateRequestDataRelationshipsPrices } from './SubscriptionUpdateRequestDataRelationshipsPrices';
import {
    SubscriptionUpdateRequestDataRelationshipsPricesFromJSON,
    SubscriptionUpdateRequestDataRelationshipsPricesFromJSONTyped,
    SubscriptionUpdateRequestDataRelationshipsPricesToJSON,
    SubscriptionUpdateRequestDataRelationshipsPricesToJSONTyped,
} from './SubscriptionUpdateRequestDataRelationshipsPrices';
import type { SubscriptionUpdateRequestDataRelationshipsIntroductoryOffers } from './SubscriptionUpdateRequestDataRelationshipsIntroductoryOffers';
import {
    SubscriptionUpdateRequestDataRelationshipsIntroductoryOffersFromJSON,
    SubscriptionUpdateRequestDataRelationshipsIntroductoryOffersFromJSONTyped,
    SubscriptionUpdateRequestDataRelationshipsIntroductoryOffersToJSON,
    SubscriptionUpdateRequestDataRelationshipsIntroductoryOffersToJSONTyped,
} from './SubscriptionUpdateRequestDataRelationshipsIntroductoryOffers';

/**
 * 
 * @export
 * @interface SubscriptionUpdateRequestDataRelationships
 */
export interface SubscriptionUpdateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionUpdateRequestDataRelationshipsIntroductoryOffers}
     * @memberof SubscriptionUpdateRequestDataRelationships
     */
    introductoryOffers?: SubscriptionUpdateRequestDataRelationshipsIntroductoryOffers;
    /**
     * 
     * @type {SubscriptionUpdateRequestDataRelationshipsPromotionalOffers}
     * @memberof SubscriptionUpdateRequestDataRelationships
     */
    promotionalOffers?: SubscriptionUpdateRequestDataRelationshipsPromotionalOffers;
    /**
     * 
     * @type {SubscriptionUpdateRequestDataRelationshipsPrices}
     * @memberof SubscriptionUpdateRequestDataRelationships
     */
    prices?: SubscriptionUpdateRequestDataRelationshipsPrices;
}

/**
 * Check if a given object implements the SubscriptionUpdateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionUpdateRequestDataRelationships(value: object): value is SubscriptionUpdateRequestDataRelationships {
    return true;
}

export function SubscriptionUpdateRequestDataRelationshipsFromJSON(json: any): SubscriptionUpdateRequestDataRelationships {
    return SubscriptionUpdateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'introductoryOffers': json['introductoryOffers'] == null ? undefined : SubscriptionUpdateRequestDataRelationshipsIntroductoryOffersFromJSON(json['introductoryOffers']),
        'promotionalOffers': json['promotionalOffers'] == null ? undefined : SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSON(json['promotionalOffers']),
        'prices': json['prices'] == null ? undefined : SubscriptionUpdateRequestDataRelationshipsPricesFromJSON(json['prices']),
    };
}

export function SubscriptionUpdateRequestDataRelationshipsToJSON(json: any): SubscriptionUpdateRequestDataRelationships {
    return SubscriptionUpdateRequestDataRelationshipsToJSONTyped(json, false);
}

export function SubscriptionUpdateRequestDataRelationshipsToJSONTyped(value?: SubscriptionUpdateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'introductoryOffers': SubscriptionUpdateRequestDataRelationshipsIntroductoryOffersToJSON(value['introductoryOffers']),
        'promotionalOffers': SubscriptionUpdateRequestDataRelationshipsPromotionalOffersToJSON(value['promotionalOffers']),
        'prices': SubscriptionUpdateRequestDataRelationshipsPricesToJSON(value['prices']),
    };
}

