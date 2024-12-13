
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
import type { AppPreviewSetRelationshipsAppPreviewsDataInner } from './AppPreviewSetRelationshipsAppPreviewsDataInner';
import {
    AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSON,
    AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSONTyped,
    AppPreviewSetRelationshipsAppPreviewsDataInnerToJSON,
    AppPreviewSetRelationshipsAppPreviewsDataInnerToJSONTyped,
} from './AppPreviewSetRelationshipsAppPreviewsDataInner';
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
 * @interface AppPreviewSetAppPreviewsLinkagesResponse
 */
export interface AppPreviewSetAppPreviewsLinkagesResponse {
    /**
     * 
     * @type {Array<AppPreviewSetRelationshipsAppPreviewsDataInner>}
     * @memberof AppPreviewSetAppPreviewsLinkagesResponse
     */
    data: Array<AppPreviewSetRelationshipsAppPreviewsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppPreviewSetAppPreviewsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppPreviewSetAppPreviewsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppPreviewSetAppPreviewsLinkagesResponse interface.
 */
export function instanceOfAppPreviewSetAppPreviewsLinkagesResponse(value: object): value is AppPreviewSetAppPreviewsLinkagesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppPreviewSetAppPreviewsLinkagesResponseFromJSON(json: any): AppPreviewSetAppPreviewsLinkagesResponse {
    return AppPreviewSetAppPreviewsLinkagesResponseFromJSONTyped(json, false);
}

export function AppPreviewSetAppPreviewsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetAppPreviewsLinkagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppPreviewSetAppPreviewsLinkagesResponseToJSON(json: any): AppPreviewSetAppPreviewsLinkagesResponse {
    return AppPreviewSetAppPreviewsLinkagesResponseToJSONTyped(json, false);
}

export function AppPreviewSetAppPreviewsLinkagesResponseToJSONTyped(value?: AppPreviewSetAppPreviewsLinkagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppPreviewSetRelationshipsAppPreviewsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

