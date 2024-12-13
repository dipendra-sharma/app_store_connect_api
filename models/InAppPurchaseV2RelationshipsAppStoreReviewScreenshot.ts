
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
import type { InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData } from './InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData';
import {
    InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataFromJSON,
    InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataFromJSONTyped,
    InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataToJSON,
    InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataToJSONTyped,
} from './InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface InAppPurchaseV2RelationshipsAppStoreReviewScreenshot
 */
export interface InAppPurchaseV2RelationshipsAppStoreReviewScreenshot {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof InAppPurchaseV2RelationshipsAppStoreReviewScreenshot
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData}
     * @memberof InAppPurchaseV2RelationshipsAppStoreReviewScreenshot
     */
    data?: InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData;
}

/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsAppStoreReviewScreenshot interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsAppStoreReviewScreenshot(value: object): value is InAppPurchaseV2RelationshipsAppStoreReviewScreenshot {
    return true;
}

export function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSON(json: any): InAppPurchaseV2RelationshipsAppStoreReviewScreenshot {
    return InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsAppStoreReviewScreenshot {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataFromJSON(json['data']),
    };
}

export function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotToJSON(json: any): InAppPurchaseV2RelationshipsAppStoreReviewScreenshot {
    return InAppPurchaseV2RelationshipsAppStoreReviewScreenshotToJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotToJSONTyped(value?: InAppPurchaseV2RelationshipsAppStoreReviewScreenshot | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataToJSON(value['data']),
    };
}

