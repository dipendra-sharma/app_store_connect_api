
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
import type { GameCenterDetailRelationshipsDefaultLeaderboard } from './GameCenterDetailRelationshipsDefaultLeaderboard';
import {
    GameCenterDetailRelationshipsDefaultLeaderboardFromJSON,
    GameCenterDetailRelationshipsDefaultLeaderboardFromJSONTyped,
    GameCenterDetailRelationshipsDefaultLeaderboardToJSON,
    GameCenterDetailRelationshipsDefaultLeaderboardToJSONTyped,
} from './GameCenterDetailRelationshipsDefaultLeaderboard';
import type { GameCenterAchievementRelationshipsGameCenterGroup } from './GameCenterAchievementRelationshipsGameCenterGroup';
import {
    GameCenterAchievementRelationshipsGameCenterGroupFromJSON,
    GameCenterAchievementRelationshipsGameCenterGroupFromJSONTyped,
    GameCenterAchievementRelationshipsGameCenterGroupToJSON,
    GameCenterAchievementRelationshipsGameCenterGroupToJSONTyped,
} from './GameCenterAchievementRelationshipsGameCenterGroup';

/**
 * 
 * @export
 * @interface GameCenterDetailUpdateRequestDataRelationships
 */
export interface GameCenterDetailUpdateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterAchievementRelationshipsGameCenterGroup}
     * @memberof GameCenterDetailUpdateRequestDataRelationships
     */
    gameCenterGroup?: GameCenterAchievementRelationshipsGameCenterGroup;
    /**
     * 
     * @type {GameCenterDetailRelationshipsDefaultLeaderboard}
     * @memberof GameCenterDetailUpdateRequestDataRelationships
     */
    defaultLeaderboard?: GameCenterDetailRelationshipsDefaultLeaderboard;
    /**
     * 
     * @type {GameCenterDetailRelationshipsDefaultLeaderboard}
     * @memberof GameCenterDetailUpdateRequestDataRelationships
     */
    defaultGroupLeaderboard?: GameCenterDetailRelationshipsDefaultLeaderboard;
}

/**
 * Check if a given object implements the GameCenterDetailUpdateRequestDataRelationships interface.
 */
export function instanceOfGameCenterDetailUpdateRequestDataRelationships(value: object): value is GameCenterDetailUpdateRequestDataRelationships {
    return true;
}

export function GameCenterDetailUpdateRequestDataRelationshipsFromJSON(json: any): GameCenterDetailUpdateRequestDataRelationships {
    return GameCenterDetailUpdateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterDetailUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailUpdateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterGroup': json['gameCenterGroup'] == null ? undefined : GameCenterAchievementRelationshipsGameCenterGroupFromJSON(json['gameCenterGroup']),
        'defaultLeaderboard': json['defaultLeaderboard'] == null ? undefined : GameCenterDetailRelationshipsDefaultLeaderboardFromJSON(json['defaultLeaderboard']),
        'defaultGroupLeaderboard': json['defaultGroupLeaderboard'] == null ? undefined : GameCenterDetailRelationshipsDefaultLeaderboardFromJSON(json['defaultGroupLeaderboard']),
    };
}

export function GameCenterDetailUpdateRequestDataRelationshipsToJSON(json: any): GameCenterDetailUpdateRequestDataRelationships {
    return GameCenterDetailUpdateRequestDataRelationshipsToJSONTyped(json, false);
}

export function GameCenterDetailUpdateRequestDataRelationshipsToJSONTyped(value?: GameCenterDetailUpdateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterGroup': GameCenterAchievementRelationshipsGameCenterGroupToJSON(value['gameCenterGroup']),
        'defaultLeaderboard': GameCenterDetailRelationshipsDefaultLeaderboardToJSON(value['defaultLeaderboard']),
        'defaultGroupLeaderboard': GameCenterDetailRelationshipsDefaultLeaderboardToJSON(value['defaultGroupLeaderboard']),
    };
}

