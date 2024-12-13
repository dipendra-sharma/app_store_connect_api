
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
 * @interface AppCustomProductPageLocalizationInlineCreateAttributes
 */
export interface AppCustomProductPageLocalizationInlineCreateAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationInlineCreateAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationInlineCreateAttributes
     */
    promotionalText?: string;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationInlineCreateAttributes interface.
 */
export function instanceOfAppCustomProductPageLocalizationInlineCreateAttributes(value: object): value is AppCustomProductPageLocalizationInlineCreateAttributes {
    if (!('locale' in value) || value['locale'] === undefined) return false;
    return true;
}

export function AppCustomProductPageLocalizationInlineCreateAttributesFromJSON(json: any): AppCustomProductPageLocalizationInlineCreateAttributes {
    return AppCustomProductPageLocalizationInlineCreateAttributesFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationInlineCreateAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'locale': json['locale'],
        'promotionalText': json['promotionalText'] == null ? undefined : json['promotionalText'],
    };
}

export function AppCustomProductPageLocalizationInlineCreateAttributesToJSON(json: any): AppCustomProductPageLocalizationInlineCreateAttributes {
    return AppCustomProductPageLocalizationInlineCreateAttributesToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationInlineCreateAttributesToJSONTyped(value?: AppCustomProductPageLocalizationInlineCreateAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'locale': value['locale'],
        'promotionalText': value['promotionalText'],
    };
}

