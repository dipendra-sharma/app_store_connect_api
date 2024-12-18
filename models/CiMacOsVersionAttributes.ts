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
 * @interface CiMacOsVersionAttributes
 */
export interface CiMacOsVersionAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiMacOsVersionAttributes
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof CiMacOsVersionAttributes
     */
    name?: string;
}

/**
 * Check if a given object implements the CiMacOsVersionAttributes interface.
 */
export function instanceOfCiMacOsVersionAttributes(value: object): value is CiMacOsVersionAttributes {
    return true;
}

export function CiMacOsVersionAttributesFromJSON(json: any): CiMacOsVersionAttributes {
    return CiMacOsVersionAttributesFromJSONTyped(json, false);
}

export function CiMacOsVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiMacOsVersionAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'] == null ? undefined : json['version'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function CiMacOsVersionAttributesToJSON(json: any): CiMacOsVersionAttributes {
    return CiMacOsVersionAttributesToJSONTyped(json, false);
}

export function CiMacOsVersionAttributesToJSONTyped(value?: CiMacOsVersionAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'version': value['version'],
        'name': value['name'],
    };
}

