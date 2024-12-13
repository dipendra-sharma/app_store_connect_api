
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
import type { AppStoreReviewDetail } from './AppStoreReviewDetail';
import {
    AppStoreReviewDetailFromJSON,
    AppStoreReviewDetailFromJSONTyped,
    AppStoreReviewDetailToJSON,
    AppStoreReviewDetailToJSONTyped,
} from './AppStoreReviewDetail';
import type { AppStoreReviewDetailResponseIncludedInner } from './AppStoreReviewDetailResponseIncludedInner';
import {
    AppStoreReviewDetailResponseIncludedInnerFromJSON,
    AppStoreReviewDetailResponseIncludedInnerFromJSONTyped,
    AppStoreReviewDetailResponseIncludedInnerToJSON,
    AppStoreReviewDetailResponseIncludedInnerToJSONTyped,
} from './AppStoreReviewDetailResponseIncludedInner';
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
 * @interface AppStoreReviewDetailResponse
 */
export interface AppStoreReviewDetailResponse {
    /**
     * 
     * @type {AppStoreReviewDetail}
     * @memberof AppStoreReviewDetailResponse
     */
    data: AppStoreReviewDetail;
    /**
     * 
     * @type {Array<AppStoreReviewDetailResponseIncludedInner>}
     * @memberof AppStoreReviewDetailResponse
     */
    included?: Array<AppStoreReviewDetailResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreReviewDetailResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreReviewDetailResponse interface.
 */
export function instanceOfAppStoreReviewDetailResponse(value: object): value is AppStoreReviewDetailResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppStoreReviewDetailResponseFromJSON(json: any): AppStoreReviewDetailResponse {
    return AppStoreReviewDetailResponseFromJSONTyped(json, false);
}

export function AppStoreReviewDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetailResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreReviewDetailFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppStoreReviewDetailResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreReviewDetailResponseToJSON(json: any): AppStoreReviewDetailResponse {
    return AppStoreReviewDetailResponseToJSONTyped(json, false);
}

export function AppStoreReviewDetailResponseToJSONTyped(value?: AppStoreReviewDetailResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreReviewDetailToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppStoreReviewDetailResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}
