
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
import type { AppPreviewSetRelationshipsAppStoreVersionLocalizationData } from './AppPreviewSetRelationshipsAppStoreVersionLocalizationData';
import {
    AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON,
    AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped,
    AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON,
    AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSONTyped,
} from './AppPreviewSetRelationshipsAppStoreVersionLocalizationData';

/**
 * 
 * @export
 * @interface AppPreviewSetRelationshipsAppStoreVersionLocalization
 */
export interface AppPreviewSetRelationshipsAppStoreVersionLocalization {
    /**
     * 
     * @type {AppPreviewSetRelationshipsAppStoreVersionLocalizationData}
     * @memberof AppPreviewSetRelationshipsAppStoreVersionLocalization
     */
    data?: AppPreviewSetRelationshipsAppStoreVersionLocalizationData;
}

/**
 * Check if a given object implements the AppPreviewSetRelationshipsAppStoreVersionLocalization interface.
 */
export function instanceOfAppPreviewSetRelationshipsAppStoreVersionLocalization(value: object): value is AppPreviewSetRelationshipsAppStoreVersionLocalization {
    return true;
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSON(json: any): AppPreviewSetRelationshipsAppStoreVersionLocalization {
    return AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSONTyped(json, false);
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetRelationshipsAppStoreVersionLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON(json['data']),
    };
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationToJSON(json: any): AppPreviewSetRelationshipsAppStoreVersionLocalization {
    return AppPreviewSetRelationshipsAppStoreVersionLocalizationToJSONTyped(json, false);
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationToJSONTyped(value?: AppPreviewSetRelationshipsAppStoreVersionLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON(value['data']),
    };
}

