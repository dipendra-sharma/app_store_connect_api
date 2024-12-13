
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
import type { BuildIcon } from './BuildIcon';
import {
    BuildIconFromJSON,
    BuildIconFromJSONTyped,
    BuildIconToJSON,
    BuildIconToJSONTyped,
} from './BuildIcon';
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
 * @interface BuildIconsWithoutIncludesResponse
 */
export interface BuildIconsWithoutIncludesResponse {
    /**
     * 
     * @type {Array<BuildIcon>}
     * @memberof BuildIconsWithoutIncludesResponse
     */
    data: Array<BuildIcon>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BuildIconsWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildIconsWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BuildIconsWithoutIncludesResponse interface.
 */
export function instanceOfBuildIconsWithoutIncludesResponse(value: object): value is BuildIconsWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BuildIconsWithoutIncludesResponseFromJSON(json: any): BuildIconsWithoutIncludesResponse {
    return BuildIconsWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BuildIconsWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIconsWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BuildIconFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BuildIconsWithoutIncludesResponseToJSON(json: any): BuildIconsWithoutIncludesResponse {
    return BuildIconsWithoutIncludesResponseToJSONTyped(json, false);
}

export function BuildIconsWithoutIncludesResponseToJSONTyped(value?: BuildIconsWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BuildIconToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
