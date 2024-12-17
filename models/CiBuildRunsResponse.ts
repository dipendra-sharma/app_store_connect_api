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
import type { CiBuildRunsResponseIncludedInner } from './CiBuildRunsResponseIncludedInner';
import {
    CiBuildRunsResponseIncludedInnerFromJSON,
    CiBuildRunsResponseIncludedInnerFromJSONTyped,
    CiBuildRunsResponseIncludedInnerToJSON,
    CiBuildRunsResponseIncludedInnerToJSONTyped,
} from './CiBuildRunsResponseIncludedInner';
import type { CiBuildRun } from './CiBuildRun';
import {
    CiBuildRunFromJSON,
    CiBuildRunFromJSONTyped,
    CiBuildRunToJSON,
    CiBuildRunToJSONTyped,
} from './CiBuildRun';
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
 * @interface CiBuildRunsResponse
 */
export interface CiBuildRunsResponse {
    /**
     * 
     * @type {Array<CiBuildRun>}
     * @memberof CiBuildRunsResponse
     */
    data: Array<CiBuildRun>;
    /**
     * 
     * @type {Array<CiBuildRunsResponseIncludedInner>}
     * @memberof CiBuildRunsResponse
     */
    included?: Array<CiBuildRunsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiBuildRunsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiBuildRunsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiBuildRunsResponse interface.
 */
export function instanceOfCiBuildRunsResponse(value: object): value is CiBuildRunsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CiBuildRunsResponseFromJSON(json: any): CiBuildRunsResponse {
    return CiBuildRunsResponseFromJSONTyped(json, false);
}

export function CiBuildRunsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiBuildRunFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(CiBuildRunsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiBuildRunsResponseToJSON(json: any): CiBuildRunsResponse {
    return CiBuildRunsResponseToJSONTyped(json, false);
}

export function CiBuildRunsResponseToJSONTyped(value?: CiBuildRunsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(CiBuildRunToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(CiBuildRunsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

