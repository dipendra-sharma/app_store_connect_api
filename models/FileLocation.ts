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
 * @interface FileLocation
 */
export interface FileLocation {
    /**
     * 
     * @type {string}
     * @memberof FileLocation
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof FileLocation
     */
    lineNumber?: number;
}

/**
 * Check if a given object implements the FileLocation interface.
 */
export function instanceOfFileLocation(value: object): value is FileLocation {
    return true;
}

export function FileLocationFromJSON(json: any): FileLocation {
    return FileLocationFromJSONTyped(json, false);
}

export function FileLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileLocation {
    if (json == null) {
        return json;
    }
    return {
        
        'path': json['path'] == null ? undefined : json['path'],
        'lineNumber': json['lineNumber'] == null ? undefined : json['lineNumber'],
    };
}

export function FileLocationToJSON(json: any): FileLocation {
    return FileLocationToJSONTyped(json, false);
}

export function FileLocationToJSONTyped(value?: FileLocation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'path': value['path'],
        'lineNumber': value['lineNumber'],
    };
}

