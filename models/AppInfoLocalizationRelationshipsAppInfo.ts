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
import type { AppInfoLocalizationRelationshipsAppInfoData } from './AppInfoLocalizationRelationshipsAppInfoData';
import {
    AppInfoLocalizationRelationshipsAppInfoDataFromJSON,
    AppInfoLocalizationRelationshipsAppInfoDataFromJSONTyped,
    AppInfoLocalizationRelationshipsAppInfoDataToJSON,
    AppInfoLocalizationRelationshipsAppInfoDataToJSONTyped,
} from './AppInfoLocalizationRelationshipsAppInfoData';

/**
 * 
 * @export
 * @interface AppInfoLocalizationRelationshipsAppInfo
 */
export interface AppInfoLocalizationRelationshipsAppInfo {
    /**
     * 
     * @type {AppInfoLocalizationRelationshipsAppInfoData}
     * @memberof AppInfoLocalizationRelationshipsAppInfo
     */
    data?: AppInfoLocalizationRelationshipsAppInfoData;
}

/**
 * Check if a given object implements the AppInfoLocalizationRelationshipsAppInfo interface.
 */
export function instanceOfAppInfoLocalizationRelationshipsAppInfo(value: object): value is AppInfoLocalizationRelationshipsAppInfo {
    return true;
}

export function AppInfoLocalizationRelationshipsAppInfoFromJSON(json: any): AppInfoLocalizationRelationshipsAppInfo {
    return AppInfoLocalizationRelationshipsAppInfoFromJSONTyped(json, false);
}

export function AppInfoLocalizationRelationshipsAppInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationRelationshipsAppInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppInfoLocalizationRelationshipsAppInfoDataFromJSON(json['data']),
    };
}

export function AppInfoLocalizationRelationshipsAppInfoToJSON(json: any): AppInfoLocalizationRelationshipsAppInfo {
    return AppInfoLocalizationRelationshipsAppInfoToJSONTyped(json, false);
}

export function AppInfoLocalizationRelationshipsAppInfoToJSONTyped(value?: AppInfoLocalizationRelationshipsAppInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppInfoLocalizationRelationshipsAppInfoDataToJSON(value['data']),
    };
}

