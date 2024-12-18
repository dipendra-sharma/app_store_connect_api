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
 * @interface Location
 */
export interface Location {
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    longitude?: number;
}

/**
 * Check if a given object implements the Location interface.
 */
export function instanceOfLocation(value: object): value is Location {
    return true;
}

export function LocationFromJSON(json: any): Location {
    return LocationFromJSONTyped(json, false);
}

export function LocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Location {
    if (json == null) {
        return json;
    }
    return {
        
        'latitude': json['latitude'] == null ? undefined : json['latitude'],
        'longitude': json['longitude'] == null ? undefined : json['longitude'],
    };
}

export function LocationToJSON(json: any): Location {
    return LocationToJSONTyped(json, false);
}

export function LocationToJSONTyped(value?: Location | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'latitude': value['latitude'],
        'longitude': value['longitude'],
    };
}

