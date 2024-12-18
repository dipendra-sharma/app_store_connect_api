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
import type { SubscriptionGroupRelationships } from './SubscriptionGroupRelationships';
import {
    SubscriptionGroupRelationshipsFromJSON,
    SubscriptionGroupRelationshipsFromJSONTyped,
    SubscriptionGroupRelationshipsToJSON,
    SubscriptionGroupRelationshipsToJSONTyped,
} from './SubscriptionGroupRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { GameCenterGroupAttributes } from './GameCenterGroupAttributes';
import {
    GameCenterGroupAttributesFromJSON,
    GameCenterGroupAttributesFromJSONTyped,
    GameCenterGroupAttributesToJSON,
    GameCenterGroupAttributesToJSONTyped,
} from './GameCenterGroupAttributes';

/**
 * 
 * @export
 * @interface SubscriptionGroup
 */
export interface SubscriptionGroup {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroup
     */
    type: SubscriptionGroupTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroup
     */
    id: string;
    /**
     * 
     * @type {GameCenterGroupAttributes}
     * @memberof SubscriptionGroup
     */
    attributes?: GameCenterGroupAttributes;
    /**
     * 
     * @type {SubscriptionGroupRelationships}
     * @memberof SubscriptionGroup
     */
    relationships?: SubscriptionGroupRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionGroup
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionGroupTypeEnum = {
    SubscriptionGroups: 'subscriptionGroups'
} as const;
export type SubscriptionGroupTypeEnum = typeof SubscriptionGroupTypeEnum[keyof typeof SubscriptionGroupTypeEnum];


/**
 * Check if a given object implements the SubscriptionGroup interface.
 */
export function instanceOfSubscriptionGroup(value: object): value is SubscriptionGroup {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionGroupFromJSON(json: any): SubscriptionGroup {
    return SubscriptionGroupFromJSONTyped(json, false);
}

export function SubscriptionGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterGroupAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : SubscriptionGroupRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionGroupToJSON(json: any): SubscriptionGroup {
    return SubscriptionGroupToJSONTyped(json, false);
}

export function SubscriptionGroupToJSONTyped(value?: SubscriptionGroup | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterGroupAttributesToJSON(value['attributes']),
        'relationships': SubscriptionGroupRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

