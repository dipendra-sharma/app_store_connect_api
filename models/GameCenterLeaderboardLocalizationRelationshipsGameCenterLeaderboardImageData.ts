
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
 * @interface GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData
 */
export interface GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData
     */
    type: GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataTypeEnum = {
    GameCenterLeaderboardImages: 'gameCenterLeaderboardImages'
} as const;
export type GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataTypeEnum = typeof GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataTypeEnum[keyof typeof GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData(value: object): value is GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataFromJSON(json: any): GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData {
    return GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataToJSON(json: any): GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData {
    return GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataToJSONTyped(value?: GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

