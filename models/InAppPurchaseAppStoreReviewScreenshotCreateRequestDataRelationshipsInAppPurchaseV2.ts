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
import type { AppRelationshipsInAppPurchasesDataInner } from './AppRelationshipsInAppPurchasesDataInner';
import {
    AppRelationshipsInAppPurchasesDataInnerFromJSON,
    AppRelationshipsInAppPurchasesDataInnerFromJSONTyped,
    AppRelationshipsInAppPurchasesDataInnerToJSON,
    AppRelationshipsInAppPurchasesDataInnerToJSONTyped,
} from './AppRelationshipsInAppPurchasesDataInner';

/**
 * 
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2
 */
export interface InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 {
    /**
     * 
     * @type {AppRelationshipsInAppPurchasesDataInner}
     * @memberof InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2
     */
    data: AppRelationshipsInAppPurchasesDataInner;
}

/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2(value: object): value is InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 {
    return InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppRelationshipsInAppPurchasesDataInnerFromJSON(json['data']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2ToJSON(json: any): InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 {
    return InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2ToJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2ToJSONTyped(value?: InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppRelationshipsInAppPurchasesDataInnerToJSON(value['data']),
    };
}

