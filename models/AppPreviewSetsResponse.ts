
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
import type { AppPreviewSetsResponseIncludedInner } from './AppPreviewSetsResponseIncludedInner';
import {
    AppPreviewSetsResponseIncludedInnerFromJSON,
    AppPreviewSetsResponseIncludedInnerFromJSONTyped,
    AppPreviewSetsResponseIncludedInnerToJSON,
    AppPreviewSetsResponseIncludedInnerToJSONTyped,
} from './AppPreviewSetsResponseIncludedInner';
import type { AppPreviewSet } from './AppPreviewSet';
import {
    AppPreviewSetFromJSON,
    AppPreviewSetFromJSONTyped,
    AppPreviewSetToJSON,
    AppPreviewSetToJSONTyped,
} from './AppPreviewSet';
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
 * @interface AppPreviewSetsResponse
 */
export interface AppPreviewSetsResponse {
    /**
     * 
     * @type {Array<AppPreviewSet>}
     * @memberof AppPreviewSetsResponse
     */
    data: Array<AppPreviewSet>;
    /**
     * 
     * @type {Array<AppPreviewSetsResponseIncludedInner>}
     * @memberof AppPreviewSetsResponse
     */
    included?: Array<AppPreviewSetsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppPreviewSetsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppPreviewSetsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppPreviewSetsResponse interface.
 */
export function instanceOfAppPreviewSetsResponse(value: object): value is AppPreviewSetsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppPreviewSetsResponseFromJSON(json: any): AppPreviewSetsResponse {
    return AppPreviewSetsResponseFromJSONTyped(json, false);
}

export function AppPreviewSetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppPreviewSetFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppPreviewSetsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppPreviewSetsResponseToJSON(json: any): AppPreviewSetsResponse {
    return AppPreviewSetsResponseToJSONTyped(json, false);
}

export function AppPreviewSetsResponseToJSONTyped(value?: AppPreviewSetsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppPreviewSetToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppPreviewSetsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

