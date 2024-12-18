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
 * @interface BetaAppLocalizationAttributes
 */
export interface BetaAppLocalizationAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationAttributes
     */
    feedbackEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationAttributes
     */
    marketingUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationAttributes
     */
    privacyPolicyUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationAttributes
     */
    tvOsPrivacyPolicy?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationAttributes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalizationAttributes
     */
    locale?: string;
}

/**
 * Check if a given object implements the BetaAppLocalizationAttributes interface.
 */
export function instanceOfBetaAppLocalizationAttributes(value: object): value is BetaAppLocalizationAttributes {
    return true;
}

export function BetaAppLocalizationAttributesFromJSON(json: any): BetaAppLocalizationAttributes {
    return BetaAppLocalizationAttributesFromJSONTyped(json, false);
}

export function BetaAppLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalizationAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'feedbackEmail': json['feedbackEmail'] == null ? undefined : json['feedbackEmail'],
        'marketingUrl': json['marketingUrl'] == null ? undefined : json['marketingUrl'],
        'privacyPolicyUrl': json['privacyPolicyUrl'] == null ? undefined : json['privacyPolicyUrl'],
        'tvOsPrivacyPolicy': json['tvOsPrivacyPolicy'] == null ? undefined : json['tvOsPrivacyPolicy'],
        'description': json['description'] == null ? undefined : json['description'],
        'locale': json['locale'] == null ? undefined : json['locale'],
    };
}

export function BetaAppLocalizationAttributesToJSON(json: any): BetaAppLocalizationAttributes {
    return BetaAppLocalizationAttributesToJSONTyped(json, false);
}

export function BetaAppLocalizationAttributesToJSONTyped(value?: BetaAppLocalizationAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'feedbackEmail': value['feedbackEmail'],
        'marketingUrl': value['marketingUrl'],
        'privacyPolicyUrl': value['privacyPolicyUrl'],
        'tvOsPrivacyPolicy': value['tvOsPrivacyPolicy'],
        'description': value['description'],
        'locale': value['locale'],
    };
}

