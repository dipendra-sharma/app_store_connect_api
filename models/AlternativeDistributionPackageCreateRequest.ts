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
import type { AlternativeDistributionPackageCreateRequestData } from './AlternativeDistributionPackageCreateRequestData';
import {
    AlternativeDistributionPackageCreateRequestDataFromJSON,
    AlternativeDistributionPackageCreateRequestDataFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataToJSON,
    AlternativeDistributionPackageCreateRequestDataToJSONTyped,
} from './AlternativeDistributionPackageCreateRequestData';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageCreateRequest
 */
export interface AlternativeDistributionPackageCreateRequest {
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestData}
     * @memberof AlternativeDistributionPackageCreateRequest
     */
    data: AlternativeDistributionPackageCreateRequestData;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequest interface.
 */
export function instanceOfAlternativeDistributionPackageCreateRequest(value: object): value is AlternativeDistributionPackageCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AlternativeDistributionPackageCreateRequestFromJSON(json: any): AlternativeDistributionPackageCreateRequest {
    return AlternativeDistributionPackageCreateRequestFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AlternativeDistributionPackageCreateRequestDataFromJSON(json['data']),
    };
}

export function AlternativeDistributionPackageCreateRequestToJSON(json: any): AlternativeDistributionPackageCreateRequest {
    return AlternativeDistributionPackageCreateRequestToJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestToJSONTyped(value?: AlternativeDistributionPackageCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AlternativeDistributionPackageCreateRequestDataToJSON(value['data']),
    };
}

