
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
 * @interface BetaAppClipInvocationLocalizationUpdateRequestDataAttributes
 */
export interface BetaAppClipInvocationLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestDataAttributes
     */
    title?: string;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationUpdateRequestDataAttributes(value: object): value is BetaAppClipInvocationLocalizationUpdateRequestDataAttributes {
    return true;
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSON(json: any): BetaAppClipInvocationLocalizationUpdateRequestDataAttributes {
    return BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSON(json: any): BetaAppClipInvocationLocalizationUpdateRequestDataAttributes {
    return BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSONTyped(value?: BetaAppClipInvocationLocalizationUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
    };
}
