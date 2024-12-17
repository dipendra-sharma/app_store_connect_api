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
import type { AppStoreReviewAttachmentCreateRequestDataRelationships } from './AppStoreReviewAttachmentCreateRequestDataRelationships';
import {
    AppStoreReviewAttachmentCreateRequestDataRelationshipsFromJSON,
    AppStoreReviewAttachmentCreateRequestDataRelationshipsFromJSONTyped,
    AppStoreReviewAttachmentCreateRequestDataRelationshipsToJSON,
    AppStoreReviewAttachmentCreateRequestDataRelationshipsToJSONTyped,
} from './AppStoreReviewAttachmentCreateRequestDataRelationships';
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSONTyped,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentCreateRequestData
 */
export interface AppStoreReviewAttachmentCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentCreateRequestData
     */
    type: AppStoreReviewAttachmentCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof AppStoreReviewAttachmentCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {AppStoreReviewAttachmentCreateRequestDataRelationships}
     * @memberof AppStoreReviewAttachmentCreateRequestData
     */
    relationships: AppStoreReviewAttachmentCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreReviewAttachmentCreateRequestDataTypeEnum = {
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewAttachmentCreateRequestDataTypeEnum = typeof AppStoreReviewAttachmentCreateRequestDataTypeEnum[keyof typeof AppStoreReviewAttachmentCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewAttachmentCreateRequestData interface.
 */
export function instanceOfAppStoreReviewAttachmentCreateRequestData(value: object): value is AppStoreReviewAttachmentCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function AppStoreReviewAttachmentCreateRequestDataFromJSON(json: any): AppStoreReviewAttachmentCreateRequestData {
    return AppStoreReviewAttachmentCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppStoreReviewAttachmentCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreReviewAttachmentCreateRequestDataToJSON(json: any): AppStoreReviewAttachmentCreateRequestData {
    return AppStoreReviewAttachmentCreateRequestDataToJSONTyped(json, false);
}

export function AppStoreReviewAttachmentCreateRequestDataToJSONTyped(value?: AppStoreReviewAttachmentCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AppStoreReviewAttachmentCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

