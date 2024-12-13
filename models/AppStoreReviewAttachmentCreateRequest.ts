
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
import type { AppStoreReviewAttachmentCreateRequestData } from './AppStoreReviewAttachmentCreateRequestData';
import {
    AppStoreReviewAttachmentCreateRequestDataFromJSON,
    AppStoreReviewAttachmentCreateRequestDataFromJSONTyped,
    AppStoreReviewAttachmentCreateRequestDataToJSON,
    AppStoreReviewAttachmentCreateRequestDataToJSONTyped,
} from './AppStoreReviewAttachmentCreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentCreateRequest
 */
export interface AppStoreReviewAttachmentCreateRequest {
    /**
     * 
     * @type {AppStoreReviewAttachmentCreateRequestData}
     * @memberof AppStoreReviewAttachmentCreateRequest
     */
    data: AppStoreReviewAttachmentCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentCreateRequest interface.
 */
export function instanceOfAppStoreReviewAttachmentCreateRequest(value: object): value is AppStoreReviewAttachmentCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppStoreReviewAttachmentCreateRequestFromJSON(json: any): AppStoreReviewAttachmentCreateRequest {
    return AppStoreReviewAttachmentCreateRequestFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreReviewAttachmentCreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreReviewAttachmentCreateRequestToJSON(json: any): AppStoreReviewAttachmentCreateRequest {
    return AppStoreReviewAttachmentCreateRequestToJSONTyped(json, false);
}

export function AppStoreReviewAttachmentCreateRequestToJSONTyped(value?: AppStoreReviewAttachmentCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreReviewAttachmentCreateRequestDataToJSON(value['data']),
    };
}

