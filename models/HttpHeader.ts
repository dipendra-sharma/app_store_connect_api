
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
 * @interface HttpHeader
 */
export interface HttpHeader {
    /**
     * 
     * @type {string}
     * @memberof HttpHeader
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof HttpHeader
     */
    value?: string;
}

/**
 * Check if a given object implements the HttpHeader interface.
 */
export function instanceOfHttpHeader(value: object): value is HttpHeader {
    return true;
}

export function HttpHeaderFromJSON(json: any): HttpHeader {
    return HttpHeaderFromJSONTyped(json, false);
}

export function HttpHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): HttpHeader {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function HttpHeaderToJSON(json: any): HttpHeader {
    return HttpHeaderToJSONTyped(json, false);
}

export function HttpHeaderToJSONTyped(value?: HttpHeader | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'value': value['value'],
    };
}
