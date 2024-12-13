
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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
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
 * @interface MarketplaceDomainsResponse
 */
export interface MarketplaceDomainsResponse {
    /**
     * 
     * @type {Array<MarketplaceDomain>}
     * @memberof MarketplaceDomainsResponse
     */
    data: Array<MarketplaceDomain>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof MarketplaceDomainsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof MarketplaceDomainsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the MarketplaceDomainsResponse interface.
 */
export function instanceOfMarketplaceDomainsResponse(value: object): value is MarketplaceDomainsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function MarketplaceDomainsResponseFromJSON(json: any): MarketplaceDomainsResponse {
    return MarketplaceDomainsResponseFromJSONTyped(json, false);
}

export function MarketplaceDomainsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceDomainsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(MarketplaceDomainFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function MarketplaceDomainsResponseToJSON(json: any): MarketplaceDomainsResponse {
    return MarketplaceDomainsResponseToJSONTyped(json, false);
}

export function MarketplaceDomainsResponseToJSONTyped(value?: MarketplaceDomainsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(MarketplaceDomainToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
