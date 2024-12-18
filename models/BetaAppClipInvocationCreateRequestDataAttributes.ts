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
 * @interface BetaAppClipInvocationCreateRequestDataAttributes
 */
export interface BetaAppClipInvocationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationCreateRequestDataAttributes
     */
    url: string;
}

/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestDataAttributes interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequestDataAttributes(value: object): value is BetaAppClipInvocationCreateRequestDataAttributes {
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function BetaAppClipInvocationCreateRequestDataAttributesFromJSON(json: any): BetaAppClipInvocationCreateRequestDataAttributes {
    return BetaAppClipInvocationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function BetaAppClipInvocationCreateRequestDataAttributesToJSON(json: any): BetaAppClipInvocationCreateRequestDataAttributes {
    return BetaAppClipInvocationCreateRequestDataAttributesToJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataAttributesToJSONTyped(value?: BetaAppClipInvocationCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'url': value['url'],
    };
}

