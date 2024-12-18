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
import type { SubscriptionAttributes } from './SubscriptionAttributes';
import {
    SubscriptionAttributesFromJSON,
    SubscriptionAttributesFromJSONTyped,
    SubscriptionAttributesToJSON,
    SubscriptionAttributesToJSONTyped,
} from './SubscriptionAttributes';
import type { SubscriptionRelationships } from './SubscriptionRelationships';
import {
    SubscriptionRelationshipsFromJSON,
    SubscriptionRelationshipsFromJSONTyped,
    SubscriptionRelationshipsToJSON,
    SubscriptionRelationshipsToJSONTyped,
} from './SubscriptionRelationships';

/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    type: SubscriptionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    id: string;
    /**
     * 
     * @type {SubscriptionAttributes}
     * @memberof Subscription
     */
    attributes?: SubscriptionAttributes;
    /**
     * 
     * @type {SubscriptionRelationships}
     * @memberof Subscription
     */
    relationships?: SubscriptionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof Subscription
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionTypeEnum = {
    Subscriptions: 'subscriptions'
} as const;
export type SubscriptionTypeEnum = typeof SubscriptionTypeEnum[keyof typeof SubscriptionTypeEnum];


/**
 * Check if a given object implements the Subscription interface.
 */
export function instanceOfSubscription(value: object): value is Subscription {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionFromJSON(json: any): Subscription {
    return SubscriptionFromJSONTyped(json, false);
}

export function SubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscription {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : SubscriptionAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : SubscriptionRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionToJSON(json: any): Subscription {
    return SubscriptionToJSONTyped(json, false);
}

export function SubscriptionToJSONTyped(value?: Subscription | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': SubscriptionAttributesToJSON(value['attributes']),
        'relationships': SubscriptionRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

