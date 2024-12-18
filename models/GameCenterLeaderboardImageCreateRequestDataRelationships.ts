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
import type { GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization } from './GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization';
import {
    GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSON,
    GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped,
    GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSON,
    GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSONTyped,
} from './GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardImageCreateRequestDataRelationships
 */
export interface GameCenterLeaderboardImageCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization}
     * @memberof GameCenterLeaderboardImageCreateRequestDataRelationships
     */
    gameCenterLeaderboardLocalization: GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization;
}

/**
 * Check if a given object implements the GameCenterLeaderboardImageCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterLeaderboardImageCreateRequestDataRelationships(value: object): value is GameCenterLeaderboardImageCreateRequestDataRelationships {
    if (!('gameCenterLeaderboardLocalization' in value) || value['gameCenterLeaderboardLocalization'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSON(json: any): GameCenterLeaderboardImageCreateRequestDataRelationships {
    return GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterLeaderboardLocalization': GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSON(json['gameCenterLeaderboardLocalization']),
    };
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsToJSON(json: any): GameCenterLeaderboardImageCreateRequestDataRelationships {
    return GameCenterLeaderboardImageCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsToJSONTyped(value?: GameCenterLeaderboardImageCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterLeaderboardLocalization': GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSON(value['gameCenterLeaderboardLocalization']),
    };
}

