
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
import type { MarketplaceWebhook } from './MarketplaceWebhook';
import {
    MarketplaceWebhookFromJSON,
    MarketplaceWebhookFromJSONTyped,
    MarketplaceWebhookToJSON,
    MarketplaceWebhookToJSONTyped,
} from './MarketplaceWebhook';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface MarketplaceWebhooksResponse
 */
export interface MarketplaceWebhooksResponse {
    /**
     * 
     * @type {Array<MarketplaceWebhook>}
     * @memberof MarketplaceWebhooksResponse
     */
    data: Array<MarketplaceWebhook>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof MarketplaceWebhooksResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof MarketplaceWebhooksResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the MarketplaceWebhooksResponse interface.
 */
export function instanceOfMarketplaceWebhooksResponse(value: object): value is MarketplaceWebhooksResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function MarketplaceWebhooksResponseFromJSON(json: any): MarketplaceWebhooksResponse {
    return MarketplaceWebhooksResponseFromJSONTyped(json, false);
}

export function MarketplaceWebhooksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhooksResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(MarketplaceWebhookFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function MarketplaceWebhooksResponseToJSON(json: any): MarketplaceWebhooksResponse {
    return MarketplaceWebhooksResponseToJSONTyped(json, false);
}

export function MarketplaceWebhooksResponseToJSONTyped(value?: MarketplaceWebhooksResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(MarketplaceWebhookToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

