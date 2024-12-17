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
import type { GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet } from './GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet';
import {
    GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSON,
    GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSONTyped,
    GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetToJSON,
    GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetToJSONTyped,
} from './GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet';
import type { GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail } from './GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail';
import {
    GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSON,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSONTyped,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSON,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSONTyped,
} from './GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetReleaseCreateRequestDataRelationships
 */
export interface GameCenterLeaderboardSetReleaseCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail}
     * @memberof GameCenterLeaderboardSetReleaseCreateRequestDataRelationships
     */
    gameCenterDetail: GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet}
     * @memberof GameCenterLeaderboardSetReleaseCreateRequestDataRelationships
     */
    gameCenterLeaderboardSet: GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetReleaseCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterLeaderboardSetReleaseCreateRequestDataRelationships(value: object): value is GameCenterLeaderboardSetReleaseCreateRequestDataRelationships {
    if (!('gameCenterDetail' in value) || value['gameCenterDetail'] === undefined) return false;
    if (!('gameCenterLeaderboardSet' in value) || value['gameCenterLeaderboardSet'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSON(json: any): GameCenterLeaderboardSetReleaseCreateRequestDataRelationships {
    return GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetReleaseCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterLeaderboardSet': GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSON(json['gameCenterLeaderboardSet']),
    };
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSON(json: any): GameCenterLeaderboardSetReleaseCreateRequestDataRelationships {
    return GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSONTyped(value?: GameCenterLeaderboardSetReleaseCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSON(value['gameCenterDetail']),
        'gameCenterLeaderboardSet': GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetToJSON(value['gameCenterLeaderboardSet']),
    };
}

