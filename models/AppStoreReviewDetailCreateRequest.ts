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
import type { AppStoreReviewDetailCreateRequestData } from './AppStoreReviewDetailCreateRequestData';
import {
    AppStoreReviewDetailCreateRequestDataFromJSON,
    AppStoreReviewDetailCreateRequestDataFromJSONTyped,
    AppStoreReviewDetailCreateRequestDataToJSON,
    AppStoreReviewDetailCreateRequestDataToJSONTyped,
} from './AppStoreReviewDetailCreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreReviewDetailCreateRequest
 */
export interface AppStoreReviewDetailCreateRequest {
    /**
     * 
     * @type {AppStoreReviewDetailCreateRequestData}
     * @memberof AppStoreReviewDetailCreateRequest
     */
    data: AppStoreReviewDetailCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreReviewDetailCreateRequest interface.
 */
export function instanceOfAppStoreReviewDetailCreateRequest(value: object): value is AppStoreReviewDetailCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppStoreReviewDetailCreateRequestFromJSON(json: any): AppStoreReviewDetailCreateRequest {
    return AppStoreReviewDetailCreateRequestFromJSONTyped(json, false);
}

export function AppStoreReviewDetailCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetailCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreReviewDetailCreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreReviewDetailCreateRequestToJSON(json: any): AppStoreReviewDetailCreateRequest {
    return AppStoreReviewDetailCreateRequestToJSONTyped(json, false);
}

export function AppStoreReviewDetailCreateRequestToJSONTyped(value?: AppStoreReviewDetailCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreReviewDetailCreateRequestDataToJSON(value['data']),
    };
}

