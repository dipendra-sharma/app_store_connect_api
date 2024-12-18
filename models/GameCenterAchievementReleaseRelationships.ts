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
import type { GameCenterAchievementReleaseRelationshipsGameCenterAchievement } from './GameCenterAchievementReleaseRelationshipsGameCenterAchievement';
import {
    GameCenterAchievementReleaseRelationshipsGameCenterAchievementFromJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterAchievementFromJSONTyped,
    GameCenterAchievementReleaseRelationshipsGameCenterAchievementToJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterAchievementToJSONTyped,
} from './GameCenterAchievementReleaseRelationshipsGameCenterAchievement';
import type { GameCenterAchievementReleaseRelationshipsGameCenterDetail } from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import {
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSONTyped,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSONTyped,
} from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';

/**
 * 
 * @export
 * @interface GameCenterAchievementReleaseRelationships
 */
export interface GameCenterAchievementReleaseRelationships {
    /**
     * 
     * @type {GameCenterAchievementReleaseRelationshipsGameCenterDetail}
     * @memberof GameCenterAchievementReleaseRelationships
     */
    gameCenterDetail?: GameCenterAchievementReleaseRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterAchievementReleaseRelationshipsGameCenterAchievement}
     * @memberof GameCenterAchievementReleaseRelationships
     */
    gameCenterAchievement?: GameCenterAchievementReleaseRelationshipsGameCenterAchievement;
}

/**
 * Check if a given object implements the GameCenterAchievementReleaseRelationships interface.
 */
export function instanceOfGameCenterAchievementReleaseRelationships(value: object): value is GameCenterAchievementReleaseRelationships {
    return true;
}

export function GameCenterAchievementReleaseRelationshipsFromJSON(json: any): GameCenterAchievementReleaseRelationships {
    return GameCenterAchievementReleaseRelationshipsFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterDetail': json['gameCenterDetail'] == null ? undefined : GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterAchievement': json['gameCenterAchievement'] == null ? undefined : GameCenterAchievementReleaseRelationshipsGameCenterAchievementFromJSON(json['gameCenterAchievement']),
    };
}

export function GameCenterAchievementReleaseRelationshipsToJSON(json: any): GameCenterAchievementReleaseRelationships {
    return GameCenterAchievementReleaseRelationshipsToJSONTyped(json, false);
}

export function GameCenterAchievementReleaseRelationshipsToJSONTyped(value?: GameCenterAchievementReleaseRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON(value['gameCenterDetail']),
        'gameCenterAchievement': GameCenterAchievementReleaseRelationshipsGameCenterAchievementToJSON(value['gameCenterAchievement']),
    };
}

