
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
/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationCreateRequestDataAttributes
 */
export interface AppClipDefaultExperienceLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestDataAttributes
     */
    subtitle?: string;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationCreateRequestDataAttributes(value: object): value is AppClipDefaultExperienceLocalizationCreateRequestDataAttributes {
    if (!('locale' in value) || value['locale'] === undefined) return false;
    return true;
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSON(json: any): AppClipDefaultExperienceLocalizationCreateRequestDataAttributes {
    return AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'locale': json['locale'],
        'subtitle': json['subtitle'] == null ? undefined : json['subtitle'],
    };
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSON(json: any): AppClipDefaultExperienceLocalizationCreateRequestDataAttributes {
    return AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSONTyped(value?: AppClipDefaultExperienceLocalizationCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'locale': value['locale'],
        'subtitle': value['subtitle'],
    };
}
