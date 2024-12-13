
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
import type { CiBuildRunCreateRequestData } from './CiBuildRunCreateRequestData';
import {
    CiBuildRunCreateRequestDataFromJSON,
    CiBuildRunCreateRequestDataFromJSONTyped,
    CiBuildRunCreateRequestDataToJSON,
    CiBuildRunCreateRequestDataToJSONTyped,
} from './CiBuildRunCreateRequestData';

/**
 * 
 * @export
 * @interface CiBuildRunCreateRequest
 */
export interface CiBuildRunCreateRequest {
    /**
     * 
     * @type {CiBuildRunCreateRequestData}
     * @memberof CiBuildRunCreateRequest
     */
    data: CiBuildRunCreateRequestData;
}

/**
 * Check if a given object implements the CiBuildRunCreateRequest interface.
 */
export function instanceOfCiBuildRunCreateRequest(value: object): value is CiBuildRunCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CiBuildRunCreateRequestFromJSON(json: any): CiBuildRunCreateRequest {
    return CiBuildRunCreateRequestFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CiBuildRunCreateRequestDataFromJSON(json['data']),
    };
}

export function CiBuildRunCreateRequestToJSON(json: any): CiBuildRunCreateRequest {
    return CiBuildRunCreateRequestToJSONTyped(json, false);
}

export function CiBuildRunCreateRequestToJSONTyped(value?: CiBuildRunCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CiBuildRunCreateRequestDataToJSON(value['data']),
    };
}

