
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
 * @interface AppMediaStateError
 */
export interface AppMediaStateError {
    /**
     * 
     * @type {string}
     * @memberof AppMediaStateError
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof AppMediaStateError
     */
    description?: string;
}

/**
 * Check if a given object implements the AppMediaStateError interface.
 */
export function instanceOfAppMediaStateError(value: object): value is AppMediaStateError {
    return true;
}

export function AppMediaStateErrorFromJSON(json: any): AppMediaStateError {
    return AppMediaStateErrorFromJSONTyped(json, false);
}

export function AppMediaStateErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppMediaStateError {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function AppMediaStateErrorToJSON(json: any): AppMediaStateError {
    return AppMediaStateErrorToJSONTyped(json, false);
}

export function AppMediaStateErrorToJSONTyped(value?: AppMediaStateError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'description': value['description'],
    };
}
