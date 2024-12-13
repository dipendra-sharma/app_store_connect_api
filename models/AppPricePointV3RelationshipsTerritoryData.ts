
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
 * @interface AppPricePointV3RelationshipsTerritoryData
 */
export interface AppPricePointV3RelationshipsTerritoryData {
    /**
     * 
     * @type {string}
     * @memberof AppPricePointV3RelationshipsTerritoryData
     */
    type: AppPricePointV3RelationshipsTerritoryDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPricePointV3RelationshipsTerritoryData
     */
    id: string;
}


/**
 * @export
 */
export const AppPricePointV3RelationshipsTerritoryDataTypeEnum = {
    Territories: 'territories'
} as const;
export type AppPricePointV3RelationshipsTerritoryDataTypeEnum = typeof AppPricePointV3RelationshipsTerritoryDataTypeEnum[keyof typeof AppPricePointV3RelationshipsTerritoryDataTypeEnum];


/**
 * Check if a given object implements the AppPricePointV3RelationshipsTerritoryData interface.
 */
export function instanceOfAppPricePointV3RelationshipsTerritoryData(value: object): value is AppPricePointV3RelationshipsTerritoryData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppPricePointV3RelationshipsTerritoryDataFromJSON(json: any): AppPricePointV3RelationshipsTerritoryData {
    return AppPricePointV3RelationshipsTerritoryDataFromJSONTyped(json, false);
}

export function AppPricePointV3RelationshipsTerritoryDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV3RelationshipsTerritoryData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppPricePointV3RelationshipsTerritoryDataToJSON(json: any): AppPricePointV3RelationshipsTerritoryData {
    return AppPricePointV3RelationshipsTerritoryDataToJSONTyped(json, false);
}

export function AppPricePointV3RelationshipsTerritoryDataToJSONTyped(value?: AppPricePointV3RelationshipsTerritoryData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

