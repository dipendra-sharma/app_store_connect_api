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

import type { App } from './App';
import {
    instanceOfApp,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { Territory } from './Territory';
import {
    instanceOfTerritory,
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * @type AppPricePointsV3ResponseIncludedInner
 * 
 * @export
 */
export type AppPricePointsV3ResponseIncludedInner = App | Territory;

export function AppPricePointsV3ResponseIncludedInnerFromJSON(json: any): AppPricePointsV3ResponseIncludedInner {
    return AppPricePointsV3ResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppPricePointsV3ResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointsV3ResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfApp(json)) {
        return AppFromJSONTyped(json, true);
    }
    if (instanceOfTerritory(json)) {
        return TerritoryFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AppPricePointsV3ResponseIncludedInnerToJSON(json: any): any {
    return AppPricePointsV3ResponseIncludedInnerToJSONTyped(json, false);
}

export function AppPricePointsV3ResponseIncludedInnerToJSONTyped(value?: AppPricePointsV3ResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfTerritory(value)) {
        return TerritoryToJSON(value as Territory);
    }

    return {};
}

