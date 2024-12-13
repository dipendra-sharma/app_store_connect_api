
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
import type { AppClipAdvancedExperienceLanguage } from './AppClipAdvancedExperienceLanguage';
import {
    AppClipAdvancedExperienceLanguageFromJSON,
    AppClipAdvancedExperienceLanguageFromJSONTyped,
    AppClipAdvancedExperienceLanguageToJSON,
    AppClipAdvancedExperienceLanguageToJSONTyped,
} from './AppClipAdvancedExperienceLanguage';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceLocalizationAttributes
 */
export interface AppClipAdvancedExperienceLocalizationAttributes {
    /**
     * 
     * @type {AppClipAdvancedExperienceLanguage}
     * @memberof AppClipAdvancedExperienceLocalizationAttributes
     */
    language?: AppClipAdvancedExperienceLanguage;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalizationAttributes
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalizationAttributes
     */
    subtitle?: string;
}



/**
 * Check if a given object implements the AppClipAdvancedExperienceLocalizationAttributes interface.
 */
export function instanceOfAppClipAdvancedExperienceLocalizationAttributes(value: object): value is AppClipAdvancedExperienceLocalizationAttributes {
    return true;
}

export function AppClipAdvancedExperienceLocalizationAttributesFromJSON(json: any): AppClipAdvancedExperienceLocalizationAttributes {
    return AppClipAdvancedExperienceLocalizationAttributesFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceLocalizationAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'language': json['language'] == null ? undefined : AppClipAdvancedExperienceLanguageFromJSON(json['language']),
        'title': json['title'] == null ? undefined : json['title'],
        'subtitle': json['subtitle'] == null ? undefined : json['subtitle'],
    };
}

export function AppClipAdvancedExperienceLocalizationAttributesToJSON(json: any): AppClipAdvancedExperienceLocalizationAttributes {
    return AppClipAdvancedExperienceLocalizationAttributesToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceLocalizationAttributesToJSONTyped(value?: AppClipAdvancedExperienceLocalizationAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'language': AppClipAdvancedExperienceLanguageToJSON(value['language']),
        'title': value['title'],
        'subtitle': value['subtitle'],
    };
}
