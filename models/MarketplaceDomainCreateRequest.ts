
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
import type { MarketplaceDomainCreateRequestData } from './MarketplaceDomainCreateRequestData';
import {
    MarketplaceDomainCreateRequestDataFromJSON,
    MarketplaceDomainCreateRequestDataFromJSONTyped,
    MarketplaceDomainCreateRequestDataToJSON,
    MarketplaceDomainCreateRequestDataToJSONTyped,
} from './MarketplaceDomainCreateRequestData';

/**
 * 
 * @export
 * @interface MarketplaceDomainCreateRequest
 */
export interface MarketplaceDomainCreateRequest {
    /**
     * 
     * @type {MarketplaceDomainCreateRequestData}
     * @memberof MarketplaceDomainCreateRequest
     */
    data: MarketplaceDomainCreateRequestData;
}

/**
 * Check if a given object implements the MarketplaceDomainCreateRequest interface.
 */
export function instanceOfMarketplaceDomainCreateRequest(value: object): value is MarketplaceDomainCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function MarketplaceDomainCreateRequestFromJSON(json: any): MarketplaceDomainCreateRequest {
    return MarketplaceDomainCreateRequestFromJSONTyped(json, false);
}

export function MarketplaceDomainCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceDomainCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': MarketplaceDomainCreateRequestDataFromJSON(json['data']),
    };
}

export function MarketplaceDomainCreateRequestToJSON(json: any): MarketplaceDomainCreateRequest {
    return MarketplaceDomainCreateRequestToJSONTyped(json, false);
}

export function MarketplaceDomainCreateRequestToJSONTyped(value?: MarketplaceDomainCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': MarketplaceDomainCreateRequestDataToJSON(value['data']),
    };
}
