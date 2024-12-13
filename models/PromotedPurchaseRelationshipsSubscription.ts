
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
 * @interface PromotedPurchaseRelationshipsSubscription
 */
export interface PromotedPurchaseRelationshipsSubscription {
    /**
     * 
     * @type {PromotedPurchaseRelationshipsSubscriptionData}
     * @memberof PromotedPurchaseRelationshipsSubscription
     */
    data?: PromotedPurchaseRelationshipsSubscriptionData;
}

/**
 * Check if a given object implements the PromotedPurchaseRelationshipsSubscription interface.
 */
export function instanceOfPromotedPurchaseRelationshipsSubscription(value: object): value is PromotedPurchaseRelationshipsSubscription {
    return true;
}

export function PromotedPurchaseRelationshipsSubscriptionFromJSON(json: any): PromotedPurchaseRelationshipsSubscription {
    return PromotedPurchaseRelationshipsSubscriptionFromJSONTyped(json, false);
}

export function PromotedPurchaseRelationshipsSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseRelationshipsSubscription {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : PromotedPurchaseRelationshipsSubscriptionDataFromJSON(json['data']),
    };
}

export function PromotedPurchaseRelationshipsSubscriptionToJSON(json: any): PromotedPurchaseRelationshipsSubscription {
    return PromotedPurchaseRelationshipsSubscriptionToJSONTyped(json, false);
}

export function PromotedPurchaseRelationshipsSubscriptionToJSONTyped(value?: PromotedPurchaseRelationshipsSubscription | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': PromotedPurchaseRelationshipsSubscriptionDataToJSON(value['data']),
    };
}
