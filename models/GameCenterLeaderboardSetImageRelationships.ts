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
import type { GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization } from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization';
import {
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSON,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSONTyped,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationToJSON,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationToJSONTyped,
} from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImageRelationships
 */
export interface GameCenterLeaderboardSetImageRelationships {
    /**
     * 
     * @type {GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization}
     * @memberof GameCenterLeaderboardSetImageRelationships
     */
    gameCenterLeaderboardSetLocalization?: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetImageRelationships interface.
 */
export function instanceOfGameCenterLeaderboardSetImageRelationships(value: object): value is GameCenterLeaderboardSetImageRelationships {
    return true;
}

export function GameCenterLeaderboardSetImageRelationshipsFromJSON(json: any): GameCenterLeaderboardSetImageRelationships {
    return GameCenterLeaderboardSetImageRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterLeaderboardSetLocalization': json['gameCenterLeaderboardSetLocalization'] == null ? undefined : GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSON(json['gameCenterLeaderboardSetLocalization']),
    };
}

export function GameCenterLeaderboardSetImageRelationshipsToJSON(json: any): GameCenterLeaderboardSetImageRelationships {
    return GameCenterLeaderboardSetImageRelationshipsToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageRelationshipsToJSONTyped(value?: GameCenterLeaderboardSetImageRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterLeaderboardSetLocalization': GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationToJSON(value['gameCenterLeaderboardSetLocalization']),
    };
}

