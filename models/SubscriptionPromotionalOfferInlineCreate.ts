
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
import type { SubscriptionPromotionalOfferInlineCreateAttributes } from './SubscriptionPromotionalOfferInlineCreateAttributes';
import {
    SubscriptionPromotionalOfferInlineCreateAttributesFromJSON,
    SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped,
    SubscriptionPromotionalOfferInlineCreateAttributesToJSON,
    SubscriptionPromotionalOfferInlineCreateAttributesToJSONTyped,
} from './SubscriptionPromotionalOfferInlineCreateAttributes';
import type { SubscriptionPromotionalOfferInlineCreateRelationships } from './SubscriptionPromotionalOfferInlineCreateRelationships';
import {
    SubscriptionPromotionalOfferInlineCreateRelationshipsFromJSON,
    SubscriptionPromotionalOfferInlineCreateRelationshipsFromJSONTyped,
    SubscriptionPromotionalOfferInlineCreateRelationshipsToJSON,
    SubscriptionPromotionalOfferInlineCreateRelationshipsToJSONTyped,
} from './SubscriptionPromotionalOfferInlineCreateRelationships';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferInlineCreate
 */
export interface SubscriptionPromotionalOfferInlineCreate {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferInlineCreate
     */
    type: SubscriptionPromotionalOfferInlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferInlineCreate
     */
    id?: string;
    /**
     * 
     * @type {SubscriptionPromotionalOfferInlineCreateAttributes}
     * @memberof SubscriptionPromotionalOfferInlineCreate
     */
    attributes: SubscriptionPromotionalOfferInlineCreateAttributes;
    /**
     * 
     * @type {SubscriptionPromotionalOfferInlineCreateRelationships}
     * @memberof SubscriptionPromotionalOfferInlineCreate
     */
    relationships?: SubscriptionPromotionalOfferInlineCreateRelationships;
}


/**
 * @export
 */
export const SubscriptionPromotionalOfferInlineCreateTypeEnum = {
    SubscriptionPromotionalOffers: 'subscriptionPromotionalOffers'
} as const;
export type SubscriptionPromotionalOfferInlineCreateTypeEnum = typeof SubscriptionPromotionalOfferInlineCreateTypeEnum[keyof typeof SubscriptionPromotionalOfferInlineCreateTypeEnum];


/**
 * Check if a given object implements the SubscriptionPromotionalOfferInlineCreate interface.
 */
export function instanceOfSubscriptionPromotionalOfferInlineCreate(value: object): value is SubscriptionPromotionalOfferInlineCreate {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function SubscriptionPromotionalOfferInlineCreateFromJSON(json: any): SubscriptionPromotionalOfferInlineCreate {
    return SubscriptionPromotionalOfferInlineCreateFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferInlineCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': SubscriptionPromotionalOfferInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : SubscriptionPromotionalOfferInlineCreateRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionPromotionalOfferInlineCreateToJSON(json: any): SubscriptionPromotionalOfferInlineCreate {
    return SubscriptionPromotionalOfferInlineCreateToJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferInlineCreateToJSONTyped(value?: SubscriptionPromotionalOfferInlineCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': SubscriptionPromotionalOfferInlineCreateAttributesToJSON(value['attributes']),
        'relationships': SubscriptionPromotionalOfferInlineCreateRelationshipsToJSON(value['relationships']),
    };
}
