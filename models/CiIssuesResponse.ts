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
import type { CiIssue } from './CiIssue';
import {
    CiIssueFromJSON,
    CiIssueFromJSONTyped,
    CiIssueToJSON,
    CiIssueToJSONTyped,
} from './CiIssue';
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
 * @interface CiIssuesResponse
 */
export interface CiIssuesResponse {
    /**
     * 
     * @type {Array<CiIssue>}
     * @memberof CiIssuesResponse
     */
    data: Array<CiIssue>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiIssuesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiIssuesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiIssuesResponse interface.
 */
export function instanceOfCiIssuesResponse(value: object): value is CiIssuesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CiIssuesResponseFromJSON(json: any): CiIssuesResponse {
    return CiIssuesResponseFromJSONTyped(json, false);
}

export function CiIssuesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiIssuesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiIssueFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiIssuesResponseToJSON(json: any): CiIssuesResponse {
    return CiIssuesResponseToJSONTyped(json, false);
}

export function CiIssuesResponseToJSONTyped(value?: CiIssuesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(CiIssueToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

