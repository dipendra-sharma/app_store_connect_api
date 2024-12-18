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
import type { AppRelationshipsGameCenterDetailData } from './AppRelationshipsGameCenterDetailData';
import {
    AppRelationshipsGameCenterDetailDataFromJSON,
    AppRelationshipsGameCenterDetailDataFromJSONTyped,
    AppRelationshipsGameCenterDetailDataToJSON,
    AppRelationshipsGameCenterDetailDataToJSONTyped,
} from './AppRelationshipsGameCenterDetailData';

/**
 * 
 * @export
 * @interface GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail
 */
export interface GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail {
    /**
     * 
     * @type {AppRelationshipsGameCenterDetailData}
     * @memberof GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail
     */
    data: AppRelationshipsGameCenterDetailData;
}

/**
 * Check if a given object implements the GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail interface.
 */
export function instanceOfGameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail(value: object): value is GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSON(json: any): GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail {
    return GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppRelationshipsGameCenterDetailDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSON(json: any): GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail {
    return GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSONTyped(value?: GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppRelationshipsGameCenterDetailDataToJSON(value['data']),
    };
}

