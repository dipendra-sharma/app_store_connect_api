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
import type { SubscriptionOfferCodeRelationships } from './SubscriptionOfferCodeRelationships';
import {
    SubscriptionOfferCodeRelationshipsFromJSON,
    SubscriptionOfferCodeRelationshipsFromJSONTyped,
    SubscriptionOfferCodeRelationshipsToJSON,
    SubscriptionOfferCodeRelationshipsToJSONTyped,
} from './SubscriptionOfferCodeRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { SubscriptionOfferCodeAttributes } from './SubscriptionOfferCodeAttributes';
import {
    SubscriptionOfferCodeAttributesFromJSON,
    SubscriptionOfferCodeAttributesFromJSONTyped,
    SubscriptionOfferCodeAttributesToJSON,
    SubscriptionOfferCodeAttributesToJSONTyped,
} from './SubscriptionOfferCodeAttributes';

/**
 * 
 * @export
 * @interface SubscriptionOfferCode
 */
export interface SubscriptionOfferCode {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCode
     */
    type: SubscriptionOfferCodeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCode
     */
    id: string;
    /**
     * 
     * @type {SubscriptionOfferCodeAttributes}
     * @memberof SubscriptionOfferCode
     */
    attributes?: SubscriptionOfferCodeAttributes;
    /**
     * 
     * @type {SubscriptionOfferCodeRelationships}
     * @memberof SubscriptionOfferCode
     */
    relationships?: SubscriptionOfferCodeRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionOfferCode
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionOfferCodeTypeEnum = {
    SubscriptionOfferCodes: 'subscriptionOfferCodes'
} as const;
export type SubscriptionOfferCodeTypeEnum = typeof SubscriptionOfferCodeTypeEnum[keyof typeof SubscriptionOfferCodeTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCode interface.
 */
export function instanceOfSubscriptionOfferCode(value: object): value is SubscriptionOfferCode {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodeFromJSON(json: any): SubscriptionOfferCode {
    return SubscriptionOfferCodeFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCode {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : SubscriptionOfferCodeAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : SubscriptionOfferCodeRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionOfferCodeToJSON(json: any): SubscriptionOfferCode {
    return SubscriptionOfferCodeToJSONTyped(json, false);
}

export function SubscriptionOfferCodeToJSONTyped(value?: SubscriptionOfferCode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': SubscriptionOfferCodeAttributesToJSON(value['attributes']),
        'relationships': SubscriptionOfferCodeRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

