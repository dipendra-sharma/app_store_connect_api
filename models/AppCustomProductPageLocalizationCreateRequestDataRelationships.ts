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
import type { AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion } from './AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion';
import {
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSON,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionToJSON,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionToJSONTyped,
} from './AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationCreateRequestDataRelationships
 */
export interface AppCustomProductPageLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion}
     * @memberof AppCustomProductPageLocalizationCreateRequestDataRelationships
     */
    appCustomProductPageVersion: AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfAppCustomProductPageLocalizationCreateRequestDataRelationships(value: object): value is AppCustomProductPageLocalizationCreateRequestDataRelationships {
    if (!('appCustomProductPageVersion' in value) || value['appCustomProductPageVersion'] === undefined) return false;
    return true;
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSON(json: any): AppCustomProductPageLocalizationCreateRequestDataRelationships {
    return AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appCustomProductPageVersion': AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSON(json['appCustomProductPageVersion']),
    };
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsToJSON(json: any): AppCustomProductPageLocalizationCreateRequestDataRelationships {
    return AppCustomProductPageLocalizationCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsToJSONTyped(value?: AppCustomProductPageLocalizationCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appCustomProductPageVersion': AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionToJSON(value['appCustomProductPageVersion']),
    };
}

