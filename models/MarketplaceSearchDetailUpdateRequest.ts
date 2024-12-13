
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
import type { MarketplaceSearchDetailUpdateRequestData } from './MarketplaceSearchDetailUpdateRequestData';
import {
    MarketplaceSearchDetailUpdateRequestDataFromJSON,
    MarketplaceSearchDetailUpdateRequestDataFromJSONTyped,
    MarketplaceSearchDetailUpdateRequestDataToJSON,
    MarketplaceSearchDetailUpdateRequestDataToJSONTyped,
} from './MarketplaceSearchDetailUpdateRequestData';

/**
 * 
 * @export
 * @interface MarketplaceSearchDetailUpdateRequest
 */
export interface MarketplaceSearchDetailUpdateRequest {
    /**
     * 
     * @type {MarketplaceSearchDetailUpdateRequestData}
     * @memberof MarketplaceSearchDetailUpdateRequest
     */
    data: MarketplaceSearchDetailUpdateRequestData;
}

/**
 * Check if a given object implements the MarketplaceSearchDetailUpdateRequest interface.
 */
export function instanceOfMarketplaceSearchDetailUpdateRequest(value: object): value is MarketplaceSearchDetailUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function MarketplaceSearchDetailUpdateRequestFromJSON(json: any): MarketplaceSearchDetailUpdateRequest {
    return MarketplaceSearchDetailUpdateRequestFromJSONTyped(json, false);
}

export function MarketplaceSearchDetailUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceSearchDetailUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': MarketplaceSearchDetailUpdateRequestDataFromJSON(json['data']),
    };
}

export function MarketplaceSearchDetailUpdateRequestToJSON(json: any): MarketplaceSearchDetailUpdateRequest {
    return MarketplaceSearchDetailUpdateRequestToJSONTyped(json, false);
}

export function MarketplaceSearchDetailUpdateRequestToJSONTyped(value?: MarketplaceSearchDetailUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': MarketplaceSearchDetailUpdateRequestDataToJSON(value['data']),
    };
}
