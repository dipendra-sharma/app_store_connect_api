
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

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships
 */
export interface GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet}
     * @memberof GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships
     */
    gameCenterLeaderboardSet: GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationCreateRequestDataRelationships(value: object): value is GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships {
    if (!('gameCenterLeaderboardSet' in value) || value['gameCenterLeaderboardSet'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsFromJSON(json: any): GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships {
    return GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterLeaderboardSet': GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSON(json['gameCenterLeaderboardSet']),
    };
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsToJSON(json: any): GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships {
    return GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsToJSONTyped(value?: GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterLeaderboardSet': GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetToJSON(value['gameCenterLeaderboardSet']),
    };
}
