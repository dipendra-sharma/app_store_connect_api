
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
 * @interface BetaAppClipInvocationAttributes
 */
export interface BetaAppClipInvocationAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationAttributes
     */
    url?: string;
}

/**
 * Check if a given object implements the BetaAppClipInvocationAttributes interface.
 */
export function instanceOfBetaAppClipInvocationAttributes(value: object): value is BetaAppClipInvocationAttributes {
    return true;
}

export function BetaAppClipInvocationAttributesFromJSON(json: any): BetaAppClipInvocationAttributes {
    return BetaAppClipInvocationAttributesFromJSONTyped(json, false);
}

export function BetaAppClipInvocationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function BetaAppClipInvocationAttributesToJSON(json: any): BetaAppClipInvocationAttributes {
    return BetaAppClipInvocationAttributesToJSONTyped(json, false);
}

export function BetaAppClipInvocationAttributesToJSONTyped(value?: BetaAppClipInvocationAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'url': value['url'],
    };
}
