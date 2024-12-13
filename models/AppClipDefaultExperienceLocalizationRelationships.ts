
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
import type { AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience } from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience';
import {
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSONTyped,
} from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience';
import type { AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage } from './AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage';
import {
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSON,
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped,
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageToJSON,
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageToJSONTyped,
} from './AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationRelationships
 */
export interface AppClipDefaultExperienceLocalizationRelationships {
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience}
     * @memberof AppClipDefaultExperienceLocalizationRelationships
     */
    appClipDefaultExperience?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage}
     * @memberof AppClipDefaultExperienceLocalizationRelationships
     */
    appClipHeaderImage?: AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationRelationships interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationRelationships(value: object): value is AppClipDefaultExperienceLocalizationRelationships {
    return true;
}

export function AppClipDefaultExperienceLocalizationRelationshipsFromJSON(json: any): AppClipDefaultExperienceLocalizationRelationships {
    return AppClipDefaultExperienceLocalizationRelationshipsFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appClipDefaultExperience': json['appClipDefaultExperience'] == null ? undefined : AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON(json['appClipDefaultExperience']),
        'appClipHeaderImage': json['appClipHeaderImage'] == null ? undefined : AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSON(json['appClipHeaderImage']),
    };
}

export function AppClipDefaultExperienceLocalizationRelationshipsToJSON(json: any): AppClipDefaultExperienceLocalizationRelationships {
    return AppClipDefaultExperienceLocalizationRelationshipsToJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationRelationshipsToJSONTyped(value?: AppClipDefaultExperienceLocalizationRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appClipDefaultExperience': AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON(value['appClipDefaultExperience']),
        'appClipHeaderImage': AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageToJSON(value['appClipHeaderImage']),
    };
}
