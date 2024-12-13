
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
 * @interface AppEventLocalizationRelationshipsAppEventVideoClipsDataInner
 */
export interface AppEventLocalizationRelationshipsAppEventVideoClipsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventVideoClipsDataInner
     */
    type: AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventVideoClipsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum = {
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum = typeof AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum[keyof typeof AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEventVideoClipsDataInner interface.
 */
export function instanceOfAppEventLocalizationRelationshipsAppEventVideoClipsDataInner(value: object): value is AppEventLocalizationRelationshipsAppEventVideoClipsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSON(json: any): AppEventLocalizationRelationshipsAppEventVideoClipsDataInner {
    return AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationRelationshipsAppEventVideoClipsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSON(json: any): AppEventLocalizationRelationshipsAppEventVideoClipsDataInner {
    return AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSONTyped(value?: AppEventLocalizationRelationshipsAppEventVideoClipsDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
