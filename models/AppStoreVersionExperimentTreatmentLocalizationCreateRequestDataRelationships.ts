
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
import type { AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment } from './AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment';
import {
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentToJSON,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentToJSONTyped,
} from './AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships
 */
export interface AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships
     */
    appStoreVersionExperimentTreatment: AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships(value: object): value is AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships {
    if (!('appStoreVersionExperimentTreatment' in value) || value['appStoreVersionExperimentTreatment'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsFromJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships {
    return AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appStoreVersionExperimentTreatment': AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentFromJSON(json['appStoreVersionExperimentTreatment']),
    };
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsToJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships {
    return AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsToJSONTyped(value?: AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appStoreVersionExperimentTreatment': AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentToJSON(value['appStoreVersionExperimentTreatment']),
    };
}
