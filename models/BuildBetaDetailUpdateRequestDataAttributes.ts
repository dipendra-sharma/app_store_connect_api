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
 * @interface BuildBetaDetailUpdateRequestDataAttributes
 */
export interface BuildBetaDetailUpdateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof BuildBetaDetailUpdateRequestDataAttributes
     */
    autoNotifyEnabled?: boolean;
}

/**
 * Check if a given object implements the BuildBetaDetailUpdateRequestDataAttributes interface.
 */
export function instanceOfBuildBetaDetailUpdateRequestDataAttributes(value: object): value is BuildBetaDetailUpdateRequestDataAttributes {
    return true;
}

export function BuildBetaDetailUpdateRequestDataAttributesFromJSON(json: any): BuildBetaDetailUpdateRequestDataAttributes {
    return BuildBetaDetailUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function BuildBetaDetailUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaDetailUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'autoNotifyEnabled': json['autoNotifyEnabled'] == null ? undefined : json['autoNotifyEnabled'],
    };
}

export function BuildBetaDetailUpdateRequestDataAttributesToJSON(json: any): BuildBetaDetailUpdateRequestDataAttributes {
    return BuildBetaDetailUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function BuildBetaDetailUpdateRequestDataAttributesToJSONTyped(value?: BuildBetaDetailUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'autoNotifyEnabled': value['autoNotifyEnabled'],
    };
}

