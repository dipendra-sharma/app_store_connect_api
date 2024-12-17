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
import type { GameCenterDetailRelationshipsGameCenterLeaderboards } from './GameCenterDetailRelationshipsGameCenterLeaderboards';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardsToJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardsToJSONTyped,
} from './GameCenterDetailRelationshipsGameCenterLeaderboards';
import type { GameCenterDetailRelationshipsGameCenterAchievements } from './GameCenterDetailRelationshipsGameCenterAchievements';
import {
    GameCenterDetailRelationshipsGameCenterAchievementsFromJSON,
    GameCenterDetailRelationshipsGameCenterAchievementsFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterAchievementsToJSON,
    GameCenterDetailRelationshipsGameCenterAchievementsToJSONTyped,
} from './GameCenterDetailRelationshipsGameCenterAchievements';
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSets } from './GameCenterDetailRelationshipsGameCenterLeaderboardSets';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsToJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsToJSONTyped,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardSets';
import type { GameCenterGroupRelationshipsGameCenterDetails } from './GameCenterGroupRelationshipsGameCenterDetails';
import {
    GameCenterGroupRelationshipsGameCenterDetailsFromJSON,
    GameCenterGroupRelationshipsGameCenterDetailsFromJSONTyped,
    GameCenterGroupRelationshipsGameCenterDetailsToJSON,
    GameCenterGroupRelationshipsGameCenterDetailsToJSONTyped,
} from './GameCenterGroupRelationshipsGameCenterDetails';

/**
 * 
 * @export
 * @interface GameCenterGroupRelationships
 */
export interface GameCenterGroupRelationships {
    /**
     * 
     * @type {GameCenterGroupRelationshipsGameCenterDetails}
     * @memberof GameCenterGroupRelationships
     */
    gameCenterDetails?: GameCenterGroupRelationshipsGameCenterDetails;
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboards}
     * @memberof GameCenterGroupRelationships
     */
    gameCenterLeaderboards?: GameCenterDetailRelationshipsGameCenterLeaderboards;
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSets}
     * @memberof GameCenterGroupRelationships
     */
    gameCenterLeaderboardSets?: GameCenterDetailRelationshipsGameCenterLeaderboardSets;
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterAchievements}
     * @memberof GameCenterGroupRelationships
     */
    gameCenterAchievements?: GameCenterDetailRelationshipsGameCenterAchievements;
}

/**
 * Check if a given object implements the GameCenterGroupRelationships interface.
 */
export function instanceOfGameCenterGroupRelationships(value: object): value is GameCenterGroupRelationships {
    return true;
}

export function GameCenterGroupRelationshipsFromJSON(json: any): GameCenterGroupRelationships {
    return GameCenterGroupRelationshipsFromJSONTyped(json, false);
}

export function GameCenterGroupRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterDetails': json['gameCenterDetails'] == null ? undefined : GameCenterGroupRelationshipsGameCenterDetailsFromJSON(json['gameCenterDetails']),
        'gameCenterLeaderboards': json['gameCenterLeaderboards'] == null ? undefined : GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSON(json['gameCenterLeaderboards']),
        'gameCenterLeaderboardSets': json['gameCenterLeaderboardSets'] == null ? undefined : GameCenterDetailRelationshipsGameCenterLeaderboardSetsFromJSON(json['gameCenterLeaderboardSets']),
        'gameCenterAchievements': json['gameCenterAchievements'] == null ? undefined : GameCenterDetailRelationshipsGameCenterAchievementsFromJSON(json['gameCenterAchievements']),
    };
}

export function GameCenterGroupRelationshipsToJSON(json: any): GameCenterGroupRelationships {
    return GameCenterGroupRelationshipsToJSONTyped(json, false);
}

export function GameCenterGroupRelationshipsToJSONTyped(value?: GameCenterGroupRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterDetails': GameCenterGroupRelationshipsGameCenterDetailsToJSON(value['gameCenterDetails']),
        'gameCenterLeaderboards': GameCenterDetailRelationshipsGameCenterLeaderboardsToJSON(value['gameCenterLeaderboards']),
        'gameCenterLeaderboardSets': GameCenterDetailRelationshipsGameCenterLeaderboardSetsToJSON(value['gameCenterLeaderboardSets']),
        'gameCenterAchievements': GameCenterDetailRelationshipsGameCenterAchievementsToJSON(value['gameCenterAchievements']),
    };
}

