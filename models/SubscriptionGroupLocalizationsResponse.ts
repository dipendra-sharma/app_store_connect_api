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
import type { SubscriptionGroupLocalization } from './SubscriptionGroupLocalization';
import {
    SubscriptionGroupLocalizationFromJSON,
    SubscriptionGroupLocalizationFromJSONTyped,
    SubscriptionGroupLocalizationToJSON,
    SubscriptionGroupLocalizationToJSONTyped,
} from './SubscriptionGroupLocalization';
import type { SubscriptionGroup } from './SubscriptionGroup';
import {
    SubscriptionGroupFromJSON,
    SubscriptionGroupFromJSONTyped,
    SubscriptionGroupToJSON,
    SubscriptionGroupToJSONTyped,
} from './SubscriptionGroup';
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
 * @interface SubscriptionGroupLocalizationsResponse
 */
export interface SubscriptionGroupLocalizationsResponse {
    /**
     * 
     * @type {Array<SubscriptionGroupLocalization>}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    data: Array<SubscriptionGroupLocalization>;
    /**
     * 
     * @type {Array<SubscriptionGroup>}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    included?: Array<SubscriptionGroup>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationsResponse interface.
 */
export function instanceOfSubscriptionGroupLocalizationsResponse(value: object): value is SubscriptionGroupLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function SubscriptionGroupLocalizationsResponseFromJSON(json: any): SubscriptionGroupLocalizationsResponse {
    return SubscriptionGroupLocalizationsResponseFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionGroupLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionGroupFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionGroupLocalizationsResponseToJSON(json: any): SubscriptionGroupLocalizationsResponse {
    return SubscriptionGroupLocalizationsResponseToJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationsResponseToJSONTyped(value?: SubscriptionGroupLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(SubscriptionGroupLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionGroupToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

