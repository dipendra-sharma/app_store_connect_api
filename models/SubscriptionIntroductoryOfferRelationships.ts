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
import type { SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint } from './SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint';
import {
    SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSON,
    SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSONTyped,
    SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointToJSON,
    SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointToJSONTyped,
} from './SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint';
import type { AppPricePointV3RelationshipsTerritory } from './AppPricePointV3RelationshipsTerritory';
import {
    AppPricePointV3RelationshipsTerritoryFromJSON,
    AppPricePointV3RelationshipsTerritoryFromJSONTyped,
    AppPricePointV3RelationshipsTerritoryToJSON,
    AppPricePointV3RelationshipsTerritoryToJSONTyped,
} from './AppPricePointV3RelationshipsTerritory';
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
 * @interface SubscriptionIntroductoryOfferRelationships
 */
export interface SubscriptionIntroductoryOfferRelationships {
    /**
     * 
     * @type {PromotedPurchaseRelationshipsSubscription}
     * @memberof SubscriptionIntroductoryOfferRelationships
     */
    subscription?: PromotedPurchaseRelationshipsSubscription;
    /**
     * 
     * @type {AppPricePointV3RelationshipsTerritory}
     * @memberof SubscriptionIntroductoryOfferRelationships
     */
    territory?: AppPricePointV3RelationshipsTerritory;
    /**
     * 
     * @type {SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint}
     * @memberof SubscriptionIntroductoryOfferRelationships
     */
    subscriptionPricePoint?: SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferRelationships interface.
 */
export function instanceOfSubscriptionIntroductoryOfferRelationships(value: object): value is SubscriptionIntroductoryOfferRelationships {
    return true;
}

export function SubscriptionIntroductoryOfferRelationshipsFromJSON(json: any): SubscriptionIntroductoryOfferRelationships {
    return SubscriptionIntroductoryOfferRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'subscription': json['subscription'] == null ? undefined : PromotedPurchaseRelationshipsSubscriptionFromJSON(json['subscription']),
        'territory': json['territory'] == null ? undefined : AppPricePointV3RelationshipsTerritoryFromJSON(json['territory']),
        'subscriptionPricePoint': json['subscriptionPricePoint'] == null ? undefined : SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSON(json['subscriptionPricePoint']),
    };
}

export function SubscriptionIntroductoryOfferRelationshipsToJSON(json: any): SubscriptionIntroductoryOfferRelationships {
    return SubscriptionIntroductoryOfferRelationshipsToJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferRelationshipsToJSONTyped(value?: SubscriptionIntroductoryOfferRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subscription': PromotedPurchaseRelationshipsSubscriptionToJSON(value['subscription']),
        'territory': AppPricePointV3RelationshipsTerritoryToJSON(value['territory']),
        'subscriptionPricePoint': SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointToJSON(value['subscriptionPricePoint']),
    };
}

