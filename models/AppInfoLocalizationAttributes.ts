
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
 * @interface AppInfoLocalizationAttributes
 */
export interface AppInfoLocalizationAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    subtitle?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    privacyPolicyUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    privacyChoicesUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    privacyPolicyText?: string;
}

/**
 * Check if a given object implements the AppInfoLocalizationAttributes interface.
 */
export function instanceOfAppInfoLocalizationAttributes(value: object): value is AppInfoLocalizationAttributes {
    return true;
}

export function AppInfoLocalizationAttributesFromJSON(json: any): AppInfoLocalizationAttributes {
    return AppInfoLocalizationAttributesFromJSONTyped(json, false);
}

export function AppInfoLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'locale': json['locale'] == null ? undefined : json['locale'],
        'name': json['name'] == null ? undefined : json['name'],
        'subtitle': json['subtitle'] == null ? undefined : json['subtitle'],
        'privacyPolicyUrl': json['privacyPolicyUrl'] == null ? undefined : json['privacyPolicyUrl'],
        'privacyChoicesUrl': json['privacyChoicesUrl'] == null ? undefined : json['privacyChoicesUrl'],
        'privacyPolicyText': json['privacyPolicyText'] == null ? undefined : json['privacyPolicyText'],
    };
}

export function AppInfoLocalizationAttributesToJSON(json: any): AppInfoLocalizationAttributes {
    return AppInfoLocalizationAttributesToJSONTyped(json, false);
}

export function AppInfoLocalizationAttributesToJSONTyped(value?: AppInfoLocalizationAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'locale': value['locale'],
        'name': value['name'],
        'subtitle': value['subtitle'],
        'privacyPolicyUrl': value['privacyPolicyUrl'],
        'privacyChoicesUrl': value['privacyChoicesUrl'],
        'privacyPolicyText': value['privacyPolicyText'],
    };
}
