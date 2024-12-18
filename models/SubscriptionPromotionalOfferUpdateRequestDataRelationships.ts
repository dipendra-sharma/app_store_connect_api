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
import type { SubscriptionPromotionalOfferInlineCreateRelationshipsPrices } from './SubscriptionPromotionalOfferInlineCreateRelationshipsPrices';
import {
    SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSON,
    SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSONTyped,
    SubscriptionPromotionalOfferInlineCreateRelationshipsPricesToJSON,
    SubscriptionPromotionalOfferInlineCreateRelationshipsPricesToJSONTyped,
} from './SubscriptionPromotionalOfferInlineCreateRelationshipsPrices';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferUpdateRequestDataRelationships
 */
export interface SubscriptionPromotionalOfferUpdateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionPromotionalOfferInlineCreateRelationshipsPrices}
     * @memberof SubscriptionPromotionalOfferUpdateRequestDataRelationships
     */
    prices?: SubscriptionPromotionalOfferInlineCreateRelationshipsPrices;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferUpdateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionPromotionalOfferUpdateRequestDataRelationships(value: object): value is SubscriptionPromotionalOfferUpdateRequestDataRelationships {
    return true;
}

export function SubscriptionPromotionalOfferUpdateRequestDataRelationshipsFromJSON(json: any): SubscriptionPromotionalOfferUpdateRequestDataRelationships {
    return SubscriptionPromotionalOfferUpdateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferUpdateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'prices': json['prices'] == null ? undefined : SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSON(json['prices']),
    };
}

export function SubscriptionPromotionalOfferUpdateRequestDataRelationshipsToJSON(json: any): SubscriptionPromotionalOfferUpdateRequestDataRelationships {
    return SubscriptionPromotionalOfferUpdateRequestDataRelationshipsToJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferUpdateRequestDataRelationshipsToJSONTyped(value?: SubscriptionPromotionalOfferUpdateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'prices': SubscriptionPromotionalOfferInlineCreateRelationshipsPricesToJSON(value['prices']),
    };
}

