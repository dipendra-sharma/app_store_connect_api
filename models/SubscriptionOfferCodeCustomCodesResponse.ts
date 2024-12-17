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
import type { SubscriptionOfferCodeCustomCode } from './SubscriptionOfferCodeCustomCode';
import {
    SubscriptionOfferCodeCustomCodeFromJSON,
    SubscriptionOfferCodeCustomCodeFromJSONTyped,
    SubscriptionOfferCodeCustomCodeToJSON,
    SubscriptionOfferCodeCustomCodeToJSONTyped,
} from './SubscriptionOfferCodeCustomCode';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
import type { SubscriptionOfferCode } from './SubscriptionOfferCode';
import {
    SubscriptionOfferCodeFromJSON,
    SubscriptionOfferCodeFromJSONTyped,
    SubscriptionOfferCodeToJSON,
    SubscriptionOfferCodeToJSONTyped,
} from './SubscriptionOfferCode';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCustomCodesResponse
 */
export interface SubscriptionOfferCodeCustomCodesResponse {
    /**
     * 
     * @type {Array<SubscriptionOfferCodeCustomCode>}
     * @memberof SubscriptionOfferCodeCustomCodesResponse
     */
    data: Array<SubscriptionOfferCodeCustomCode>;
    /**
     * 
     * @type {Array<SubscriptionOfferCode>}
     * @memberof SubscriptionOfferCodeCustomCodesResponse
     */
    included?: Array<SubscriptionOfferCode>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionOfferCodeCustomCodesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodeCustomCodesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodesResponse interface.
 */
export function instanceOfSubscriptionOfferCodeCustomCodesResponse(value: object): value is SubscriptionOfferCodeCustomCodesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodeCustomCodesResponseFromJSON(json: any): SubscriptionOfferCodeCustomCodesResponse {
    return SubscriptionOfferCodeCustomCodesResponseFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionOfferCodeCustomCodeFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodeFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionOfferCodeCustomCodesResponseToJSON(json: any): SubscriptionOfferCodeCustomCodesResponse {
    return SubscriptionOfferCodeCustomCodesResponseToJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodesResponseToJSONTyped(value?: SubscriptionOfferCodeCustomCodesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(SubscriptionOfferCodeCustomCodeToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionOfferCodeToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

