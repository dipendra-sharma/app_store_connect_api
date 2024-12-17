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
import type { AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations } from './AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations';
import {
    AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSON,
    AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSONTyped,
    AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsToJSON,
    AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsToJSONTyped,
} from './AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations';
import type { AppClipAdvancedExperienceRelationshipsHeaderImage } from './AppClipAdvancedExperienceRelationshipsHeaderImage';
import {
    AppClipAdvancedExperienceRelationshipsHeaderImageFromJSON,
    AppClipAdvancedExperienceRelationshipsHeaderImageFromJSONTyped,
    AppClipAdvancedExperienceRelationshipsHeaderImageToJSON,
    AppClipAdvancedExperienceRelationshipsHeaderImageToJSONTyped,
} from './AppClipAdvancedExperienceRelationshipsHeaderImage';
import type { AppClipAdvancedExperienceRelationshipsAppClip } from './AppClipAdvancedExperienceRelationshipsAppClip';
import {
    AppClipAdvancedExperienceRelationshipsAppClipFromJSON,
    AppClipAdvancedExperienceRelationshipsAppClipFromJSONTyped,
    AppClipAdvancedExperienceRelationshipsAppClipToJSON,
    AppClipAdvancedExperienceRelationshipsAppClipToJSONTyped,
} from './AppClipAdvancedExperienceRelationshipsAppClip';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceUpdateRequestDataRelationships
 */
export interface AppClipAdvancedExperienceUpdateRequestDataRelationships {
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsAppClip}
     * @memberof AppClipAdvancedExperienceUpdateRequestDataRelationships
     */
    appClip?: AppClipAdvancedExperienceRelationshipsAppClip;
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsHeaderImage}
     * @memberof AppClipAdvancedExperienceUpdateRequestDataRelationships
     */
    headerImage?: AppClipAdvancedExperienceRelationshipsHeaderImage;
    /**
     * 
     * @type {AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations}
     * @memberof AppClipAdvancedExperienceUpdateRequestDataRelationships
     */
    localizations?: AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceUpdateRequestDataRelationships interface.
 */
export function instanceOfAppClipAdvancedExperienceUpdateRequestDataRelationships(value: object): value is AppClipAdvancedExperienceUpdateRequestDataRelationships {
    return true;
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsFromJSON(json: any): AppClipAdvancedExperienceUpdateRequestDataRelationships {
    return AppClipAdvancedExperienceUpdateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceUpdateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appClip': json['appClip'] == null ? undefined : AppClipAdvancedExperienceRelationshipsAppClipFromJSON(json['appClip']),
        'headerImage': json['headerImage'] == null ? undefined : AppClipAdvancedExperienceRelationshipsHeaderImageFromJSON(json['headerImage']),
        'localizations': json['localizations'] == null ? undefined : AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSON(json['localizations']),
    };
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsToJSON(json: any): AppClipAdvancedExperienceUpdateRequestDataRelationships {
    return AppClipAdvancedExperienceUpdateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsToJSONTyped(value?: AppClipAdvancedExperienceUpdateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appClip': AppClipAdvancedExperienceRelationshipsAppClipToJSON(value['appClip']),
        'headerImage': AppClipAdvancedExperienceRelationshipsHeaderImageToJSON(value['headerImage']),
        'localizations': AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsToJSON(value['localizations']),
    };
}

