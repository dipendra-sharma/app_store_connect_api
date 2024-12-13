
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
/**
 * 
 * @export
 * @interface AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner
 */
export interface AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner
     */
    type: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum = {
    TerritoryAvailabilities: 'territoryAvailabilities'
} as const;
export type AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum = typeof AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum[keyof typeof AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum];


/**
 * Check if a given object implements the AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner interface.
 */
export function instanceOfAppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner(value: object): value is AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerFromJSON(json: any): AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner {
    return AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerFromJSONTyped(json, false);
}

export function AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerToJSON(json: any): AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner {
    return AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerToJSONTyped(json, false);
}

export function AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerToJSONTyped(value?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
