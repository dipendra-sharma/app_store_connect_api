
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
import type { AlternativeDistributionDomainCreateRequestData } from './AlternativeDistributionDomainCreateRequestData';
import {
    AlternativeDistributionDomainCreateRequestDataFromJSON,
    AlternativeDistributionDomainCreateRequestDataFromJSONTyped,
    AlternativeDistributionDomainCreateRequestDataToJSON,
    AlternativeDistributionDomainCreateRequestDataToJSONTyped,
} from './AlternativeDistributionDomainCreateRequestData';

/**
 * 
 * @export
 * @interface AlternativeDistributionDomainCreateRequest
 */
export interface AlternativeDistributionDomainCreateRequest {
    /**
     * 
     * @type {AlternativeDistributionDomainCreateRequestData}
     * @memberof AlternativeDistributionDomainCreateRequest
     */
    data: AlternativeDistributionDomainCreateRequestData;
}

/**
 * Check if a given object implements the AlternativeDistributionDomainCreateRequest interface.
 */
export function instanceOfAlternativeDistributionDomainCreateRequest(value: object): value is AlternativeDistributionDomainCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AlternativeDistributionDomainCreateRequestFromJSON(json: any): AlternativeDistributionDomainCreateRequest {
    return AlternativeDistributionDomainCreateRequestFromJSONTyped(json, false);
}

export function AlternativeDistributionDomainCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionDomainCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AlternativeDistributionDomainCreateRequestDataFromJSON(json['data']),
    };
}

export function AlternativeDistributionDomainCreateRequestToJSON(json: any): AlternativeDistributionDomainCreateRequest {
    return AlternativeDistributionDomainCreateRequestToJSONTyped(json, false);
}

export function AlternativeDistributionDomainCreateRequestToJSONTyped(value?: AlternativeDistributionDomainCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AlternativeDistributionDomainCreateRequestDataToJSON(value['data']),
    };
}

