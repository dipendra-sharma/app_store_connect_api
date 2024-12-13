
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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
import type { MarketplaceDomain } from './MarketplaceDomain';
import {
    MarketplaceDomainFromJSON,
    MarketplaceDomainFromJSONTyped,
    MarketplaceDomainToJSON,
    MarketplaceDomainToJSONTyped,
} from './MarketplaceDomain';

/**
 * 
 * @export
 * @interface MarketplaceDomainResponse
 */
export interface MarketplaceDomainResponse {
    /**
     * 
     * @type {MarketplaceDomain}
     * @memberof MarketplaceDomainResponse
     * @deprecated
     */
    data: MarketplaceDomain;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof MarketplaceDomainResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the MarketplaceDomainResponse interface.
 */
export function instanceOfMarketplaceDomainResponse(value: object): value is MarketplaceDomainResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function MarketplaceDomainResponseFromJSON(json: any): MarketplaceDomainResponse {
    return MarketplaceDomainResponseFromJSONTyped(json, false);
}

export function MarketplaceDomainResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceDomainResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': MarketplaceDomainFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function MarketplaceDomainResponseToJSON(json: any): MarketplaceDomainResponse {
    return MarketplaceDomainResponseToJSONTyped(json, false);
}

export function MarketplaceDomainResponseToJSONTyped(value?: MarketplaceDomainResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': MarketplaceDomainToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}
