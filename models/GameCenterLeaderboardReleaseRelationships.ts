
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
import type { GameCenterAchievementReleaseRelationshipsGameCenterDetail } from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import {
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSONTyped,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSONTyped,
} from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import type { GameCenterDetailRelationshipsDefaultLeaderboard } from './GameCenterDetailRelationshipsDefaultLeaderboard';
import {
    GameCenterDetailRelationshipsDefaultLeaderboardFromJSON,
    GameCenterDetailRelationshipsDefaultLeaderboardFromJSONTyped,
    GameCenterDetailRelationshipsDefaultLeaderboardToJSON,
    GameCenterDetailRelationshipsDefaultLeaderboardToJSONTyped,
} from './GameCenterDetailRelationshipsDefaultLeaderboard';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardReleaseRelationships
 */
export interface GameCenterLeaderboardReleaseRelationships {
    /**
     * 
     * @type {GameCenterAchievementReleaseRelationshipsGameCenterDetail}
     * @memberof GameCenterLeaderboardReleaseRelationships
     */
    gameCenterDetail?: GameCenterAchievementReleaseRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterDetailRelationshipsDefaultLeaderboard}
     * @memberof GameCenterLeaderboardReleaseRelationships
     */
    gameCenterLeaderboard?: GameCenterDetailRelationshipsDefaultLeaderboard;
}

/**
 * Check if a given object implements the GameCenterLeaderboardReleaseRelationships interface.
 */
export function instanceOfGameCenterLeaderboardReleaseRelationships(value: object): value is GameCenterLeaderboardReleaseRelationships {
    return true;
}

export function GameCenterLeaderboardReleaseRelationshipsFromJSON(json: any): GameCenterLeaderboardReleaseRelationships {
    return GameCenterLeaderboardReleaseRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardReleaseRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardReleaseRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterDetail': json['gameCenterDetail'] == null ? undefined : GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterLeaderboard': json['gameCenterLeaderboard'] == null ? undefined : GameCenterDetailRelationshipsDefaultLeaderboardFromJSON(json['gameCenterLeaderboard']),
    };
}

export function GameCenterLeaderboardReleaseRelationshipsToJSON(json: any): GameCenterLeaderboardReleaseRelationships {
    return GameCenterLeaderboardReleaseRelationshipsToJSONTyped(json, false);
}

export function GameCenterLeaderboardReleaseRelationshipsToJSONTyped(value?: GameCenterLeaderboardReleaseRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON(value['gameCenterDetail']),
        'gameCenterLeaderboard': GameCenterDetailRelationshipsDefaultLeaderboardToJSON(value['gameCenterLeaderboard']),
    };
}

