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
 * @interface CiBuildRunCreateRequestDataAttributes
 */
export interface CiBuildRunCreateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof CiBuildRunCreateRequestDataAttributes
     */
    clean?: boolean;
}

/**
 * Check if a given object implements the CiBuildRunCreateRequestDataAttributes interface.
 */
export function instanceOfCiBuildRunCreateRequestDataAttributes(value: object): value is CiBuildRunCreateRequestDataAttributes {
    return true;
}

export function CiBuildRunCreateRequestDataAttributesFromJSON(json: any): CiBuildRunCreateRequestDataAttributes {
    return CiBuildRunCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'clean': json['clean'] == null ? undefined : json['clean'],
    };
}

export function CiBuildRunCreateRequestDataAttributesToJSON(json: any): CiBuildRunCreateRequestDataAttributes {
    return CiBuildRunCreateRequestDataAttributesToJSONTyped(json, false);
}

export function CiBuildRunCreateRequestDataAttributesToJSONTyped(value?: CiBuildRunCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'clean': value['clean'],
    };
}

