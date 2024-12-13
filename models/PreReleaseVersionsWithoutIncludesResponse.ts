
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
import type { PrereleaseVersion } from './PrereleaseVersion';
import {
    PrereleaseVersionFromJSON,
    PrereleaseVersionFromJSONTyped,
    PrereleaseVersionToJSON,
    PrereleaseVersionToJSONTyped,
} from './PrereleaseVersion';
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
 * @interface PreReleaseVersionsWithoutIncludesResponse
 */
export interface PreReleaseVersionsWithoutIncludesResponse {
    /**
     * 
     * @type {Array<PrereleaseVersion>}
     * @memberof PreReleaseVersionsWithoutIncludesResponse
     */
    data: Array<PrereleaseVersion>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof PreReleaseVersionsWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof PreReleaseVersionsWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the PreReleaseVersionsWithoutIncludesResponse interface.
 */
export function instanceOfPreReleaseVersionsWithoutIncludesResponse(value: object): value is PreReleaseVersionsWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function PreReleaseVersionsWithoutIncludesResponseFromJSON(json: any): PreReleaseVersionsWithoutIncludesResponse {
    return PreReleaseVersionsWithoutIncludesResponseFromJSONTyped(json, false);
}

export function PreReleaseVersionsWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreReleaseVersionsWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(PrereleaseVersionFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function PreReleaseVersionsWithoutIncludesResponseToJSON(json: any): PreReleaseVersionsWithoutIncludesResponse {
    return PreReleaseVersionsWithoutIncludesResponseToJSONTyped(json, false);
}

export function PreReleaseVersionsWithoutIncludesResponseToJSONTyped(value?: PreReleaseVersionsWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(PrereleaseVersionToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

