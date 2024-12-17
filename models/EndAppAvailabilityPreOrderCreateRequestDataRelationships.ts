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
import type { AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities } from './AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities';
import {
    AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesFromJSON,
    AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesFromJSONTyped,
    AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesToJSON,
    AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesToJSONTyped,
} from './AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities';

/**
 * 
 * @export
 * @interface EndAppAvailabilityPreOrderCreateRequestDataRelationships
 */
export interface EndAppAvailabilityPreOrderCreateRequestDataRelationships {
    /**
     * 
     * @type {AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities}
     * @memberof EndAppAvailabilityPreOrderCreateRequestDataRelationships
     */
    territoryAvailabilities: AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities;
}

/**
 * Check if a given object implements the EndAppAvailabilityPreOrderCreateRequestDataRelationships interface.
 */
export function instanceOfEndAppAvailabilityPreOrderCreateRequestDataRelationships(value: object): value is EndAppAvailabilityPreOrderCreateRequestDataRelationships {
    if (!('territoryAvailabilities' in value) || value['territoryAvailabilities'] === undefined) return false;
    return true;
}

export function EndAppAvailabilityPreOrderCreateRequestDataRelationshipsFromJSON(json: any): EndAppAvailabilityPreOrderCreateRequestDataRelationships {
    return EndAppAvailabilityPreOrderCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function EndAppAvailabilityPreOrderCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndAppAvailabilityPreOrderCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'territoryAvailabilities': AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesFromJSON(json['territoryAvailabilities']),
    };
}

export function EndAppAvailabilityPreOrderCreateRequestDataRelationshipsToJSON(json: any): EndAppAvailabilityPreOrderCreateRequestDataRelationships {
    return EndAppAvailabilityPreOrderCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function EndAppAvailabilityPreOrderCreateRequestDataRelationshipsToJSONTyped(value?: EndAppAvailabilityPreOrderCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'territoryAvailabilities': AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesToJSON(value['territoryAvailabilities']),
    };
}

