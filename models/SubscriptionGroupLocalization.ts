
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
import type { SubscriptionGroupLocalizationAttributes } from './SubscriptionGroupLocalizationAttributes';
import {
    SubscriptionGroupLocalizationAttributesFromJSON,
    SubscriptionGroupLocalizationAttributesFromJSONTyped,
    SubscriptionGroupLocalizationAttributesToJSON,
    SubscriptionGroupLocalizationAttributesToJSONTyped,
} from './SubscriptionGroupLocalizationAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { SubscriptionGroupLocalizationRelationships } from './SubscriptionGroupLocalizationRelationships';
import {
    SubscriptionGroupLocalizationRelationshipsFromJSON,
    SubscriptionGroupLocalizationRelationshipsFromJSONTyped,
    SubscriptionGroupLocalizationRelationshipsToJSON,
    SubscriptionGroupLocalizationRelationshipsToJSONTyped,
} from './SubscriptionGroupLocalizationRelationships';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalization
 */
export interface SubscriptionGroupLocalization {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupLocalization
     */
    type: SubscriptionGroupLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupLocalization
     */
    id: string;
    /**
     * 
     * @type {SubscriptionGroupLocalizationAttributes}
     * @memberof SubscriptionGroupLocalization
     */
    attributes?: SubscriptionGroupLocalizationAttributes;
    /**
     * 
     * @type {SubscriptionGroupLocalizationRelationships}
     * @memberof SubscriptionGroupLocalization
     */
    relationships?: SubscriptionGroupLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionGroupLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionGroupLocalizationTypeEnum = {
    SubscriptionGroupLocalizations: 'subscriptionGroupLocalizations'
} as const;
export type SubscriptionGroupLocalizationTypeEnum = typeof SubscriptionGroupLocalizationTypeEnum[keyof typeof SubscriptionGroupLocalizationTypeEnum];


/**
 * Check if a given object implements the SubscriptionGroupLocalization interface.
 */
export function instanceOfSubscriptionGroupLocalization(value: object): value is SubscriptionGroupLocalization {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionGroupLocalizationFromJSON(json: any): SubscriptionGroupLocalization {
    return SubscriptionGroupLocalizationFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : SubscriptionGroupLocalizationAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : SubscriptionGroupLocalizationRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionGroupLocalizationToJSON(json: any): SubscriptionGroupLocalization {
    return SubscriptionGroupLocalizationToJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationToJSONTyped(value?: SubscriptionGroupLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': SubscriptionGroupLocalizationAttributesToJSON(value['attributes']),
        'relationships': SubscriptionGroupLocalizationRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

