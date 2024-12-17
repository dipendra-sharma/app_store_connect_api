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
import type { AnalyticsReportRequestCreateRequestDataRelationshipsApp } from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSONTyped,
} from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';
import type { AppStoreVersionCreateRequestDataRelationshipsBuild } from './AppStoreVersionCreateRequestDataRelationshipsBuild';
import {
    AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON,
    AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped,
    AppStoreVersionCreateRequestDataRelationshipsBuildToJSON,
    AppStoreVersionCreateRequestDataRelationshipsBuildToJSONTyped,
} from './AppStoreVersionCreateRequestDataRelationshipsBuild';
import type { AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations } from './AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations';
import {
    AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsFromJSON,
    AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsFromJSONTyped,
    AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsToJSON,
    AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsToJSONTyped,
} from './AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations';

/**
 * 
 * @export
 * @interface AppStoreVersionCreateRequestDataRelationships
 */
export interface AppStoreVersionCreateRequestDataRelationships {
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof AppStoreVersionCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations}
     * @memberof AppStoreVersionCreateRequestDataRelationships
     */
    appStoreVersionLocalizations?: AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations;
    /**
     * 
     * @type {AppStoreVersionCreateRequestDataRelationshipsBuild}
     * @memberof AppStoreVersionCreateRequestDataRelationships
     */
    build?: AppStoreVersionCreateRequestDataRelationshipsBuild;
}

/**
 * Check if a given object implements the AppStoreVersionCreateRequestDataRelationships interface.
 */
export function instanceOfAppStoreVersionCreateRequestDataRelationships(value: object): value is AppStoreVersionCreateRequestDataRelationships {
    if (!('app' in value) || value['app'] === undefined) return false;
    return true;
}

export function AppStoreVersionCreateRequestDataRelationshipsFromJSON(json: any): AppStoreVersionCreateRequestDataRelationships {
    return AppStoreVersionCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'appStoreVersionLocalizations': json['appStoreVersionLocalizations'] == null ? undefined : AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsFromJSON(json['appStoreVersionLocalizations']),
        'build': json['build'] == null ? undefined : AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON(json['build']),
    };
}

export function AppStoreVersionCreateRequestDataRelationshipsToJSON(json: any): AppStoreVersionCreateRequestDataRelationships {
    return AppStoreVersionCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppStoreVersionCreateRequestDataRelationshipsToJSONTyped(value?: AppStoreVersionCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value['app']),
        'appStoreVersionLocalizations': AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsToJSON(value['appStoreVersionLocalizations']),
        'build': AppStoreVersionCreateRequestDataRelationshipsBuildToJSON(value['build']),
    };
}

