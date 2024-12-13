
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
 * @interface IntegerRange
 */
export interface IntegerRange {
    /**
     * 
     * @type {number}
     * @memberof IntegerRange
     */
    minimum?: number;
    /**
     * 
     * @type {number}
     * @memberof IntegerRange
     */
    maximum?: number;
}

/**
 * Check if a given object implements the IntegerRange interface.
 */
export function instanceOfIntegerRange(value: object): value is IntegerRange {
    return true;
}

export function IntegerRangeFromJSON(json: any): IntegerRange {
    return IntegerRangeFromJSONTyped(json, false);
}

export function IntegerRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegerRange {
    if (json == null) {
        return json;
    }
    return {
        
        'minimum': json['minimum'] == null ? undefined : json['minimum'],
        'maximum': json['maximum'] == null ? undefined : json['maximum'],
    };
}

export function IntegerRangeToJSON(json: any): IntegerRange {
    return IntegerRangeToJSONTyped(json, false);
}

export function IntegerRangeToJSONTyped(value?: IntegerRange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'minimum': value['minimum'],
        'maximum': value['maximum'],
    };
}

