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
import type { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSONTyped,
} from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSets } from './AppCustomProductPageLocalizationRelationshipsAppPreviewSets';
import {
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSONTyped,
} from './AppCustomProductPageLocalizationRelationshipsAppPreviewSets';
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
 * @interface AppStoreVersionLocalizationRelationships
 */
export interface AppStoreVersionLocalizationRelationships {
    /**
     * 
     * @type {AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion}
     * @memberof AppStoreVersionLocalizationRelationships
     */
    appStoreVersion?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppScreenshotSets}
     * @memberof AppStoreVersionLocalizationRelationships
     */
    appScreenshotSets?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSets;
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppPreviewSets}
     * @memberof AppStoreVersionLocalizationRelationships
     */
    appPreviewSets?: AppCustomProductPageLocalizationRelationshipsAppPreviewSets;
}

/**
 * Check if a given object implements the AppStoreVersionLocalizationRelationships interface.
 */
export function instanceOfAppStoreVersionLocalizationRelationships(value: object): value is AppStoreVersionLocalizationRelationships {
    return true;
}

export function AppStoreVersionLocalizationRelationshipsFromJSON(json: any): AppStoreVersionLocalizationRelationships {
    return AppStoreVersionLocalizationRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appStoreVersion': json['appStoreVersion'] == null ? undefined : AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON(json['appStoreVersion']),
        'appScreenshotSets': json['appScreenshotSets'] == null ? undefined : AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON(json['appScreenshotSets']),
        'appPreviewSets': json['appPreviewSets'] == null ? undefined : AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON(json['appPreviewSets']),
    };
}

export function AppStoreVersionLocalizationRelationshipsToJSON(json: any): AppStoreVersionLocalizationRelationships {
    return AppStoreVersionLocalizationRelationshipsToJSONTyped(json, false);
}

export function AppStoreVersionLocalizationRelationshipsToJSONTyped(value?: AppStoreVersionLocalizationRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appStoreVersion': AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON(value['appStoreVersion']),
        'appScreenshotSets': AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON(value['appScreenshotSets']),
        'appPreviewSets': AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON(value['appPreviewSets']),
    };
}

