
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
 * @interface BuildsWithoutIncludesResponse
 */
export interface BuildsWithoutIncludesResponse {
    /**
     * 
     * @type {Array<Build>}
     * @memberof BuildsWithoutIncludesResponse
     */
    data: Array<Build>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BuildsWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildsWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BuildsWithoutIncludesResponse interface.
 */
export function instanceOfBuildsWithoutIncludesResponse(value: object): value is BuildsWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BuildsWithoutIncludesResponseFromJSON(json: any): BuildsWithoutIncludesResponse {
    return BuildsWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BuildsWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildsWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BuildFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BuildsWithoutIncludesResponseToJSON(json: any): BuildsWithoutIncludesResponse {
    return BuildsWithoutIncludesResponseToJSONTyped(json, false);
}

export function BuildsWithoutIncludesResponseToJSONTyped(value?: BuildsWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BuildToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
