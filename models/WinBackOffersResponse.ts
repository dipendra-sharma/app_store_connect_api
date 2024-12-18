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
import type { WinBackOffer } from './WinBackOffer';
import {
    WinBackOfferFromJSON,
    WinBackOfferFromJSONTyped,
    WinBackOfferToJSON,
    WinBackOfferToJSONTyped,
} from './WinBackOffer';
import type { WinBackOfferPrice } from './WinBackOfferPrice';
import {
    WinBackOfferPriceFromJSON,
    WinBackOfferPriceFromJSONTyped,
    WinBackOfferPriceToJSON,
    WinBackOfferPriceToJSONTyped,
} from './WinBackOfferPrice';
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
 * @interface WinBackOffersResponse
 */
export interface WinBackOffersResponse {
    /**
     * 
     * @type {Array<WinBackOffer>}
     * @memberof WinBackOffersResponse
     */
    data: Array<WinBackOffer>;
    /**
     * 
     * @type {Array<WinBackOfferPrice>}
     * @memberof WinBackOffersResponse
     */
    included?: Array<WinBackOfferPrice>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof WinBackOffersResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof WinBackOffersResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the WinBackOffersResponse interface.
 */
export function instanceOfWinBackOffersResponse(value: object): value is WinBackOffersResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function WinBackOffersResponseFromJSON(json: any): WinBackOffersResponse {
    return WinBackOffersResponseFromJSONTyped(json, false);
}

export function WinBackOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOffersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(WinBackOfferFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(WinBackOfferPriceFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function WinBackOffersResponseToJSON(json: any): WinBackOffersResponse {
    return WinBackOffersResponseToJSONTyped(json, false);
}

export function WinBackOffersResponseToJSONTyped(value?: WinBackOffersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(WinBackOfferToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(WinBackOfferPriceToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

