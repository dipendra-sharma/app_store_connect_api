
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
import type { AppScreenshotSetRelationshipsAppScreenshotsDataInner } from './AppScreenshotSetRelationshipsAppScreenshotsDataInner';
import {
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSONTyped,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSONTyped,
} from './AppScreenshotSetRelationshipsAppScreenshotsDataInner';
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
 * @interface AppScreenshotSetAppScreenshotsLinkagesResponse
 */
export interface AppScreenshotSetAppScreenshotsLinkagesResponse {
    /**
     * 
     * @type {Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>}
     * @memberof AppScreenshotSetAppScreenshotsLinkagesResponse
     */
    data: Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppScreenshotSetAppScreenshotsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppScreenshotSetAppScreenshotsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppScreenshotSetAppScreenshotsLinkagesResponse interface.
 */
export function instanceOfAppScreenshotSetAppScreenshotsLinkagesResponse(value: object): value is AppScreenshotSetAppScreenshotsLinkagesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppScreenshotSetAppScreenshotsLinkagesResponseFromJSON(json: any): AppScreenshotSetAppScreenshotsLinkagesResponse {
    return AppScreenshotSetAppScreenshotsLinkagesResponseFromJSONTyped(json, false);
}

export function AppScreenshotSetAppScreenshotsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetAppScreenshotsLinkagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppScreenshotSetAppScreenshotsLinkagesResponseToJSON(json: any): AppScreenshotSetAppScreenshotsLinkagesResponse {
    return AppScreenshotSetAppScreenshotsLinkagesResponseToJSONTyped(json, false);
}

export function AppScreenshotSetAppScreenshotsLinkagesResponseToJSONTyped(value?: AppScreenshotSetAppScreenshotsLinkagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

