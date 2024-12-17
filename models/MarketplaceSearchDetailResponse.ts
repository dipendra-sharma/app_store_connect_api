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
import type { MarketplaceSearchDetail } from './MarketplaceSearchDetail';
import {
    MarketplaceSearchDetailFromJSON,
    MarketplaceSearchDetailFromJSONTyped,
    MarketplaceSearchDetailToJSON,
    MarketplaceSearchDetailToJSONTyped,
} from './MarketplaceSearchDetail';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface MarketplaceSearchDetailResponse
 */
export interface MarketplaceSearchDetailResponse {
    /**
     * 
     * @type {MarketplaceSearchDetail}
     * @memberof MarketplaceSearchDetailResponse
     */
    data: MarketplaceSearchDetail;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof MarketplaceSearchDetailResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the MarketplaceSearchDetailResponse interface.
 */
export function instanceOfMarketplaceSearchDetailResponse(value: object): value is MarketplaceSearchDetailResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function MarketplaceSearchDetailResponseFromJSON(json: any): MarketplaceSearchDetailResponse {
    return MarketplaceSearchDetailResponseFromJSONTyped(json, false);
}

export function MarketplaceSearchDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceSearchDetailResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': MarketplaceSearchDetailFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function MarketplaceSearchDetailResponseToJSON(json: any): MarketplaceSearchDetailResponse {
    return MarketplaceSearchDetailResponseToJSONTyped(json, false);
}

export function MarketplaceSearchDetailResponseToJSONTyped(value?: MarketplaceSearchDetailResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': MarketplaceSearchDetailToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

