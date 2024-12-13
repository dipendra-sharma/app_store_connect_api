
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
 * @interface AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes
 */
export interface AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes
     */
    subtitle?: string;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationUpdateRequestDataAttributes(value: object): value is AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes {
    return true;
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesFromJSON(json: any): AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes {
    return AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'subtitle': json['subtitle'] == null ? undefined : json['subtitle'],
    };
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesToJSON(json: any): AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes {
    return AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesToJSONTyped(value?: AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subtitle': value['subtitle'],
    };
}
