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
import type { AppCustomProductPageVersionRelationshipsAppCustomProductPage } from './AppCustomProductPageVersionRelationshipsAppCustomProductPage';
import {
    AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSONTyped,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSONTyped,
} from './AppCustomProductPageVersionRelationshipsAppCustomProductPage';
import type { AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations } from './AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations';
import {
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsFromJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsFromJSONTyped,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsToJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsToJSONTyped,
} from './AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations';

/**
 * 
 * @export
 * @interface AppCustomProductPageVersionRelationships
 */
export interface AppCustomProductPageVersionRelationships {
    /**
     * 
     * @type {AppCustomProductPageVersionRelationshipsAppCustomProductPage}
     * @memberof AppCustomProductPageVersionRelationships
     */
    appCustomProductPage?: AppCustomProductPageVersionRelationshipsAppCustomProductPage;
    /**
     * 
     * @type {AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations}
     * @memberof AppCustomProductPageVersionRelationships
     */
    appCustomProductPageLocalizations?: AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionRelationships interface.
 */
export function instanceOfAppCustomProductPageVersionRelationships(value: object): value is AppCustomProductPageVersionRelationships {
    return true;
}

export function AppCustomProductPageVersionRelationshipsFromJSON(json: any): AppCustomProductPageVersionRelationships {
    return AppCustomProductPageVersionRelationshipsFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appCustomProductPage': json['appCustomProductPage'] == null ? undefined : AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSON(json['appCustomProductPage']),
        'appCustomProductPageLocalizations': json['appCustomProductPageLocalizations'] == null ? undefined : AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsFromJSON(json['appCustomProductPageLocalizations']),
    };
}

export function AppCustomProductPageVersionRelationshipsToJSON(json: any): AppCustomProductPageVersionRelationships {
    return AppCustomProductPageVersionRelationshipsToJSONTyped(json, false);
}

export function AppCustomProductPageVersionRelationshipsToJSONTyped(value?: AppCustomProductPageVersionRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appCustomProductPage': AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSON(value['appCustomProductPage']),
        'appCustomProductPageLocalizations': AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsToJSON(value['appCustomProductPageLocalizations']),
    };
}

