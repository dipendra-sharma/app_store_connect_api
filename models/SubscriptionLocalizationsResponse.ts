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
import type { SubscriptionLocalization } from './SubscriptionLocalization';
import {
    SubscriptionLocalizationFromJSON,
    SubscriptionLocalizationFromJSONTyped,
    SubscriptionLocalizationToJSON,
    SubscriptionLocalizationToJSONTyped,
} from './SubscriptionLocalization';
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
    SubscriptionToJSONTyped,
} from './Subscription';
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
 * @interface SubscriptionLocalizationsResponse
 */
export interface SubscriptionLocalizationsResponse {
    /**
     * 
     * @type {Array<SubscriptionLocalization>}
     * @memberof SubscriptionLocalizationsResponse
     */
    data: Array<SubscriptionLocalization>;
    /**
     * 
     * @type {Array<Subscription>}
     * @memberof SubscriptionLocalizationsResponse
     */
    included?: Array<Subscription>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionLocalizationsResponse interface.
 */
export function instanceOfSubscriptionLocalizationsResponse(value: object): value is SubscriptionLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function SubscriptionLocalizationsResponseFromJSON(json: any): SubscriptionLocalizationsResponse {
    return SubscriptionLocalizationsResponseFromJSONTyped(json, false);
}

export function SubscriptionLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionLocalizationsResponseToJSON(json: any): SubscriptionLocalizationsResponse {
    return SubscriptionLocalizationsResponseToJSONTyped(json, false);
}

export function SubscriptionLocalizationsResponseToJSONTyped(value?: SubscriptionLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(SubscriptionLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

