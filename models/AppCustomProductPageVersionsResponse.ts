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
import type { AppCustomProductPageVersion } from './AppCustomProductPageVersion';
import {
    AppCustomProductPageVersionFromJSON,
    AppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageVersionToJSON,
    AppCustomProductPageVersionToJSONTyped,
} from './AppCustomProductPageVersion';
import type { AppCustomProductPageVersionsResponseIncludedInner } from './AppCustomProductPageVersionsResponseIncludedInner';
import {
    AppCustomProductPageVersionsResponseIncludedInnerFromJSON,
    AppCustomProductPageVersionsResponseIncludedInnerFromJSONTyped,
    AppCustomProductPageVersionsResponseIncludedInnerToJSON,
    AppCustomProductPageVersionsResponseIncludedInnerToJSONTyped,
} from './AppCustomProductPageVersionsResponseIncludedInner';
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
 * @interface AppCustomProductPageVersionsResponse
 */
export interface AppCustomProductPageVersionsResponse {
    /**
     * 
     * @type {Array<AppCustomProductPageVersion>}
     * @memberof AppCustomProductPageVersionsResponse
     */
    data: Array<AppCustomProductPageVersion>;
    /**
     * 
     * @type {Array<AppCustomProductPageVersionsResponseIncludedInner>}
     * @memberof AppCustomProductPageVersionsResponse
     */
    included?: Array<AppCustomProductPageVersionsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppCustomProductPageVersionsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCustomProductPageVersionsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionsResponse interface.
 */
export function instanceOfAppCustomProductPageVersionsResponse(value: object): value is AppCustomProductPageVersionsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppCustomProductPageVersionsResponseFromJSON(json: any): AppCustomProductPageVersionsResponse {
    return AppCustomProductPageVersionsResponseFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppCustomProductPageVersionFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPageVersionsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppCustomProductPageVersionsResponseToJSON(json: any): AppCustomProductPageVersionsResponse {
    return AppCustomProductPageVersionsResponseToJSONTyped(json, false);
}

export function AppCustomProductPageVersionsResponseToJSONTyped(value?: AppCustomProductPageVersionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppCustomProductPageVersionToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppCustomProductPageVersionsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

