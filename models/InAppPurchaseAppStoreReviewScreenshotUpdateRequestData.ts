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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSONTyped,
} from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
 */
export interface InAppPurchaseAppStoreReviewScreenshotUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
     */
    type: InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum = {
    InAppPurchaseAppStoreReviewScreenshots: 'inAppPurchaseAppStoreReviewScreenshots'
} as const;
export type InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum = typeof InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum[keyof typeof InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotUpdateRequestData interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequestData(value: object): value is InAppPurchaseAppStoreReviewScreenshotUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotUpdateRequestData {
    return InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSON(json: any): InAppPurchaseAppStoreReviewScreenshotUpdateRequestData {
    return InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSONTyped(value?: InAppPurchaseAppStoreReviewScreenshotUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

