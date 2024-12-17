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
import type { AppInfoLocalizationRelationshipsAppInfo } from './AppInfoLocalizationRelationshipsAppInfo';
import {
    AppInfoLocalizationRelationshipsAppInfoFromJSON,
    AppInfoLocalizationRelationshipsAppInfoFromJSONTyped,
    AppInfoLocalizationRelationshipsAppInfoToJSON,
    AppInfoLocalizationRelationshipsAppInfoToJSONTyped,
} from './AppInfoLocalizationRelationshipsAppInfo';

/**
 * 
 * @export
 * @interface AppInfoLocalizationRelationships
 */
export interface AppInfoLocalizationRelationships {
    /**
     * 
     * @type {AppInfoLocalizationRelationshipsAppInfo}
     * @memberof AppInfoLocalizationRelationships
     */
    appInfo?: AppInfoLocalizationRelationshipsAppInfo;
}

/**
 * Check if a given object implements the AppInfoLocalizationRelationships interface.
 */
export function instanceOfAppInfoLocalizationRelationships(value: object): value is AppInfoLocalizationRelationships {
    return true;
}

export function AppInfoLocalizationRelationshipsFromJSON(json: any): AppInfoLocalizationRelationships {
    return AppInfoLocalizationRelationshipsFromJSONTyped(json, false);
}

export function AppInfoLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appInfo': json['appInfo'] == null ? undefined : AppInfoLocalizationRelationshipsAppInfoFromJSON(json['appInfo']),
    };
}

export function AppInfoLocalizationRelationshipsToJSON(json: any): AppInfoLocalizationRelationships {
    return AppInfoLocalizationRelationshipsToJSONTyped(json, false);
}

export function AppInfoLocalizationRelationshipsToJSONTyped(value?: AppInfoLocalizationRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appInfo': AppInfoLocalizationRelationshipsAppInfoToJSON(value['appInfo']),
    };
}

