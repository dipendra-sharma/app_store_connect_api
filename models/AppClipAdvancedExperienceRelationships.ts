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
import type { AppClipAdvancedExperienceRelationshipsLocalizations } from './AppClipAdvancedExperienceRelationshipsLocalizations';
import {
    AppClipAdvancedExperienceRelationshipsLocalizationsFromJSON,
    AppClipAdvancedExperienceRelationshipsLocalizationsFromJSONTyped,
    AppClipAdvancedExperienceRelationshipsLocalizationsToJSON,
    AppClipAdvancedExperienceRelationshipsLocalizationsToJSONTyped,
} from './AppClipAdvancedExperienceRelationshipsLocalizations';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceRelationships
 */
export interface AppClipAdvancedExperienceRelationships {
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsAppClip}
     * @memberof AppClipAdvancedExperienceRelationships
     */
    appClip?: AppClipAdvancedExperienceRelationshipsAppClip;
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsHeaderImage}
     * @memberof AppClipAdvancedExperienceRelationships
     */
    headerImage?: AppClipAdvancedExperienceRelationshipsHeaderImage;
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsLocalizations}
     * @memberof AppClipAdvancedExperienceRelationships
     */
    localizations?: AppClipAdvancedExperienceRelationshipsLocalizations;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationships interface.
 */
export function instanceOfAppClipAdvancedExperienceRelationships(value: object): value is AppClipAdvancedExperienceRelationships {
    return true;
}

export function AppClipAdvancedExperienceRelationshipsFromJSON(json: any): AppClipAdvancedExperienceRelationships {
    return AppClipAdvancedExperienceRelationshipsFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appClip': json['appClip'] == null ? undefined : AppClipAdvancedExperienceRelationshipsAppClipFromJSON(json['appClip']),
        'headerImage': json['headerImage'] == null ? undefined : AppClipAdvancedExperienceRelationshipsHeaderImageFromJSON(json['headerImage']),
        'localizations': json['localizations'] == null ? undefined : AppClipAdvancedExperienceRelationshipsLocalizationsFromJSON(json['localizations']),
    };
}

export function AppClipAdvancedExperienceRelationshipsToJSON(json: any): AppClipAdvancedExperienceRelationships {
    return AppClipAdvancedExperienceRelationshipsToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsToJSONTyped(value?: AppClipAdvancedExperienceRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appClip': AppClipAdvancedExperienceRelationshipsAppClipToJSON(value['appClip']),
        'headerImage': AppClipAdvancedExperienceRelationshipsHeaderImageToJSON(value['headerImage']),
        'localizations': AppClipAdvancedExperienceRelationshipsLocalizationsToJSON(value['localizations']),
    };
}

