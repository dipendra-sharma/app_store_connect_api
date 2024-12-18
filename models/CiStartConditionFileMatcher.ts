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
 * @interface CiStartConditionFileMatcher
 */
export interface CiStartConditionFileMatcher {
    /**
     * 
     * @type {string}
     * @memberof CiStartConditionFileMatcher
     */
    directory?: string;
    /**
     * 
     * @type {string}
     * @memberof CiStartConditionFileMatcher
     */
    fileExtension?: string;
    /**
     * 
     * @type {string}
     * @memberof CiStartConditionFileMatcher
     */
    fileName?: string;
}

/**
 * Check if a given object implements the CiStartConditionFileMatcher interface.
 */
export function instanceOfCiStartConditionFileMatcher(value: object): value is CiStartConditionFileMatcher {
    return true;
}

export function CiStartConditionFileMatcherFromJSON(json: any): CiStartConditionFileMatcher {
    return CiStartConditionFileMatcherFromJSONTyped(json, false);
}

export function CiStartConditionFileMatcherFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiStartConditionFileMatcher {
    if (json == null) {
        return json;
    }
    return {
        
        'directory': json['directory'] == null ? undefined : json['directory'],
        'fileExtension': json['fileExtension'] == null ? undefined : json['fileExtension'],
        'fileName': json['fileName'] == null ? undefined : json['fileName'],
    };
}

export function CiStartConditionFileMatcherToJSON(json: any): CiStartConditionFileMatcher {
    return CiStartConditionFileMatcherToJSONTyped(json, false);
}

export function CiStartConditionFileMatcherToJSONTyped(value?: CiStartConditionFileMatcher | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'directory': value['directory'],
        'fileExtension': value['fileExtension'],
        'fileName': value['fileName'],
    };
}

