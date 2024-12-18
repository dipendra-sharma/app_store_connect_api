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
import type { AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations } from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations';
import {
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizationsFromJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizationsFromJSONTyped,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizationsToJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizationsToJSONTyped,
} from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations';
import type { AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment } from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment';
import {
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSONTyped,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSONTyped,
} from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentRelationships
 */
export interface AppStoreVersionExperimentTreatmentRelationships {
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment}
     * @memberof AppStoreVersionExperimentTreatmentRelationships
     */
    appStoreVersionExperiment?: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment}
     * @memberof AppStoreVersionExperimentTreatmentRelationships
     */
    appStoreVersionExperimentV2?: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations}
     * @memberof AppStoreVersionExperimentTreatmentRelationships
     */
    appStoreVersionExperimentTreatmentLocalizations?: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentRelationships interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentRelationships(value: object): value is AppStoreVersionExperimentTreatmentRelationships {
    return true;
}

export function AppStoreVersionExperimentTreatmentRelationshipsFromJSON(json: any): AppStoreVersionExperimentTreatmentRelationships {
    return AppStoreVersionExperimentTreatmentRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appStoreVersionExperiment': json['appStoreVersionExperiment'] == null ? undefined : AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON(json['appStoreVersionExperiment']),
        'appStoreVersionExperimentV2': json['appStoreVersionExperimentV2'] == null ? undefined : AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON(json['appStoreVersionExperimentV2']),
        'appStoreVersionExperimentTreatmentLocalizations': json['appStoreVersionExperimentTreatmentLocalizations'] == null ? undefined : AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizationsFromJSON(json['appStoreVersionExperimentTreatmentLocalizations']),
    };
}

export function AppStoreVersionExperimentTreatmentRelationshipsToJSON(json: any): AppStoreVersionExperimentTreatmentRelationships {
    return AppStoreVersionExperimentTreatmentRelationshipsToJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentRelationshipsToJSONTyped(value?: AppStoreVersionExperimentTreatmentRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appStoreVersionExperiment': AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON(value['appStoreVersionExperiment']),
        'appStoreVersionExperimentV2': AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON(value['appStoreVersionExperimentV2']),
        'appStoreVersionExperimentTreatmentLocalizations': AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizationsToJSON(value['appStoreVersionExperimentTreatmentLocalizations']),
    };
}

