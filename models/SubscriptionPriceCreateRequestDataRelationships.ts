
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
import type { SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint } from './SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint';
import {
    SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointFromJSON,
    SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointFromJSONTyped,
    SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointToJSON,
    SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointToJSONTyped,
} from './SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint';
import type { AppPricePointV3RelationshipsTerritory } from './AppPricePointV3RelationshipsTerritory';
import {
    AppPricePointV3RelationshipsTerritoryFromJSON,
    AppPricePointV3RelationshipsTerritoryFromJSONTyped,
    AppPricePointV3RelationshipsTerritoryToJSON,
    AppPricePointV3RelationshipsTerritoryToJSONTyped,
} from './AppPricePointV3RelationshipsTerritory';

/**
 * 
 * @export
 * @interface SubscriptionPriceCreateRequestDataRelationships
 */
export interface SubscriptionPriceCreateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription}
     * @memberof SubscriptionPriceCreateRequestDataRelationships
     */
    subscription: SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription;
    /**
     * 
     * @type {AppPricePointV3RelationshipsTerritory}
     * @memberof SubscriptionPriceCreateRequestDataRelationships
     */
    territory?: AppPricePointV3RelationshipsTerritory;
    /**
     * 
     * @type {SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint}
     * @memberof SubscriptionPriceCreateRequestDataRelationships
     */
    subscriptionPricePoint: SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint;
}

/**
 * Check if a given object implements the SubscriptionPriceCreateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionPriceCreateRequestDataRelationships(value: object): value is SubscriptionPriceCreateRequestDataRelationships {
    if (!('subscription' in value) || value['subscription'] === undefined) return false;
    if (!('subscriptionPricePoint' in value) || value['subscriptionPricePoint'] === undefined) return false;
    return true;
}

export function SubscriptionPriceCreateRequestDataRelationshipsFromJSON(json: any): SubscriptionPriceCreateRequestDataRelationships {
    return SubscriptionPriceCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionPriceCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPriceCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON(json['subscription']),
        'territory': json['territory'] == null ? undefined : AppPricePointV3RelationshipsTerritoryFromJSON(json['territory']),
        'subscriptionPricePoint': SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointFromJSON(json['subscriptionPricePoint']),
    };
}

export function SubscriptionPriceCreateRequestDataRelationshipsToJSON(json: any): SubscriptionPriceCreateRequestDataRelationships {
    return SubscriptionPriceCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function SubscriptionPriceCreateRequestDataRelationshipsToJSONTyped(value?: SubscriptionPriceCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON(value['subscription']),
        'territory': AppPricePointV3RelationshipsTerritoryToJSON(value['territory']),
        'subscriptionPricePoint': SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointToJSON(value['subscriptionPricePoint']),
    };
}

