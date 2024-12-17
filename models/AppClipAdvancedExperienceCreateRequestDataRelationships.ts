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
import type { AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizations } from './AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizations';
import {
    AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizationsFromJSON,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizationsFromJSONTyped,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizationsToJSON,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizationsToJSONTyped,
} from './AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizations';
import type { AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip } from './AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip';
import {
    AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSON,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSONTyped,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipToJSON,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipToJSONTyped,
} from './AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip';
import type { AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage } from './AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage';
import {
    AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageFromJSON,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageFromJSONTyped,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageToJSON,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageToJSONTyped,
} from './AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceCreateRequestDataRelationships
 */
export interface AppClipAdvancedExperienceCreateRequestDataRelationships {
    /**
     * 
     * @type {AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip}
     * @memberof AppClipAdvancedExperienceCreateRequestDataRelationships
     */
    appClip: AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip;
    /**
     * 
     * @type {AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage}
     * @memberof AppClipAdvancedExperienceCreateRequestDataRelationships
     */
    headerImage: AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage;
    /**
     * 
     * @type {AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizations}
     * @memberof AppClipAdvancedExperienceCreateRequestDataRelationships
     */
    localizations: AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizations;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceCreateRequestDataRelationships interface.
 */
export function instanceOfAppClipAdvancedExperienceCreateRequestDataRelationships(value: object): value is AppClipAdvancedExperienceCreateRequestDataRelationships {
    if (!('appClip' in value) || value['appClip'] === undefined) return false;
    if (!('headerImage' in value) || value['headerImage'] === undefined) return false;
    if (!('localizations' in value) || value['localizations'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceCreateRequestDataRelationshipsFromJSON(json: any): AppClipAdvancedExperienceCreateRequestDataRelationships {
    return AppClipAdvancedExperienceCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appClip': AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSON(json['appClip']),
        'headerImage': AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageFromJSON(json['headerImage']),
        'localizations': AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizationsFromJSON(json['localizations']),
    };
}

export function AppClipAdvancedExperienceCreateRequestDataRelationshipsToJSON(json: any): AppClipAdvancedExperienceCreateRequestDataRelationships {
    return AppClipAdvancedExperienceCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceCreateRequestDataRelationshipsToJSONTyped(value?: AppClipAdvancedExperienceCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appClip': AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipToJSON(value['appClip']),
        'headerImage': AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageToJSON(value['headerImage']),
        'localizations': AppClipAdvancedExperienceCreateRequestDataRelationshipsLocalizationsToJSON(value['localizations']),
    };
}

