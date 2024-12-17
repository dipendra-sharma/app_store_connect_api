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
import type { Build } from './Build';
import {
    BuildFromJSON,
    BuildFromJSONTyped,
    BuildToJSON,
    BuildToJSONTyped,
} from './Build';
import type { BuildsResponseIncludedInner } from './BuildsResponseIncludedInner';
import {
    BuildsResponseIncludedInnerFromJSON,
    BuildsResponseIncludedInnerFromJSONTyped,
    BuildsResponseIncludedInnerToJSON,
    BuildsResponseIncludedInnerToJSONTyped,
} from './BuildsResponseIncludedInner';
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
 * @interface BuildsResponse
 */
export interface BuildsResponse {
    /**
     * 
     * @type {Array<Build>}
     * @memberof BuildsResponse
     */
    data: Array<Build>;
    /**
     * 
     * @type {Array<BuildsResponseIncludedInner>}
     * @memberof BuildsResponse
     */
    included?: Array<BuildsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BuildsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BuildsResponse interface.
 */
export function instanceOfBuildsResponse(value: object): value is BuildsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BuildsResponseFromJSON(json: any): BuildsResponse {
    return BuildsResponseFromJSONTyped(json, false);
}

export function BuildsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BuildFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(BuildsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BuildsResponseToJSON(json: any): BuildsResponse {
    return BuildsResponseToJSONTyped(json, false);
}

export function BuildsResponseToJSONTyped(value?: BuildsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BuildToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(BuildsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

