
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
 * @interface GameCenterAchievementReleaseRelationshipsGameCenterDetail
 */
export interface GameCenterAchievementReleaseRelationshipsGameCenterDetail {
    /**
     * 
     * @type {AppRelationshipsGameCenterDetailData}
     * @memberof GameCenterAchievementReleaseRelationshipsGameCenterDetail
     */
    data?: AppRelationshipsGameCenterDetailData;
}

/**
 * Check if a given object implements the GameCenterAchievementReleaseRelationshipsGameCenterDetail interface.
 */
export function instanceOfGameCenterAchievementReleaseRelationshipsGameCenterDetail(value: object): value is GameCenterAchievementReleaseRelationshipsGameCenterDetail {
    return true;
}

export function GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON(json: any): GameCenterAchievementReleaseRelationshipsGameCenterDetail {
    return GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseRelationshipsGameCenterDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppRelationshipsGameCenterDetailDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON(json: any): GameCenterAchievementReleaseRelationshipsGameCenterDetail {
    return GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSONTyped(json, false);
}

export function GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSONTyped(value?: GameCenterAchievementReleaseRelationshipsGameCenterDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppRelationshipsGameCenterDetailDataToJSON(value['data']),
    };
}

