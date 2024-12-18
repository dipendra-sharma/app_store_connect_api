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
import type { AppInfoLocalizationCreateRequestDataRelationshipsAppInfo } from './AppInfoLocalizationCreateRequestDataRelationshipsAppInfo';
import {
    AppInfoLocalizationCreateRequestDataRelationshipsAppInfoFromJSON,
    AppInfoLocalizationCreateRequestDataRelationshipsAppInfoFromJSONTyped,
    AppInfoLocalizationCreateRequestDataRelationshipsAppInfoToJSON,
    AppInfoLocalizationCreateRequestDataRelationshipsAppInfoToJSONTyped,
} from './AppInfoLocalizationCreateRequestDataRelationshipsAppInfo';

/**
 * 
 * @export
 * @interface AppInfoLocalizationCreateRequestDataRelationships
 */
export interface AppInfoLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {AppInfoLocalizationCreateRequestDataRelationshipsAppInfo}
     * @memberof AppInfoLocalizationCreateRequestDataRelationships
     */
    appInfo: AppInfoLocalizationCreateRequestDataRelationshipsAppInfo;
}

/**
 * Check if a given object implements the AppInfoLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfAppInfoLocalizationCreateRequestDataRelationships(value: object): value is AppInfoLocalizationCreateRequestDataRelationships {
    if (!('appInfo' in value) || value['appInfo'] === undefined) return false;
    return true;
}

export function AppInfoLocalizationCreateRequestDataRelationshipsFromJSON(json: any): AppInfoLocalizationCreateRequestDataRelationships {
    return AppInfoLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppInfoLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appInfo': AppInfoLocalizationCreateRequestDataRelationshipsAppInfoFromJSON(json['appInfo']),
    };
}

export function AppInfoLocalizationCreateRequestDataRelationshipsToJSON(json: any): AppInfoLocalizationCreateRequestDataRelationships {
    return AppInfoLocalizationCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppInfoLocalizationCreateRequestDataRelationshipsToJSONTyped(value?: AppInfoLocalizationCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appInfo': AppInfoLocalizationCreateRequestDataRelationshipsAppInfoToJSON(value['appInfo']),
    };
}

