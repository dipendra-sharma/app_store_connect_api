
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
 * @interface GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData
 */
export interface GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData
     */
    type: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum = {
    GameCenterLeaderboardSetLocalizations: 'gameCenterLeaderboardSetLocalizations'
} as const;
export type GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum = typeof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum[keyof typeof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData interface.
 */
export function instanceOfGameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData(value: object): value is GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSON(json: any): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData {
    return GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSON(json: any): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData {
    return GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSONTyped(value?: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

