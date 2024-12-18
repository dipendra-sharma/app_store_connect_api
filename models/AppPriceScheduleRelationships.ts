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
import type { AppPriceScheduleRelationshipsManualPrices } from './AppPriceScheduleRelationshipsManualPrices';
import {
    AppPriceScheduleRelationshipsManualPricesFromJSON,
    AppPriceScheduleRelationshipsManualPricesFromJSONTyped,
    AppPriceScheduleRelationshipsManualPricesToJSON,
    AppPriceScheduleRelationshipsManualPricesToJSONTyped,
} from './AppPriceScheduleRelationshipsManualPrices';
import type { AppPriceScheduleRelationshipsBaseTerritory } from './AppPriceScheduleRelationshipsBaseTerritory';
import {
    AppPriceScheduleRelationshipsBaseTerritoryFromJSON,
    AppPriceScheduleRelationshipsBaseTerritoryFromJSONTyped,
    AppPriceScheduleRelationshipsBaseTerritoryToJSON,
    AppPriceScheduleRelationshipsBaseTerritoryToJSONTyped,
} from './AppPriceScheduleRelationshipsBaseTerritory';
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface AppPriceScheduleRelationships
 */
export interface AppPriceScheduleRelationships {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof AppPriceScheduleRelationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppPriceScheduleRelationshipsBaseTerritory}
     * @memberof AppPriceScheduleRelationships
     */
    baseTerritory?: AppPriceScheduleRelationshipsBaseTerritory;
    /**
     * 
     * @type {AppPriceScheduleRelationshipsManualPrices}
     * @memberof AppPriceScheduleRelationships
     */
    manualPrices?: AppPriceScheduleRelationshipsManualPrices;
    /**
     * 
     * @type {AppPriceScheduleRelationshipsManualPrices}
     * @memberof AppPriceScheduleRelationships
     */
    automaticPrices?: AppPriceScheduleRelationshipsManualPrices;
}

/**
 * Check if a given object implements the AppPriceScheduleRelationships interface.
 */
export function instanceOfAppPriceScheduleRelationships(value: object): value is AppPriceScheduleRelationships {
    return true;
}

export function AppPriceScheduleRelationshipsFromJSON(json: any): AppPriceScheduleRelationships {
    return AppPriceScheduleRelationshipsFromJSONTyped(json, false);
}

export function AppPriceScheduleRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': json['app'] == null ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'baseTerritory': json['baseTerritory'] == null ? undefined : AppPriceScheduleRelationshipsBaseTerritoryFromJSON(json['baseTerritory']),
        'manualPrices': json['manualPrices'] == null ? undefined : AppPriceScheduleRelationshipsManualPricesFromJSON(json['manualPrices']),
        'automaticPrices': json['automaticPrices'] == null ? undefined : AppPriceScheduleRelationshipsManualPricesFromJSON(json['automaticPrices']),
    };
}

export function AppPriceScheduleRelationshipsToJSON(json: any): AppPriceScheduleRelationships {
    return AppPriceScheduleRelationshipsToJSONTyped(json, false);
}

export function AppPriceScheduleRelationshipsToJSONTyped(value?: AppPriceScheduleRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value['app']),
        'baseTerritory': AppPriceScheduleRelationshipsBaseTerritoryToJSON(value['baseTerritory']),
        'manualPrices': AppPriceScheduleRelationshipsManualPricesToJSON(value['manualPrices']),
        'automaticPrices': AppPriceScheduleRelationshipsManualPricesToJSON(value['automaticPrices']),
    };
}

