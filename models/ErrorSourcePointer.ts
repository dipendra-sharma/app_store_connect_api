
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
 * @interface ErrorSourcePointer
 */
export interface ErrorSourcePointer {
    /**
     * 
     * @type {string}
     * @memberof ErrorSourcePointer
     */
    pointer: string;
}

/**
 * Check if a given object implements the ErrorSourcePointer interface.
 */
export function instanceOfErrorSourcePointer(value: object): value is ErrorSourcePointer {
    if (!('pointer' in value) || value['pointer'] === undefined) return false;
    return true;
}

export function ErrorSourcePointerFromJSON(json: any): ErrorSourcePointer {
    return ErrorSourcePointerFromJSONTyped(json, false);
}

export function ErrorSourcePointerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorSourcePointer {
    if (json == null) {
        return json;
    }
    return {
        
        'pointer': json['pointer'],
    };
}

export function ErrorSourcePointerToJSON(json: any): ErrorSourcePointer {
    return ErrorSourcePointerToJSONTyped(json, false);
}

export function ErrorSourcePointerToJSONTyped(value?: ErrorSourcePointer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'pointer': value['pointer'],
    };
}
