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
 * @interface AppCustomProductPageLocalizationUpdateRequestDataAttributes
 */
export interface AppCustomProductPageLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationUpdateRequestDataAttributes
     */
    promotionalText?: string;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfAppCustomProductPageLocalizationUpdateRequestDataAttributes(value: object): value is AppCustomProductPageLocalizationUpdateRequestDataAttributes {
    return true;
}

export function AppCustomProductPageLocalizationUpdateRequestDataAttributesFromJSON(json: any): AppCustomProductPageLocalizationUpdateRequestDataAttributes {
    return AppCustomProductPageLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'promotionalText': json['promotionalText'] == null ? undefined : json['promotionalText'],
    };
}

export function AppCustomProductPageLocalizationUpdateRequestDataAttributesToJSON(json: any): AppCustomProductPageLocalizationUpdateRequestDataAttributes {
    return AppCustomProductPageLocalizationUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationUpdateRequestDataAttributesToJSONTyped(value?: AppCustomProductPageLocalizationUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'promotionalText': value['promotionalText'],
    };
}

