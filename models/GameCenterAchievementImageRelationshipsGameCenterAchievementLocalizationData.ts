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
/**
 * 
 * @export
 * @interface GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData
 */
export interface GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData
     */
    type: GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataTypeEnum = {
    GameCenterAchievementLocalizations: 'gameCenterAchievementLocalizations'
} as const;
export type GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataTypeEnum = typeof GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataTypeEnum[keyof typeof GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData interface.
 */
export function instanceOfGameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData(value: object): value is GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataFromJSON(json: any): GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData {
    return GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataFromJSONTyped(json, false);
}

export function GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataToJSON(json: any): GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData {
    return GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataToJSONTyped(json, false);
}

export function GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataToJSONTyped(value?: GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

