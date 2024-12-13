
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
 * @interface SubscriptionAppStoreReviewScreenshotUpdateRequestData
 */
export interface SubscriptionAppStoreReviewScreenshotUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAppStoreReviewScreenshotUpdateRequestData
     */
    type: SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAppStoreReviewScreenshotUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof SubscriptionAppStoreReviewScreenshotUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum = {
    SubscriptionAppStoreReviewScreenshots: 'subscriptionAppStoreReviewScreenshots'
} as const;
export type SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum = typeof SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum[keyof typeof SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionAppStoreReviewScreenshotUpdateRequestData interface.
 */
export function instanceOfSubscriptionAppStoreReviewScreenshotUpdateRequestData(value: object): value is SubscriptionAppStoreReviewScreenshotUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionAppStoreReviewScreenshotUpdateRequestDataFromJSON(json: any): SubscriptionAppStoreReviewScreenshotUpdateRequestData {
    return SubscriptionAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAppStoreReviewScreenshotUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function SubscriptionAppStoreReviewScreenshotUpdateRequestDataToJSON(json: any): SubscriptionAppStoreReviewScreenshotUpdateRequestData {
    return SubscriptionAppStoreReviewScreenshotUpdateRequestDataToJSONTyped(json, false);
}

export function SubscriptionAppStoreReviewScreenshotUpdateRequestDataToJSONTyped(value?: SubscriptionAppStoreReviewScreenshotUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}
