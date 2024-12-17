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
import type { AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData } from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData';
import {
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSON,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSONTyped,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataToJSON,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataToJSONTyped,
} from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail
 */
export interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail {
    /**
     * 
     * @type {AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData}
     * @memberof AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail
     */
    data?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail interface.
 */
export function instanceOfAppStoreReviewAttachmentRelationshipsAppStoreReviewDetail(value: object): value is AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail {
    return true;
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSON(json: any): AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail {
    return AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSON(json['data']),
    };
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSON(json: any): AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail {
    return AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSONTyped(json, false);
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSONTyped(value?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataToJSON(value['data']),
    };
}

