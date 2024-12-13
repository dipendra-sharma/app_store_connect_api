
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
import type { PromotedPurchaseRelationshipsSubscriptionData } from './PromotedPurchaseRelationshipsSubscriptionData';
import {
    PromotedPurchaseRelationshipsSubscriptionDataFromJSON,
    PromotedPurchaseRelationshipsSubscriptionDataFromJSONTyped,
    PromotedPurchaseRelationshipsSubscriptionDataToJSON,
    PromotedPurchaseRelationshipsSubscriptionDataToJSONTyped,
} from './PromotedPurchaseRelationshipsSubscriptionData';

/**
 * 
 * @export
 * @interface SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription
 */
export interface SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription {
    /**
     * 
     * @type {PromotedPurchaseRelationshipsSubscriptionData}
     * @memberof SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription
     */
    data: PromotedPurchaseRelationshipsSubscriptionData;
}

/**
 * Check if a given object implements the SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription interface.
 */
export function instanceOfSubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription(value: object): value is SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON(json: any): SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription {
    return SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSONTyped(json, false);
}

export function SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription {
    if (json == null) {
        return json;
    }
    return {
        
        'data': PromotedPurchaseRelationshipsSubscriptionDataFromJSON(json['data']),
    };
}

export function SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON(json: any): SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription {
    return SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSONTyped(json, false);
}

export function SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSONTyped(value?: SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': PromotedPurchaseRelationshipsSubscriptionDataToJSON(value['data']),
    };
}
