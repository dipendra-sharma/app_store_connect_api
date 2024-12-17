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
import type { GameCenterAchievementRelationshipsGameCenterGroupData } from './GameCenterAchievementRelationshipsGameCenterGroupData';
import {
    GameCenterAchievementRelationshipsGameCenterGroupDataFromJSON,
    GameCenterAchievementRelationshipsGameCenterGroupDataFromJSONTyped,
    GameCenterAchievementRelationshipsGameCenterGroupDataToJSON,
    GameCenterAchievementRelationshipsGameCenterGroupDataToJSONTyped,
} from './GameCenterAchievementRelationshipsGameCenterGroupData';

/**
 * 
 * @export
 * @interface GameCenterAchievementRelationshipsGameCenterGroup
 */
export interface GameCenterAchievementRelationshipsGameCenterGroup {
    /**
     * 
     * @type {GameCenterAchievementRelationshipsGameCenterGroupData}
     * @memberof GameCenterAchievementRelationshipsGameCenterGroup
     */
    data?: GameCenterAchievementRelationshipsGameCenterGroupData;
}

/**
 * Check if a given object implements the GameCenterAchievementRelationshipsGameCenterGroup interface.
 */
export function instanceOfGameCenterAchievementRelationshipsGameCenterGroup(value: object): value is GameCenterAchievementRelationshipsGameCenterGroup {
    return true;
}

export function GameCenterAchievementRelationshipsGameCenterGroupFromJSON(json: any): GameCenterAchievementRelationshipsGameCenterGroup {
    return GameCenterAchievementRelationshipsGameCenterGroupFromJSONTyped(json, false);
}

export function GameCenterAchievementRelationshipsGameCenterGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementRelationshipsGameCenterGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : GameCenterAchievementRelationshipsGameCenterGroupDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementRelationshipsGameCenterGroupToJSON(json: any): GameCenterAchievementRelationshipsGameCenterGroup {
    return GameCenterAchievementRelationshipsGameCenterGroupToJSONTyped(json, false);
}

export function GameCenterAchievementRelationshipsGameCenterGroupToJSONTyped(value?: GameCenterAchievementRelationshipsGameCenterGroup | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterAchievementRelationshipsGameCenterGroupDataToJSON(value['data']),
    };
}

