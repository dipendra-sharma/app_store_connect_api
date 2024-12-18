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
import type { AppClipDefaultExperienceLocalizationCreateRequestDataAttributes } from './AppClipDefaultExperienceLocalizationCreateRequestDataAttributes';
import {
    AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSON,
    AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSONTyped,
    AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSON,
    AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSONTyped,
} from './AppClipDefaultExperienceLocalizationCreateRequestDataAttributes';
import type { AppClipAppStoreReviewDetailCreateRequestDataRelationships } from './AppClipAppStoreReviewDetailCreateRequestDataRelationships';
import {
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSON,
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped,
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsToJSON,
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsToJSONTyped,
} from './AppClipAppStoreReviewDetailCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationCreateRequestData
 */
export interface AppClipDefaultExperienceLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestData
     */
    type: AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationCreateRequestDataAttributes}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestData
     */
    attributes: AppClipDefaultExperienceLocalizationCreateRequestDataAttributes;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailCreateRequestDataRelationships}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestData
     */
    relationships: AppClipAppStoreReviewDetailCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum = {
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations'
} as const;
export type AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum = typeof AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum[keyof typeof AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationCreateRequestData interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationCreateRequestData(value: object): value is AppClipDefaultExperienceLocalizationCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataFromJSON(json: any): AppClipDefaultExperienceLocalizationCreateRequestData {
    return AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataToJSON(json: any): AppClipDefaultExperienceLocalizationCreateRequestData {
    return AppClipDefaultExperienceLocalizationCreateRequestDataToJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataToJSONTyped(value?: AppClipDefaultExperienceLocalizationCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AppClipAppStoreReviewDetailCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

