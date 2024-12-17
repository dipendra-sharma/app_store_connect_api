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
import type { AppClipAdvancedExperienceRelationshipsAppClipData } from './AppClipAdvancedExperienceRelationshipsAppClipData';
import {
    AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON,
    AppClipAdvancedExperienceRelationshipsAppClipDataFromJSONTyped,
    AppClipAdvancedExperienceRelationshipsAppClipDataToJSON,
    AppClipAdvancedExperienceRelationshipsAppClipDataToJSONTyped,
} from './AppClipAdvancedExperienceRelationshipsAppClipData';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceRelationshipsAppClip
 */
export interface AppClipAdvancedExperienceRelationshipsAppClip {
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsAppClipData}
     * @memberof AppClipAdvancedExperienceRelationshipsAppClip
     */
    data?: AppClipAdvancedExperienceRelationshipsAppClipData;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationshipsAppClip interface.
 */
export function instanceOfAppClipAdvancedExperienceRelationshipsAppClip(value: object): value is AppClipAdvancedExperienceRelationshipsAppClip {
    return true;
}

export function AppClipAdvancedExperienceRelationshipsAppClipFromJSON(json: any): AppClipAdvancedExperienceRelationshipsAppClip {
    return AppClipAdvancedExperienceRelationshipsAppClipFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsAppClipFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceRelationshipsAppClip {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON(json['data']),
    };
}

export function AppClipAdvancedExperienceRelationshipsAppClipToJSON(json: any): AppClipAdvancedExperienceRelationshipsAppClip {
    return AppClipAdvancedExperienceRelationshipsAppClipToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsAppClipToJSONTyped(value?: AppClipAdvancedExperienceRelationshipsAppClip | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipAdvancedExperienceRelationshipsAppClipDataToJSON(value['data']),
    };
}

