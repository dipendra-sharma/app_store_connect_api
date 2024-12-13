
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
 * @interface GameCenterAchievementReleaseCreateRequestDataRelationships
 */
export interface GameCenterAchievementReleaseCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail}
     * @memberof GameCenterAchievementReleaseCreateRequestDataRelationships
     */
    gameCenterDetail: GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievement}
     * @memberof GameCenterAchievementReleaseCreateRequestDataRelationships
     */
    gameCenterAchievement: GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievement;
}

/**
 * Check if a given object implements the GameCenterAchievementReleaseCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterAchievementReleaseCreateRequestDataRelationships(value: object): value is GameCenterAchievementReleaseCreateRequestDataRelationships {
    if (!('gameCenterDetail' in value) || value['gameCenterDetail'] === undefined) return false;
    if (!('gameCenterAchievement' in value) || value['gameCenterAchievement'] === undefined) return false;
    return true;
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSON(json: any): GameCenterAchievementReleaseCreateRequestDataRelationships {
    return GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterAchievement': GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievementFromJSON(json['gameCenterAchievement']),
    };
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsToJSON(json: any): GameCenterAchievementReleaseCreateRequestDataRelationships {
    return GameCenterAchievementReleaseCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsToJSONTyped(value?: GameCenterAchievementReleaseCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSON(value['gameCenterDetail']),
        'gameCenterAchievement': GameCenterAchievementLocalizationCreateRequestDataRelationshipsGameCenterAchievementToJSON(value['gameCenterAchievement']),
    };
}
