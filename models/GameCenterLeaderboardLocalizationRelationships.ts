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
import type { GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage } from './GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage';
import {
    GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageFromJSON,
    GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageFromJSONTyped,
    GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageToJSON,
    GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageToJSONTyped,
} from './GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage';
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
 * @interface GameCenterLeaderboardLocalizationRelationships
 */
export interface GameCenterLeaderboardLocalizationRelationships {
    /**
     * 
     * @type {GameCenterDetailRelationshipsDefaultLeaderboard}
     * @memberof GameCenterLeaderboardLocalizationRelationships
     */
    gameCenterLeaderboard?: GameCenterDetailRelationshipsDefaultLeaderboard;
    /**
     * 
     * @type {GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage}
     * @memberof GameCenterLeaderboardLocalizationRelationships
     */
    gameCenterLeaderboardImage?: GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage;
}

/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationRelationships interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationRelationships(value: object): value is GameCenterLeaderboardLocalizationRelationships {
    return true;
}

export function GameCenterLeaderboardLocalizationRelationshipsFromJSON(json: any): GameCenterLeaderboardLocalizationRelationships {
    return GameCenterLeaderboardLocalizationRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterLeaderboard': json['gameCenterLeaderboard'] == null ? undefined : GameCenterDetailRelationshipsDefaultLeaderboardFromJSON(json['gameCenterLeaderboard']),
        'gameCenterLeaderboardImage': json['gameCenterLeaderboardImage'] == null ? undefined : GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageFromJSON(json['gameCenterLeaderboardImage']),
    };
}

export function GameCenterLeaderboardLocalizationRelationshipsToJSON(json: any): GameCenterLeaderboardLocalizationRelationships {
    return GameCenterLeaderboardLocalizationRelationshipsToJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationRelationshipsToJSONTyped(value?: GameCenterLeaderboardLocalizationRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterLeaderboard': GameCenterDetailRelationshipsDefaultLeaderboardToJSON(value['gameCenterLeaderboard']),
        'gameCenterLeaderboardImage': GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageToJSON(value['gameCenterLeaderboardImage']),
    };
}

