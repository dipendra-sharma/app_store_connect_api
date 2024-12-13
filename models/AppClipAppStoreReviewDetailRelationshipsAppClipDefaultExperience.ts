
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
import type { AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData } from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';
import {
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSONTyped,
} from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience
 */
export interface AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience {
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData}
     * @memberof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience
     */
    data?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData;
}

/**
 * Check if a given object implements the AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience interface.
 */
export function instanceOfAppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience(value: object): value is AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience {
    return true;
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON(json: any): AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience {
    return AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON(json['data']),
    };
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON(json: any): AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience {
    return AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSONTyped(value?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON(value['data']),
    };
}
