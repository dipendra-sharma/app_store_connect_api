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
import type { TerritoryAvailabilityUpdateRequestDataAttributes } from './TerritoryAvailabilityUpdateRequestDataAttributes';
import {
    TerritoryAvailabilityUpdateRequestDataAttributesFromJSON,
    TerritoryAvailabilityUpdateRequestDataAttributesFromJSONTyped,
    TerritoryAvailabilityUpdateRequestDataAttributesToJSON,
    TerritoryAvailabilityUpdateRequestDataAttributesToJSONTyped,
} from './TerritoryAvailabilityUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface TerritoryAvailabilityUpdateRequestData
 */
export interface TerritoryAvailabilityUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof TerritoryAvailabilityUpdateRequestData
     */
    type: TerritoryAvailabilityUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TerritoryAvailabilityUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {TerritoryAvailabilityUpdateRequestDataAttributes}
     * @memberof TerritoryAvailabilityUpdateRequestData
     */
    attributes?: TerritoryAvailabilityUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const TerritoryAvailabilityUpdateRequestDataTypeEnum = {
    TerritoryAvailabilities: 'territoryAvailabilities'
} as const;
export type TerritoryAvailabilityUpdateRequestDataTypeEnum = typeof TerritoryAvailabilityUpdateRequestDataTypeEnum[keyof typeof TerritoryAvailabilityUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the TerritoryAvailabilityUpdateRequestData interface.
 */
export function instanceOfTerritoryAvailabilityUpdateRequestData(value: object): value is TerritoryAvailabilityUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function TerritoryAvailabilityUpdateRequestDataFromJSON(json: any): TerritoryAvailabilityUpdateRequestData {
    return TerritoryAvailabilityUpdateRequestDataFromJSONTyped(json, false);
}

export function TerritoryAvailabilityUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryAvailabilityUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : TerritoryAvailabilityUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function TerritoryAvailabilityUpdateRequestDataToJSON(json: any): TerritoryAvailabilityUpdateRequestData {
    return TerritoryAvailabilityUpdateRequestDataToJSONTyped(json, false);
}

export function TerritoryAvailabilityUpdateRequestDataToJSONTyped(value?: TerritoryAvailabilityUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': TerritoryAvailabilityUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

