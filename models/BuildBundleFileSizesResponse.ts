
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
import type { BuildBundleFileSize } from './BuildBundleFileSize';
import {
    BuildBundleFileSizeFromJSON,
    BuildBundleFileSizeFromJSONTyped,
    BuildBundleFileSizeToJSON,
    BuildBundleFileSizeToJSONTyped,
} from './BuildBundleFileSize';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
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
 * @interface BuildBundleFileSizesResponse
 */
export interface BuildBundleFileSizesResponse {
    /**
     * 
     * @type {Array<BuildBundleFileSize>}
     * @memberof BuildBundleFileSizesResponse
     */
    data: Array<BuildBundleFileSize>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BuildBundleFileSizesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildBundleFileSizesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BuildBundleFileSizesResponse interface.
 */
export function instanceOfBuildBundleFileSizesResponse(value: object): value is BuildBundleFileSizesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BuildBundleFileSizesResponseFromJSON(json: any): BuildBundleFileSizesResponse {
    return BuildBundleFileSizesResponseFromJSONTyped(json, false);
}

export function BuildBundleFileSizesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleFileSizesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BuildBundleFileSizeFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BuildBundleFileSizesResponseToJSON(json: any): BuildBundleFileSizesResponse {
    return BuildBundleFileSizesResponseToJSONTyped(json, false);
}

export function BuildBundleFileSizesResponseToJSONTyped(value?: BuildBundleFileSizesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BuildBundleFileSizeToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

