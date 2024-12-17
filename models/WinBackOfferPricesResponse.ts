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
import type { WinBackOfferPrice } from './WinBackOfferPrice';
import {
    WinBackOfferPriceFromJSON,
    WinBackOfferPriceFromJSONTyped,
    WinBackOfferPriceToJSON,
    WinBackOfferPriceToJSONTyped,
} from './WinBackOfferPrice';
import type { SubscriptionOfferCodePricesResponseIncludedInner } from './SubscriptionOfferCodePricesResponseIncludedInner';
import {
    SubscriptionOfferCodePricesResponseIncludedInnerFromJSON,
    SubscriptionOfferCodePricesResponseIncludedInnerFromJSONTyped,
    SubscriptionOfferCodePricesResponseIncludedInnerToJSON,
    SubscriptionOfferCodePricesResponseIncludedInnerToJSONTyped,
} from './SubscriptionOfferCodePricesResponseIncludedInner';
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
 * @interface WinBackOfferPricesResponse
 */
export interface WinBackOfferPricesResponse {
    /**
     * 
     * @type {Array<WinBackOfferPrice>}
     * @memberof WinBackOfferPricesResponse
     */
    data: Array<WinBackOfferPrice>;
    /**
     * 
     * @type {Array<SubscriptionOfferCodePricesResponseIncludedInner>}
     * @memberof WinBackOfferPricesResponse
     */
    included?: Array<SubscriptionOfferCodePricesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof WinBackOfferPricesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof WinBackOfferPricesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the WinBackOfferPricesResponse interface.
 */
export function instanceOfWinBackOfferPricesResponse(value: object): value is WinBackOfferPricesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function WinBackOfferPricesResponseFromJSON(json: any): WinBackOfferPricesResponse {
    return WinBackOfferPricesResponseFromJSONTyped(json, false);
}

export function WinBackOfferPricesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferPricesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(WinBackOfferPriceFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodePricesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function WinBackOfferPricesResponseToJSON(json: any): WinBackOfferPricesResponse {
    return WinBackOfferPricesResponseToJSONTyped(json, false);
}

export function WinBackOfferPricesResponseToJSONTyped(value?: WinBackOfferPricesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(WinBackOfferPriceToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionOfferCodePricesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

