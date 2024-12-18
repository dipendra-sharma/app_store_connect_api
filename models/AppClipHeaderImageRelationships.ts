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
import type { AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization } from './AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization';
import {
    AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationFromJSON,
    AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationFromJSONTyped,
    AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationToJSON,
    AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationToJSONTyped,
} from './AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization';

/**
 * 
 * @export
 * @interface AppClipHeaderImageRelationships
 */
export interface AppClipHeaderImageRelationships {
    /**
     * 
     * @type {AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization}
     * @memberof AppClipHeaderImageRelationships
     */
    appClipDefaultExperienceLocalization?: AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization;
}

/**
 * Check if a given object implements the AppClipHeaderImageRelationships interface.
 */
export function instanceOfAppClipHeaderImageRelationships(value: object): value is AppClipHeaderImageRelationships {
    return true;
}

export function AppClipHeaderImageRelationshipsFromJSON(json: any): AppClipHeaderImageRelationships {
    return AppClipHeaderImageRelationshipsFromJSONTyped(json, false);
}

export function AppClipHeaderImageRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipHeaderImageRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appClipDefaultExperienceLocalization': json['appClipDefaultExperienceLocalization'] == null ? undefined : AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationFromJSON(json['appClipDefaultExperienceLocalization']),
    };
}

export function AppClipHeaderImageRelationshipsToJSON(json: any): AppClipHeaderImageRelationships {
    return AppClipHeaderImageRelationshipsToJSONTyped(json, false);
}

export function AppClipHeaderImageRelationshipsToJSONTyped(value?: AppClipHeaderImageRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appClipDefaultExperienceLocalization': AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationToJSON(value['appClipDefaultExperienceLocalization']),
    };
}

