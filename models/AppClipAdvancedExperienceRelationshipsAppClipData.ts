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
/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceRelationshipsAppClipData
 */
export interface AppClipAdvancedExperienceRelationshipsAppClipData {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsAppClipData
     */
    type: AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsAppClipData
     */
    id: string;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum = {
    AppClips: 'appClips'
} as const;
export type AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum = typeof AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum[keyof typeof AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationshipsAppClipData interface.
 */
export function instanceOfAppClipAdvancedExperienceRelationshipsAppClipData(value: object): value is AppClipAdvancedExperienceRelationshipsAppClipData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON(json: any): AppClipAdvancedExperienceRelationshipsAppClipData {
    return AppClipAdvancedExperienceRelationshipsAppClipDataFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsAppClipDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceRelationshipsAppClipData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppClipAdvancedExperienceRelationshipsAppClipDataToJSON(json: any): AppClipAdvancedExperienceRelationshipsAppClipData {
    return AppClipAdvancedExperienceRelationshipsAppClipDataToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsAppClipDataToJSONTyped(value?: AppClipAdvancedExperienceRelationshipsAppClipData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

