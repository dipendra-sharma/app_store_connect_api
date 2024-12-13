
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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentResponse
 */
export interface AppStoreReviewAttachmentResponse {
    /**
     * 
     * @type {AppStoreReviewAttachment}
     * @memberof AppStoreReviewAttachmentResponse
     */
    data: AppStoreReviewAttachment;
    /**
     * 
     * @type {Array<AppStoreReviewDetail>}
     * @memberof AppStoreReviewAttachmentResponse
     */
    included?: Array<AppStoreReviewDetail>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreReviewAttachmentResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentResponse interface.
 */
export function instanceOfAppStoreReviewAttachmentResponse(value: object): value is AppStoreReviewAttachmentResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppStoreReviewAttachmentResponseFromJSON(json: any): AppStoreReviewAttachmentResponse {
    return AppStoreReviewAttachmentResponseFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreReviewAttachmentFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppStoreReviewDetailFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreReviewAttachmentResponseToJSON(json: any): AppStoreReviewAttachmentResponse {
    return AppStoreReviewAttachmentResponseToJSONTyped(json, false);
}

export function AppStoreReviewAttachmentResponseToJSONTyped(value?: AppStoreReviewAttachmentResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreReviewAttachmentToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppStoreReviewDetailToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}
