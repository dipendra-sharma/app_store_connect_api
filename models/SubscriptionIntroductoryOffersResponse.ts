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
import type { SubscriptionIntroductoryOffersResponseIncludedInner } from './SubscriptionIntroductoryOffersResponseIncludedInner';
import {
    SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON,
    SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped,
    SubscriptionIntroductoryOffersResponseIncludedInnerToJSON,
    SubscriptionIntroductoryOffersResponseIncludedInnerToJSONTyped,
} from './SubscriptionIntroductoryOffersResponseIncludedInner';
import type { SubscriptionIntroductoryOffer } from './SubscriptionIntroductoryOffer';
import {
    SubscriptionIntroductoryOfferFromJSON,
    SubscriptionIntroductoryOfferFromJSONTyped,
    SubscriptionIntroductoryOfferToJSON,
    SubscriptionIntroductoryOfferToJSONTyped,
} from './SubscriptionIntroductoryOffer';
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
 * @interface SubscriptionIntroductoryOffersResponse
 */
export interface SubscriptionIntroductoryOffersResponse {
    /**
     * 
     * @type {Array<SubscriptionIntroductoryOffer>}
     * @memberof SubscriptionIntroductoryOffersResponse
     */
    data: Array<SubscriptionIntroductoryOffer>;
    /**
     * 
     * @type {Array<SubscriptionIntroductoryOffersResponseIncludedInner>}
     * @memberof SubscriptionIntroductoryOffersResponse
     */
    included?: Array<SubscriptionIntroductoryOffersResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionIntroductoryOffersResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionIntroductoryOffersResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOffersResponse interface.
 */
export function instanceOfSubscriptionIntroductoryOffersResponse(value: object): value is SubscriptionIntroductoryOffersResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function SubscriptionIntroductoryOffersResponseFromJSON(json: any): SubscriptionIntroductoryOffersResponse {
    return SubscriptionIntroductoryOffersResponseFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOffersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionIntroductoryOfferFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionIntroductoryOffersResponseToJSON(json: any): SubscriptionIntroductoryOffersResponse {
    return SubscriptionIntroductoryOffersResponseToJSONTyped(json, false);
}

export function SubscriptionIntroductoryOffersResponseToJSONTyped(value?: SubscriptionIntroductoryOffersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(SubscriptionIntroductoryOfferToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionIntroductoryOffersResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

