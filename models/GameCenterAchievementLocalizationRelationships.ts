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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievement } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievement';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSONTyped,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievement';
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageToJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageToJSONTyped,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationRelationships
 */
export interface GameCenterAchievementLocalizationRelationships {
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievement}
     * @memberof GameCenterAchievementLocalizationRelationships
     */
    gameCenterAchievement?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievement;
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage}
     * @memberof GameCenterAchievementLocalizationRelationships
     */
    gameCenterAchievementImage?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage;
}

/**
 * Check if a given object implements the GameCenterAchievementLocalizationRelationships interface.
 */
export function instanceOfGameCenterAchievementLocalizationRelationships(value: object): value is GameCenterAchievementLocalizationRelationships {
    return true;
}

export function GameCenterAchievementLocalizationRelationshipsFromJSON(json: any): GameCenterAchievementLocalizationRelationships {
    return GameCenterAchievementLocalizationRelationshipsFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterAchievement': json['gameCenterAchievement'] == null ? undefined : GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSON(json['gameCenterAchievement']),
        'gameCenterAchievementImage': json['gameCenterAchievementImage'] == null ? undefined : GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageFromJSON(json['gameCenterAchievementImage']),
    };
}

export function GameCenterAchievementLocalizationRelationshipsToJSON(json: any): GameCenterAchievementLocalizationRelationships {
    return GameCenterAchievementLocalizationRelationshipsToJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationRelationshipsToJSONTyped(value?: GameCenterAchievementLocalizationRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterAchievement': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSON(value['gameCenterAchievement']),
        'gameCenterAchievementImage': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageToJSON(value['gameCenterAchievementImage']),
    };
}

