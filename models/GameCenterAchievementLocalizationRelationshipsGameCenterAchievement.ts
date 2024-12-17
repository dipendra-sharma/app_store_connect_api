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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSONTyped,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievement
 */
export interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievement {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievement
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievement
     */
    data?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData;
}

/**
 * Check if a given object implements the GameCenterAchievementLocalizationRelationshipsGameCenterAchievement interface.
 */
export function instanceOfGameCenterAchievementLocalizationRelationshipsGameCenterAchievement(value: object): value is GameCenterAchievementLocalizationRelationshipsGameCenterAchievement {
    return true;
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSON(json: any): GameCenterAchievementLocalizationRelationshipsGameCenterAchievement {
    return GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationRelationshipsGameCenterAchievement {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSON(json: any): GameCenterAchievementLocalizationRelationshipsGameCenterAchievement {
    return GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSONTyped(value?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON(value['data']),
    };
}

