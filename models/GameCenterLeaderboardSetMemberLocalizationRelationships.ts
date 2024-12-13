
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
import type { GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet } from './GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet';
import {
    GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetFromJSON,
    GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetFromJSONTyped,
    GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetToJSON,
    GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetToJSONTyped,
} from './GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet';
import type { GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboard } from './GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboard';
import {
    GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardFromJSON,
    GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardFromJSONTyped,
    GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardToJSON,
    GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardToJSONTyped,
} from './GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboard';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetMemberLocalizationRelationships
 */
export interface GameCenterLeaderboardSetMemberLocalizationRelationships {
    /**
     * 
     * @type {GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet}
     * @memberof GameCenterLeaderboardSetMemberLocalizationRelationships
     */
    gameCenterLeaderboardSet?: GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet;
    /**
     * 
     * @type {GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboard}
     * @memberof GameCenterLeaderboardSetMemberLocalizationRelationships
     */
    gameCenterLeaderboard?: GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboard;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationRelationships interface.
 */
export function instanceOfGameCenterLeaderboardSetMemberLocalizationRelationships(value: object): value is GameCenterLeaderboardSetMemberLocalizationRelationships {
    return true;
}

export function GameCenterLeaderboardSetMemberLocalizationRelationshipsFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationRelationships {
    return GameCenterLeaderboardSetMemberLocalizationRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterLeaderboardSet': json['gameCenterLeaderboardSet'] == null ? undefined : GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetFromJSON(json['gameCenterLeaderboardSet']),
        'gameCenterLeaderboard': json['gameCenterLeaderboard'] == null ? undefined : GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardFromJSON(json['gameCenterLeaderboard']),
    };
}

export function GameCenterLeaderboardSetMemberLocalizationRelationshipsToJSON(json: any): GameCenterLeaderboardSetMemberLocalizationRelationships {
    return GameCenterLeaderboardSetMemberLocalizationRelationshipsToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationRelationshipsToJSONTyped(value?: GameCenterLeaderboardSetMemberLocalizationRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterLeaderboardSet': GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetToJSON(value['gameCenterLeaderboardSet']),
        'gameCenterLeaderboard': GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardToJSON(value['gameCenterLeaderboard']),
    };
}

