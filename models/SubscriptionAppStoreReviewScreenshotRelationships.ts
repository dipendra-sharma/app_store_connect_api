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
import type { PromotedPurchaseRelationshipsSubscription } from './PromotedPurchaseRelationshipsSubscription';
import {
    PromotedPurchaseRelationshipsSubscriptionFromJSON,
    PromotedPurchaseRelationshipsSubscriptionFromJSONTyped,
    PromotedPurchaseRelationshipsSubscriptionToJSON,
    PromotedPurchaseRelationshipsSubscriptionToJSONTyped,
} from './PromotedPurchaseRelationshipsSubscription';

/**
 * 
 * @export
 * @interface SubscriptionAppStoreReviewScreenshotRelationships
 */
export interface SubscriptionAppStoreReviewScreenshotRelationships {
    /**
     * 
     * @type {PromotedPurchaseRelationshipsSubscription}
     * @memberof SubscriptionAppStoreReviewScreenshotRelationships
     */
    subscription?: PromotedPurchaseRelationshipsSubscription;
}

/**
 * Check if a given object implements the SubscriptionAppStoreReviewScreenshotRelationships interface.
 */
export function instanceOfSubscriptionAppStoreReviewScreenshotRelationships(value: object): value is SubscriptionAppStoreReviewScreenshotRelationships {
    return true;
}

export function SubscriptionAppStoreReviewScreenshotRelationshipsFromJSON(json: any): SubscriptionAppStoreReviewScreenshotRelationships {
    return SubscriptionAppStoreReviewScreenshotRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionAppStoreReviewScreenshotRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAppStoreReviewScreenshotRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'subscription': json['subscription'] == null ? undefined : PromotedPurchaseRelationshipsSubscriptionFromJSON(json['subscription']),
    };
}

export function SubscriptionAppStoreReviewScreenshotRelationshipsToJSON(json: any): SubscriptionAppStoreReviewScreenshotRelationships {
    return SubscriptionAppStoreReviewScreenshotRelationshipsToJSONTyped(json, false);
}

export function SubscriptionAppStoreReviewScreenshotRelationshipsToJSONTyped(value?: SubscriptionAppStoreReviewScreenshotRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subscription': PromotedPurchaseRelationshipsSubscriptionToJSON(value['subscription']),
    };
}

