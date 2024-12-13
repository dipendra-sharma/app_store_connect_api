
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
 * @interface AppCustomProductPageLocalizationAttributes
 */
export interface AppCustomProductPageLocalizationAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationAttributes
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationAttributes
     */
    promotionalText?: string;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationAttributes interface.
 */
export function instanceOfAppCustomProductPageLocalizationAttributes(value: object): value is AppCustomProductPageLocalizationAttributes {
    return true;
}

export function AppCustomProductPageLocalizationAttributesFromJSON(json: any): AppCustomProductPageLocalizationAttributes {
    return AppCustomProductPageLocalizationAttributesFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'locale': json['locale'] == null ? undefined : json['locale'],
        'promotionalText': json['promotionalText'] == null ? undefined : json['promotionalText'],
    };
}

export function AppCustomProductPageLocalizationAttributesToJSON(json: any): AppCustomProductPageLocalizationAttributes {
    return AppCustomProductPageLocalizationAttributesToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationAttributesToJSONTyped(value?: AppCustomProductPageLocalizationAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'locale': value['locale'],
        'promotionalText': value['promotionalText'],
    };
}

