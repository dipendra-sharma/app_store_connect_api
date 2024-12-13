
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
 * @interface InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2
 */
export interface InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 {
    /**
     * 
     * @type {AppRelationshipsInAppPurchasesDataInner}
     * @memberof InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2
     */
    data?: AppRelationshipsInAppPurchasesDataInner;
}

/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2(value: object): value is InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 {
    return true;
}

export function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 {
    return InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppRelationshipsInAppPurchasesDataInnerFromJSON(json['data']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON(json: any): InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 {
    return InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSONTyped(value?: InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppRelationshipsInAppPurchasesDataInnerToJSON(value['data']),
    };
}
