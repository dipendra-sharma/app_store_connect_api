
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
import type { AppStoreReviewAttachment } from './AppStoreReviewAttachment';
import {
    AppStoreReviewAttachmentFromJSON,
    AppStoreReviewAttachmentFromJSONTyped,
    AppStoreReviewAttachmentToJSON,
    AppStoreReviewAttachmentToJSONTyped,
} from './AppStoreReviewAttachment';
import type { AppStoreReviewDetail } from './AppStoreReviewDetail';
import {
    AppStoreReviewDetailFromJSON,
    AppStoreReviewDetailFromJSONTyped,
    AppStoreReviewDetailToJSON,
    AppStoreReviewDetailToJSONTyped,
} from './AppStoreReviewDetail';
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
 * @interface AppStoreReviewAttachmentsResponse
 */
export interface AppStoreReviewAttachmentsResponse {
    /**
     * 
     * @type {Array<AppStoreReviewAttachment>}
     * @memberof AppStoreReviewAttachmentsResponse
     */
    data: Array<AppStoreReviewAttachment>;
    /**
     * 
     * @type {Array<AppStoreReviewDetail>}
     * @memberof AppStoreReviewAttachmentsResponse
     */
    included?: Array<AppStoreReviewDetail>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppStoreReviewAttachmentsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppStoreReviewAttachmentsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentsResponse interface.
 */
export function instanceOfAppStoreReviewAttachmentsResponse(value: object): value is AppStoreReviewAttachmentsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppStoreReviewAttachmentsResponseFromJSON(json: any): AppStoreReviewAttachmentsResponse {
    return AppStoreReviewAttachmentsResponseFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppStoreReviewAttachmentFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppStoreReviewDetailFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppStoreReviewAttachmentsResponseToJSON(json: any): AppStoreReviewAttachmentsResponse {
    return AppStoreReviewAttachmentsResponseToJSONTyped(json, false);
}

export function AppStoreReviewAttachmentsResponseToJSONTyped(value?: AppStoreReviewAttachmentsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppStoreReviewAttachmentToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppStoreReviewDetailToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
