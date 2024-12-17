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
 * @interface AppRelationshipsGameCenterEnabledVersionsDataInner
 */
export interface AppRelationshipsGameCenterEnabledVersionsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsGameCenterEnabledVersionsDataInner
     */
    type: AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsGameCenterEnabledVersionsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum = {
    GameCenterEnabledVersions: 'gameCenterEnabledVersions'
} as const;
export type AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum = typeof AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum[keyof typeof AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsGameCenterEnabledVersionsDataInner interface.
 */
export function instanceOfAppRelationshipsGameCenterEnabledVersionsDataInner(value: object): value is AppRelationshipsGameCenterEnabledVersionsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSON(json: any): AppRelationshipsGameCenterEnabledVersionsDataInner {
    return AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSONTyped(json, false);
}

export function AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsGameCenterEnabledVersionsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsGameCenterEnabledVersionsDataInnerToJSON(json: any): AppRelationshipsGameCenterEnabledVersionsDataInner {
    return AppRelationshipsGameCenterEnabledVersionsDataInnerToJSONTyped(json, false);
}

export function AppRelationshipsGameCenterEnabledVersionsDataInnerToJSONTyped(value?: AppRelationshipsGameCenterEnabledVersionsDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

