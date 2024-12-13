
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
 * @interface AppStoreReviewAttachmentUpdateRequestData
 */
export interface AppStoreReviewAttachmentUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentUpdateRequestData
     */
    type: AppStoreReviewAttachmentUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof AppStoreReviewAttachmentUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppStoreReviewAttachmentUpdateRequestDataTypeEnum = {
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewAttachmentUpdateRequestDataTypeEnum = typeof AppStoreReviewAttachmentUpdateRequestDataTypeEnum[keyof typeof AppStoreReviewAttachmentUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewAttachmentUpdateRequestData interface.
 */
export function instanceOfAppStoreReviewAttachmentUpdateRequestData(value: object): value is AppStoreReviewAttachmentUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreReviewAttachmentUpdateRequestDataFromJSON(json: any): AppStoreReviewAttachmentUpdateRequestData {
    return AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppStoreReviewAttachmentUpdateRequestDataToJSON(json: any): AppStoreReviewAttachmentUpdateRequestData {
    return AppStoreReviewAttachmentUpdateRequestDataToJSONTyped(json, false);
}

export function AppStoreReviewAttachmentUpdateRequestDataToJSONTyped(value?: AppStoreReviewAttachmentUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}
