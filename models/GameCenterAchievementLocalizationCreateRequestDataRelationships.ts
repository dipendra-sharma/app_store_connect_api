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
import type { GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievement } from './GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievement';
import {
    GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievementFromJSON,
    GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievementFromJSONTyped,
    GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievementToJSON,
    GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievementToJSONTyped,
} from './GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievement';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationCreateRequestDataRelationships
 */
export interface GameCenterAchievementLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievement}
     * @memberof GameCenterAchievementLocalizationCreateRequestDataRelationships
     */
    gameCenterAchievement: GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievement;
}

/**
 * Check if a given object implements the GameCenterAchievementLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterAchievementLocalizationCreateRequestDataRelationships(value: object): value is GameCenterAchievementLocalizationCreateRequestDataRelationships {
    if (!('gameCenterAchievement' in value) || value['gameCenterAchievement'] === undefined) return false;
    return true;
}

export function GameCenterAchievementLocalizationCreateRequestDataRelationshipsFromJSON(json: any): GameCenterAchievementLocalizationCreateRequestDataRelationships {
    return GameCenterAchievementLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterAchievement': GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievementFromJSON(json['gameCenterAchievement']),
    };
}

export function GameCenterAchievementLocalizationCreateRequestDataRelationshipsToJSON(json: any): GameCenterAchievementLocalizationCreateRequestDataRelationships {
    return GameCenterAchievementLocalizationCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationCreateRequestDataRelationshipsToJSONTyped(value?: GameCenterAchievementLocalizationCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterAchievement': GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievementToJSON(value['gameCenterAchievement']),
    };
}

