
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
import type { AppPriceScheduleCreateRequestDataRelationshipsManualPrices } from './AppPriceScheduleCreateRequestDataRelationshipsManualPrices';
import {
    AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON,
    AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped,
    AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSON,
    AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSONTyped,
} from './AppPriceScheduleCreateRequestDataRelationshipsManualPrices';
import type { AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory } from './AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory';
import {
    AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON,
    AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped,
    AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON,
    AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSONTyped,
} from './AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory';
import type { AnalyticsReportRequestCreateRequestDataRelationshipsApp } from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSONTyped,
} from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface AppPriceScheduleCreateRequestDataRelationships
 */
export interface AppPriceScheduleCreateRequestDataRelationships {
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof AppPriceScheduleCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory}
     * @memberof AppPriceScheduleCreateRequestDataRelationships
     */
    baseTerritory: AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory;
    /**
     * 
     * @type {AppPriceScheduleCreateRequestDataRelationshipsManualPrices}
     * @memberof AppPriceScheduleCreateRequestDataRelationships
     */
    manualPrices: AppPriceScheduleCreateRequestDataRelationshipsManualPrices;
}

/**
 * Check if a given object implements the AppPriceScheduleCreateRequestDataRelationships interface.
 */
export function instanceOfAppPriceScheduleCreateRequestDataRelationships(value: object): value is AppPriceScheduleCreateRequestDataRelationships {
    if (!('app' in value) || value['app'] === undefined) return false;
    if (!('baseTerritory' in value) || value['baseTerritory'] === undefined) return false;
    if (!('manualPrices' in value) || value['manualPrices'] === undefined) return false;
    return true;
}

export function AppPriceScheduleCreateRequestDataRelationshipsFromJSON(json: any): AppPriceScheduleCreateRequestDataRelationships {
    return AppPriceScheduleCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppPriceScheduleCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'baseTerritory': AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON(json['baseTerritory']),
        'manualPrices': AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON(json['manualPrices']),
    };
}

export function AppPriceScheduleCreateRequestDataRelationshipsToJSON(json: any): AppPriceScheduleCreateRequestDataRelationships {
    return AppPriceScheduleCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppPriceScheduleCreateRequestDataRelationshipsToJSONTyped(value?: AppPriceScheduleCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value['app']),
        'baseTerritory': AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON(value['baseTerritory']),
        'manualPrices': AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSON(value['manualPrices']),
    };
}

