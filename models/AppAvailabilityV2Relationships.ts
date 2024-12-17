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
import type { AppAvailabilityV2RelationshipsTerritoryAvailabilities } from './AppAvailabilityV2RelationshipsTerritoryAvailabilities';
import {
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesFromJSON,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesFromJSONTyped,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesToJSON,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesToJSONTyped,
} from './AppAvailabilityV2RelationshipsTerritoryAvailabilities';

/**
 * 
 * @export
 * @interface AppAvailabilityV2Relationships
 */
export interface AppAvailabilityV2Relationships {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilities}
     * @memberof AppAvailabilityV2Relationships
     */
    territoryAvailabilities?: AppAvailabilityV2RelationshipsTerritoryAvailabilities;
}

/**
 * Check if a given object implements the AppAvailabilityV2Relationships interface.
 */
export function instanceOfAppAvailabilityV2Relationships(value: object): value is AppAvailabilityV2Relationships {
    return true;
}

export function AppAvailabilityV2RelationshipsFromJSON(json: any): AppAvailabilityV2Relationships {
    return AppAvailabilityV2RelationshipsFromJSONTyped(json, false);
}

export function AppAvailabilityV2RelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2Relationships {
    if (json == null) {
        return json;
    }
    return {
        
        'territoryAvailabilities': json['territoryAvailabilities'] == null ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesFromJSON(json['territoryAvailabilities']),
    };
}

export function AppAvailabilityV2RelationshipsToJSON(json: any): AppAvailabilityV2Relationships {
    return AppAvailabilityV2RelationshipsToJSONTyped(json, false);
}

export function AppAvailabilityV2RelationshipsToJSONTyped(value?: AppAvailabilityV2Relationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'territoryAvailabilities': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesToJSON(value['territoryAvailabilities']),
    };
}

