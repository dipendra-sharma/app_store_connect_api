
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
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSets } from './AppCustomProductPageLocalizationRelationshipsAppPreviewSets';
import {
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSONTyped,
} from './AppCustomProductPageLocalizationRelationshipsAppPreviewSets';
import type { AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment } from './AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment';
import {
    AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentToJSON,
    AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentToJSONTyped,
} from './AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment';
import type { AppCustomProductPageLocalizationRelationshipsAppScreenshotSets } from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSets';
import {
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSONTyped,
} from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSets';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentLocalizationRelationships
 */
export interface AppStoreVersionExperimentTreatmentLocalizationRelationships {
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationRelationships
     */
    appStoreVersionExperimentTreatment?: AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment;
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppScreenshotSets}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationRelationships
     */
    appScreenshotSets?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSets;
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppPreviewSets}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationRelationships
     */
    appPreviewSets?: AppCustomProductPageLocalizationRelationshipsAppPreviewSets;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalizationRelationships interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentLocalizationRelationships(value: object): value is AppStoreVersionExperimentTreatmentLocalizationRelationships {
    return true;
}

export function AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationRelationships {
    return AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentLocalizationRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appStoreVersionExperimentTreatment': json['appStoreVersionExperimentTreatment'] == null ? undefined : AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentFromJSON(json['appStoreVersionExperimentTreatment']),
        'appScreenshotSets': json['appScreenshotSets'] == null ? undefined : AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON(json['appScreenshotSets']),
        'appPreviewSets': json['appPreviewSets'] == null ? undefined : AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON(json['appPreviewSets']),
    };
}

export function AppStoreVersionExperimentTreatmentLocalizationRelationshipsToJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationRelationships {
    return AppStoreVersionExperimentTreatmentLocalizationRelationshipsToJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationRelationshipsToJSONTyped(value?: AppStoreVersionExperimentTreatmentLocalizationRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appStoreVersionExperimentTreatment': AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentToJSON(value['appStoreVersionExperimentTreatment']),
        'appScreenshotSets': AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON(value['appScreenshotSets']),
        'appPreviewSets': AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON(value['appPreviewSets']),
    };
}

