
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
import type { BetaTestersResponseIncludedInner } from './BetaTestersResponseIncludedInner';
import {
    BetaTestersResponseIncludedInnerFromJSON,
    BetaTestersResponseIncludedInnerFromJSONTyped,
    BetaTestersResponseIncludedInnerToJSON,
    BetaTestersResponseIncludedInnerToJSONTyped,
} from './BetaTestersResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
import type { BetaTester } from './BetaTester';
import {
    BetaTesterFromJSON,
    BetaTesterFromJSONTyped,
    BetaTesterToJSON,
    BetaTesterToJSONTyped,
} from './BetaTester';

/**
 * 
 * @export
 * @interface BetaTestersResponse
 */
export interface BetaTestersResponse {
    /**
     * 
     * @type {Array<BetaTester>}
     * @memberof BetaTestersResponse
     */
    data: Array<BetaTester>;
    /**
     * 
     * @type {Array<BetaTestersResponseIncludedInner>}
     * @memberof BetaTestersResponse
     */
    included?: Array<BetaTestersResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaTestersResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaTestersResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaTestersResponse interface.
 */
export function instanceOfBetaTestersResponse(value: object): value is BetaTestersResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaTestersResponseFromJSON(json: any): BetaTestersResponse {
    return BetaTestersResponseFromJSONTyped(json, false);
}

export function BetaTestersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTestersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaTesterFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(BetaTestersResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaTestersResponseToJSON(json: any): BetaTestersResponse {
    return BetaTestersResponseToJSONTyped(json, false);
}

export function BetaTestersResponseToJSONTyped(value?: BetaTestersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaTesterToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(BetaTestersResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
