
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
 * @interface ErrorSourceParameter
 */
export interface ErrorSourceParameter {
    /**
     * 
     * @type {string}
     * @memberof ErrorSourceParameter
     */
    parameter: string;
}

/**
 * Check if a given object implements the ErrorSourceParameter interface.
 */
export function instanceOfErrorSourceParameter(value: object): value is ErrorSourceParameter {
    if (!('parameter' in value) || value['parameter'] === undefined) return false;
    return true;
}

export function ErrorSourceParameterFromJSON(json: any): ErrorSourceParameter {
    return ErrorSourceParameterFromJSONTyped(json, false);
}

export function ErrorSourceParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorSourceParameter {
    if (json == null) {
        return json;
    }
    return {
        
        'parameter': json['parameter'],
    };
}

export function ErrorSourceParameterToJSON(json: any): ErrorSourceParameter {
    return ErrorSourceParameterToJSONTyped(json, false);
}

export function ErrorSourceParameterToJSONTyped(value?: ErrorSourceParameter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'parameter': value['parameter'],
    };
}

