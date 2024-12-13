
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
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
    SubscriptionToJSONTyped,
} from './Subscription';
import type { SubscriptionsResponseIncludedInner } from './SubscriptionsResponseIncludedInner';
import {
    SubscriptionsResponseIncludedInnerFromJSON,
    SubscriptionsResponseIncludedInnerFromJSONTyped,
    SubscriptionsResponseIncludedInnerToJSON,
    SubscriptionsResponseIncludedInnerToJSONTyped,
} from './SubscriptionsResponseIncludedInner';
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
 * @interface SubscriptionsResponse
 */
export interface SubscriptionsResponse {
    /**
     * 
     * @type {Array<Subscription>}
     * @memberof SubscriptionsResponse
     */
    data: Array<Subscription>;
    /**
     * 
     * @type {Array<SubscriptionsResponseIncludedInner>}
     * @memberof SubscriptionsResponse
     */
    included?: Array<SubscriptionsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionsResponse interface.
 */
export function instanceOfSubscriptionsResponse(value: object): value is SubscriptionsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function SubscriptionsResponseFromJSON(json: any): SubscriptionsResponse {
    return SubscriptionsResponseFromJSONTyped(json, false);
}

export function SubscriptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionsResponseToJSON(json: any): SubscriptionsResponse {
    return SubscriptionsResponseToJSONTyped(json, false);
}

export function SubscriptionsResponseToJSONTyped(value?: SubscriptionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(SubscriptionToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
