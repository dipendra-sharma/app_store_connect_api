
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
import type { InAppPurchaseAppStoreReviewScreenshotUpdateRequestData } from './InAppPurchaseAppStoreReviewScreenshotUpdateRequestData';
import {
    InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSON,
    InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSON,
    InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSONTyped,
} from './InAppPurchaseAppStoreReviewScreenshotUpdateRequestData';

/**
 * 
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotUpdateRequest
 */
export interface InAppPurchaseAppStoreReviewScreenshotUpdateRequest {
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotUpdateRequestData}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequest
     */
    data: InAppPurchaseAppStoreReviewScreenshotUpdateRequestData;
}

/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotUpdateRequest interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequest(value: object): value is InAppPurchaseAppStoreReviewScreenshotUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotUpdateRequest {
    return InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSON(json['data']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSON(json: any): InAppPurchaseAppStoreReviewScreenshotUpdateRequest {
    return InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSONTyped(value?: InAppPurchaseAppStoreReviewScreenshotUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSON(value['data']),
    };
}
