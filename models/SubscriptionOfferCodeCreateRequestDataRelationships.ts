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
import type { SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription } from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';
import {
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSONTyped,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSONTyped,
} from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';
import type { SubscriptionOfferCodeCreateRequestDataRelationshipsPrices } from './SubscriptionOfferCodeCreateRequestDataRelationshipsPrices';
import {
    SubscriptionOfferCodeCreateRequestDataRelationshipsPricesFromJSON,
    SubscriptionOfferCodeCreateRequestDataRelationshipsPricesFromJSONTyped,
    SubscriptionOfferCodeCreateRequestDataRelationshipsPricesToJSON,
    SubscriptionOfferCodeCreateRequestDataRelationshipsPricesToJSONTyped,
} from './SubscriptionOfferCodeCreateRequestDataRelationshipsPrices';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCreateRequestDataRelationships
 */
export interface SubscriptionOfferCodeCreateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription}
     * @memberof SubscriptionOfferCodeCreateRequestDataRelationships
     */
    subscription: SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription;
    /**
     * 
     * @type {SubscriptionOfferCodeCreateRequestDataRelationshipsPrices}
     * @memberof SubscriptionOfferCodeCreateRequestDataRelationships
     */
    prices: SubscriptionOfferCodeCreateRequestDataRelationshipsPrices;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCreateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionOfferCodeCreateRequestDataRelationships(value: object): value is SubscriptionOfferCodeCreateRequestDataRelationships {
    if (!('subscription' in value) || value['subscription'] === undefined) return false;
    if (!('prices' in value) || value['prices'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSON(json: any): SubscriptionOfferCodeCreateRequestDataRelationships {
    return SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON(json['subscription']),
        'prices': SubscriptionOfferCodeCreateRequestDataRelationshipsPricesFromJSON(json['prices']),
    };
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsToJSON(json: any): SubscriptionOfferCodeCreateRequestDataRelationships {
    return SubscriptionOfferCodeCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsToJSONTyped(value?: SubscriptionOfferCodeCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON(value['subscription']),
        'prices': SubscriptionOfferCodeCreateRequestDataRelationshipsPricesToJSON(value['prices']),
    };
}

