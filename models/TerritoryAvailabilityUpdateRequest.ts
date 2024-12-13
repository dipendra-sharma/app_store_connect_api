
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
import type { TerritoryAvailabilityUpdateRequestData } from './TerritoryAvailabilityUpdateRequestData';
import {
    TerritoryAvailabilityUpdateRequestDataFromJSON,
    TerritoryAvailabilityUpdateRequestDataFromJSONTyped,
    TerritoryAvailabilityUpdateRequestDataToJSON,
    TerritoryAvailabilityUpdateRequestDataToJSONTyped,
} from './TerritoryAvailabilityUpdateRequestData';

/**
 * 
 * @export
 * @interface TerritoryAvailabilityUpdateRequest
 */
export interface TerritoryAvailabilityUpdateRequest {
    /**
     * 
     * @type {TerritoryAvailabilityUpdateRequestData}
     * @memberof TerritoryAvailabilityUpdateRequest
     */
    data: TerritoryAvailabilityUpdateRequestData;
}

/**
 * Check if a given object implements the TerritoryAvailabilityUpdateRequest interface.
 */
export function instanceOfTerritoryAvailabilityUpdateRequest(value: object): value is TerritoryAvailabilityUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function TerritoryAvailabilityUpdateRequestFromJSON(json: any): TerritoryAvailabilityUpdateRequest {
    return TerritoryAvailabilityUpdateRequestFromJSONTyped(json, false);
}

export function TerritoryAvailabilityUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryAvailabilityUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': TerritoryAvailabilityUpdateRequestDataFromJSON(json['data']),
    };
}

export function TerritoryAvailabilityUpdateRequestToJSON(json: any): TerritoryAvailabilityUpdateRequest {
    return TerritoryAvailabilityUpdateRequestToJSONTyped(json, false);
}

export function TerritoryAvailabilityUpdateRequestToJSONTyped(value?: TerritoryAvailabilityUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': TerritoryAvailabilityUpdateRequestDataToJSON(value['data']),
    };
}

