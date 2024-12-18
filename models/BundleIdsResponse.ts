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
import type { BundleId } from './BundleId';
import {
    BundleIdFromJSON,
    BundleIdFromJSONTyped,
    BundleIdToJSON,
    BundleIdToJSONTyped,
} from './BundleId';
import type { BundleIdsResponseIncludedInner } from './BundleIdsResponseIncludedInner';
import {
    BundleIdsResponseIncludedInnerFromJSON,
    BundleIdsResponseIncludedInnerFromJSONTyped,
    BundleIdsResponseIncludedInnerToJSON,
    BundleIdsResponseIncludedInnerToJSONTyped,
} from './BundleIdsResponseIncludedInner';
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
 * @interface BundleIdsResponse
 */
export interface BundleIdsResponse {
    /**
     * 
     * @type {Array<BundleId>}
     * @memberof BundleIdsResponse
     */
    data: Array<BundleId>;
    /**
     * 
     * @type {Array<BundleIdsResponseIncludedInner>}
     * @memberof BundleIdsResponse
     */
    included?: Array<BundleIdsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BundleIdsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BundleIdsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BundleIdsResponse interface.
 */
export function instanceOfBundleIdsResponse(value: object): value is BundleIdsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BundleIdsResponseFromJSON(json: any): BundleIdsResponse {
    return BundleIdsResponseFromJSONTyped(json, false);
}

export function BundleIdsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BundleIdFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(BundleIdsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BundleIdsResponseToJSON(json: any): BundleIdsResponse {
    return BundleIdsResponseToJSONTyped(json, false);
}

export function BundleIdsResponseToJSONTyped(value?: BundleIdsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BundleIdToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(BundleIdsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

