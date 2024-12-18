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
import type { AppPricePointV3RelationshipsTerritoryData } from './AppPricePointV3RelationshipsTerritoryData';
import {
    AppPricePointV3RelationshipsTerritoryDataFromJSON,
    AppPricePointV3RelationshipsTerritoryDataFromJSONTyped,
    AppPricePointV3RelationshipsTerritoryDataToJSON,
    AppPricePointV3RelationshipsTerritoryDataToJSONTyped,
} from './AppPricePointV3RelationshipsTerritoryData';

/**
 * 
 * @export
 * @interface AppPricePointV3RelationshipsTerritory
 */
export interface AppPricePointV3RelationshipsTerritory {
    /**
     * 
     * @type {AppPricePointV3RelationshipsTerritoryData}
     * @memberof AppPricePointV3RelationshipsTerritory
     */
    data?: AppPricePointV3RelationshipsTerritoryData;
}

/**
 * Check if a given object implements the AppPricePointV3RelationshipsTerritory interface.
 */
export function instanceOfAppPricePointV3RelationshipsTerritory(value: object): value is AppPricePointV3RelationshipsTerritory {
    return true;
}

export function AppPricePointV3RelationshipsTerritoryFromJSON(json: any): AppPricePointV3RelationshipsTerritory {
    return AppPricePointV3RelationshipsTerritoryFromJSONTyped(json, false);
}

export function AppPricePointV3RelationshipsTerritoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV3RelationshipsTerritory {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppPricePointV3RelationshipsTerritoryDataFromJSON(json['data']),
    };
}

export function AppPricePointV3RelationshipsTerritoryToJSON(json: any): AppPricePointV3RelationshipsTerritory {
    return AppPricePointV3RelationshipsTerritoryToJSONTyped(json, false);
}

export function AppPricePointV3RelationshipsTerritoryToJSONTyped(value?: AppPricePointV3RelationshipsTerritory | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppPricePointV3RelationshipsTerritoryDataToJSON(value['data']),
    };
}

