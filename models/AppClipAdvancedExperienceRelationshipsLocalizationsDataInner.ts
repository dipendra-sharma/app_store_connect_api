
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
 * @interface AppClipAdvancedExperienceRelationshipsLocalizationsDataInner
 */
export interface AppClipAdvancedExperienceRelationshipsLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsLocalizationsDataInner
     */
    type: AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum = {
    AppClipAdvancedExperienceLocalizations: 'appClipAdvancedExperienceLocalizations'
} as const;
export type AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum = typeof AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum[keyof typeof AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationshipsLocalizationsDataInner interface.
 */
export function instanceOfAppClipAdvancedExperienceRelationshipsLocalizationsDataInner(value: object): value is AppClipAdvancedExperienceRelationshipsLocalizationsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSON(json: any): AppClipAdvancedExperienceRelationshipsLocalizationsDataInner {
    return AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceRelationshipsLocalizationsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerToJSON(json: any): AppClipAdvancedExperienceRelationshipsLocalizationsDataInner {
    return AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerToJSONTyped(value?: AppClipAdvancedExperienceRelationshipsLocalizationsDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
