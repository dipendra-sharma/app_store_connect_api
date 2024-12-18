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
import type { AppClipAdvancedExperienceRelationshipsHeaderImageData } from './AppClipAdvancedExperienceRelationshipsHeaderImageData';
import {
    AppClipAdvancedExperienceRelationshipsHeaderImageDataFromJSON,
    AppClipAdvancedExperienceRelationshipsHeaderImageDataFromJSONTyped,
    AppClipAdvancedExperienceRelationshipsHeaderImageDataToJSON,
    AppClipAdvancedExperienceRelationshipsHeaderImageDataToJSONTyped,
} from './AppClipAdvancedExperienceRelationshipsHeaderImageData';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage
 */
export interface AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage {
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsHeaderImageData}
     * @memberof AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage
     */
    data: AppClipAdvancedExperienceRelationshipsHeaderImageData;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage interface.
 */
export function instanceOfAppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage(value: object): value is AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageFromJSON(json: any): AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage {
    return AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppClipAdvancedExperienceRelationshipsHeaderImageDataFromJSON(json['data']),
    };
}

export function AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageToJSON(json: any): AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage {
    return AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImageToJSONTyped(value?: AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipAdvancedExperienceRelationshipsHeaderImageDataToJSON(value['data']),
    };
}

