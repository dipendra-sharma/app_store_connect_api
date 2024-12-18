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
 * @interface AppStoreVersionRelationshipsGameCenterAppVersionData
 */
export interface AppStoreVersionRelationshipsGameCenterAppVersionData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionRelationshipsGameCenterAppVersionData
     */
    type: AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionRelationshipsGameCenterAppVersionData
     */
    id: string;
}


/**
 * @export
 */
export const AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum = {
    GameCenterAppVersions: 'gameCenterAppVersions'
} as const;
export type AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum = typeof AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum[keyof typeof AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionRelationshipsGameCenterAppVersionData interface.
 */
export function instanceOfAppStoreVersionRelationshipsGameCenterAppVersionData(value: object): value is AppStoreVersionRelationshipsGameCenterAppVersionData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON(json: any): AppStoreVersionRelationshipsGameCenterAppVersionData {
    return AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsGameCenterAppVersionData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON(json: any): AppStoreVersionRelationshipsGameCenterAppVersionData {
    return AppStoreVersionRelationshipsGameCenterAppVersionDataToJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsGameCenterAppVersionDataToJSONTyped(value?: AppStoreVersionRelationshipsGameCenterAppVersionData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

