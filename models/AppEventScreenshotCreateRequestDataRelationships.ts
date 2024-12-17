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
import type { AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization } from './AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization';
import {
    AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSON,
    AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSONTyped,
    AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationToJSON,
    AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationToJSONTyped,
} from './AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization';

/**
 * 
 * @export
 * @interface AppEventScreenshotCreateRequestDataRelationships
 */
export interface AppEventScreenshotCreateRequestDataRelationships {
    /**
     * 
     * @type {AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization}
     * @memberof AppEventScreenshotCreateRequestDataRelationships
     */
    appEventLocalization: AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization;
}

/**
 * Check if a given object implements the AppEventScreenshotCreateRequestDataRelationships interface.
 */
export function instanceOfAppEventScreenshotCreateRequestDataRelationships(value: object): value is AppEventScreenshotCreateRequestDataRelationships {
    if (!('appEventLocalization' in value) || value['appEventLocalization'] === undefined) return false;
    return true;
}

export function AppEventScreenshotCreateRequestDataRelationshipsFromJSON(json: any): AppEventScreenshotCreateRequestDataRelationships {
    return AppEventScreenshotCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppEventScreenshotCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appEventLocalization': AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSON(json['appEventLocalization']),
    };
}

export function AppEventScreenshotCreateRequestDataRelationshipsToJSON(json: any): AppEventScreenshotCreateRequestDataRelationships {
    return AppEventScreenshotCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppEventScreenshotCreateRequestDataRelationshipsToJSONTyped(value?: AppEventScreenshotCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appEventLocalization': AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationToJSON(value['appEventLocalization']),
    };
}

