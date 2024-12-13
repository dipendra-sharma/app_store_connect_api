
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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { InAppPurchasePricePointRelationships } from './InAppPurchasePricePointRelationships';
import {
    InAppPurchasePricePointRelationshipsFromJSON,
    InAppPurchasePricePointRelationshipsFromJSONTyped,
    InAppPurchasePricePointRelationshipsToJSON,
    InAppPurchasePricePointRelationshipsToJSONTyped,
} from './InAppPurchasePricePointRelationships';
import type { SubscriptionPricePointAttributes } from './SubscriptionPricePointAttributes';
import {
    SubscriptionPricePointAttributesFromJSON,
    SubscriptionPricePointAttributesFromJSONTyped,
    SubscriptionPricePointAttributesToJSON,
    SubscriptionPricePointAttributesToJSONTyped,
} from './SubscriptionPricePointAttributes';

/**
 * 
 * @export
 * @interface SubscriptionPricePoint
 */
export interface SubscriptionPricePoint {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPricePoint
     */
    type: SubscriptionPricePointTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPricePoint
     */
    id: string;
    /**
     * 
     * @type {SubscriptionPricePointAttributes}
     * @memberof SubscriptionPricePoint
     */
    attributes?: SubscriptionPricePointAttributes;
    /**
     * 
     * @type {InAppPurchasePricePointRelationships}
     * @memberof SubscriptionPricePoint
     */
    relationships?: InAppPurchasePricePointRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionPricePoint
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionPricePointTypeEnum = {
    SubscriptionPricePoints: 'subscriptionPricePoints'
} as const;
export type SubscriptionPricePointTypeEnum = typeof SubscriptionPricePointTypeEnum[keyof typeof SubscriptionPricePointTypeEnum];


/**
 * Check if a given object implements the SubscriptionPricePoint interface.
 */
export function instanceOfSubscriptionPricePoint(value: object): value is SubscriptionPricePoint {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionPricePointFromJSON(json: any): SubscriptionPricePoint {
    return SubscriptionPricePointFromJSONTyped(json, false);
}

export function SubscriptionPricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPricePoint {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : SubscriptionPricePointAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : InAppPurchasePricePointRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionPricePointToJSON(json: any): SubscriptionPricePoint {
    return SubscriptionPricePointToJSONTyped(json, false);
}

export function SubscriptionPricePointToJSONTyped(value?: SubscriptionPricePoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': SubscriptionPricePointAttributesToJSON(value['attributes']),
        'relationships': InAppPurchasePricePointRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
