
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
 * @interface AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations
 */
export interface AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations {
    /**
     * 
     * @type {Array<AppPreviewSetRelationshipsAppStoreVersionLocalizationData>}
     * @memberof AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations
     */
    data?: Array<AppPreviewSetRelationshipsAppStoreVersionLocalizationData>;
}

/**
 * Check if a given object implements the AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations interface.
 */
export function instanceOfAppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations(value: object): value is AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations {
    return true;
}

export function AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsFromJSON(json: any): AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations {
    return AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsFromJSONTyped(json, false);
}

export function AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON)),
    };
}

export function AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsToJSON(json: any): AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations {
    return AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsToJSONTyped(json, false);
}

export function AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizationsToJSONTyped(value?: AppStoreVersionCreateRequestDataRelationshipsAppStoreVersionLocalizations | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON)),
    };
}
