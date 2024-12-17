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
 * @interface BuildUpdateRequestDataAttributes
 */
export interface BuildUpdateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof BuildUpdateRequestDataAttributes
     */
    expired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildUpdateRequestDataAttributes
     */
    usesNonExemptEncryption?: boolean;
}

/**
 * Check if a given object implements the BuildUpdateRequestDataAttributes interface.
 */
export function instanceOfBuildUpdateRequestDataAttributes(value: object): value is BuildUpdateRequestDataAttributes {
    return true;
}

export function BuildUpdateRequestDataAttributesFromJSON(json: any): BuildUpdateRequestDataAttributes {
    return BuildUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function BuildUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'expired': json['expired'] == null ? undefined : json['expired'],
        'usesNonExemptEncryption': json['usesNonExemptEncryption'] == null ? undefined : json['usesNonExemptEncryption'],
    };
}

export function BuildUpdateRequestDataAttributesToJSON(json: any): BuildUpdateRequestDataAttributes {
    return BuildUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function BuildUpdateRequestDataAttributesToJSONTyped(value?: BuildUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'expired': value['expired'],
        'usesNonExemptEncryption': value['usesNonExemptEncryption'],
    };
}

