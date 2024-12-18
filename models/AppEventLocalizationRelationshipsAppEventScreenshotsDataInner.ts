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
 * @interface AppEventLocalizationRelationshipsAppEventScreenshotsDataInner
 */
export interface AppEventLocalizationRelationshipsAppEventScreenshotsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventScreenshotsDataInner
     */
    type: AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventScreenshotsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum = {
    AppEventScreenshots: 'appEventScreenshots'
} as const;
export type AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum = typeof AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum[keyof typeof AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEventScreenshotsDataInner interface.
 */
export function instanceOfAppEventLocalizationRelationshipsAppEventScreenshotsDataInner(value: object): value is AppEventLocalizationRelationshipsAppEventScreenshotsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerFromJSON(json: any): AppEventLocalizationRelationshipsAppEventScreenshotsDataInner {
    return AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerFromJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationRelationshipsAppEventScreenshotsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerToJSON(json: any): AppEventLocalizationRelationshipsAppEventScreenshotsDataInner {
    return AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerToJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerToJSONTyped(value?: AppEventLocalizationRelationshipsAppEventScreenshotsDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

