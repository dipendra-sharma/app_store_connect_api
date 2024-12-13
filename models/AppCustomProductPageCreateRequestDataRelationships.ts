
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
import type { AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions } from './AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions';
import {
    AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsFromJSON,
    AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsFromJSONTyped,
    AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsToJSON,
    AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsToJSONTyped,
} from './AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions';
import type { AppCustomProductPageVersionRelationshipsAppCustomProductPage } from './AppCustomProductPageVersionRelationshipsAppCustomProductPage';
import {
    AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSONTyped,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSONTyped,
} from './AppCustomProductPageVersionRelationshipsAppCustomProductPage';
import type { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSONTyped,
} from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import type { AnalyticsReportRequestCreateRequestDataRelationshipsApp } from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSONTyped,
} from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface AppCustomProductPageCreateRequestDataRelationships
 */
export interface AppCustomProductPageCreateRequestDataRelationships {
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof AppCustomProductPageCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions}
     * @memberof AppCustomProductPageCreateRequestDataRelationships
     */
    appCustomProductPageVersions?: AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions;
    /**
     * 
     * @type {AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion}
     * @memberof AppCustomProductPageCreateRequestDataRelationships
     */
    appStoreVersionTemplate?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {AppCustomProductPageVersionRelationshipsAppCustomProductPage}
     * @memberof AppCustomProductPageCreateRequestDataRelationships
     */
    customProductPageTemplate?: AppCustomProductPageVersionRelationshipsAppCustomProductPage;
}

/**
 * Check if a given object implements the AppCustomProductPageCreateRequestDataRelationships interface.
 */
export function instanceOfAppCustomProductPageCreateRequestDataRelationships(value: object): value is AppCustomProductPageCreateRequestDataRelationships {
    if (!('app' in value) || value['app'] === undefined) return false;
    return true;
}

export function AppCustomProductPageCreateRequestDataRelationshipsFromJSON(json: any): AppCustomProductPageCreateRequestDataRelationships {
    return AppCustomProductPageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'appCustomProductPageVersions': json['appCustomProductPageVersions'] == null ? undefined : AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsFromJSON(json['appCustomProductPageVersions']),
        'appStoreVersionTemplate': json['appStoreVersionTemplate'] == null ? undefined : AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON(json['appStoreVersionTemplate']),
        'customProductPageTemplate': json['customProductPageTemplate'] == null ? undefined : AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSON(json['customProductPageTemplate']),
    };
}

export function AppCustomProductPageCreateRequestDataRelationshipsToJSON(json: any): AppCustomProductPageCreateRequestDataRelationships {
    return AppCustomProductPageCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestDataRelationshipsToJSONTyped(value?: AppCustomProductPageCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value['app']),
        'appCustomProductPageVersions': AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsToJSON(value['appCustomProductPageVersions']),
        'appStoreVersionTemplate': AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON(value['appStoreVersionTemplate']),
        'customProductPageTemplate': AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSON(value['customProductPageTemplate']),
    };
}

