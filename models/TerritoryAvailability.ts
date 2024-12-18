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
import type { TerritoryAvailabilityAttributes } from './TerritoryAvailabilityAttributes';
import {
    TerritoryAvailabilityAttributesFromJSON,
    TerritoryAvailabilityAttributesFromJSONTyped,
    TerritoryAvailabilityAttributesToJSON,
    TerritoryAvailabilityAttributesToJSONTyped,
} from './TerritoryAvailabilityAttributes';
import type { TerritoryAvailabilityRelationships } from './TerritoryAvailabilityRelationships';
import {
    TerritoryAvailabilityRelationshipsFromJSON,
    TerritoryAvailabilityRelationshipsFromJSONTyped,
    TerritoryAvailabilityRelationshipsToJSON,
    TerritoryAvailabilityRelationshipsToJSONTyped,
} from './TerritoryAvailabilityRelationships';

/**
 * 
 * @export
 * @interface TerritoryAvailability
 */
export interface TerritoryAvailability {
    /**
     * 
     * @type {string}
     * @memberof TerritoryAvailability
     */
    type: TerritoryAvailabilityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TerritoryAvailability
     */
    id: string;
    /**
     * 
     * @type {TerritoryAvailabilityAttributes}
     * @memberof TerritoryAvailability
     */
    attributes?: TerritoryAvailabilityAttributes;
    /**
     * 
     * @type {TerritoryAvailabilityRelationships}
     * @memberof TerritoryAvailability
     */
    relationships?: TerritoryAvailabilityRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof TerritoryAvailability
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const TerritoryAvailabilityTypeEnum = {
    TerritoryAvailabilities: 'territoryAvailabilities'
} as const;
export type TerritoryAvailabilityTypeEnum = typeof TerritoryAvailabilityTypeEnum[keyof typeof TerritoryAvailabilityTypeEnum];


/**
 * Check if a given object implements the TerritoryAvailability interface.
 */
export function instanceOfTerritoryAvailability(value: object): value is TerritoryAvailability {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function TerritoryAvailabilityFromJSON(json: any): TerritoryAvailability {
    return TerritoryAvailabilityFromJSONTyped(json, false);
}

export function TerritoryAvailabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryAvailability {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : TerritoryAvailabilityAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : TerritoryAvailabilityRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function TerritoryAvailabilityToJSON(json: any): TerritoryAvailability {
    return TerritoryAvailabilityToJSONTyped(json, false);
}

export function TerritoryAvailabilityToJSONTyped(value?: TerritoryAvailability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': TerritoryAvailabilityAttributesToJSON(value['attributes']),
        'relationships': TerritoryAvailabilityRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

