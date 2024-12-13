
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
import type { GameCenterAchievementReleaseCreateRequestDataRelationships } from './GameCenterAchievementReleaseCreateRequestDataRelationships';
import {
    GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSON,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsToJSON,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsToJSONTyped,
} from './GameCenterAchievementReleaseCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterAchievementReleaseCreateRequestData
 */
export interface GameCenterAchievementReleaseCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementReleaseCreateRequestData
     */
    type: GameCenterAchievementReleaseCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterAchievementReleaseCreateRequestDataRelationships}
     * @memberof GameCenterAchievementReleaseCreateRequestData
     */
    relationships: GameCenterAchievementReleaseCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterAchievementReleaseCreateRequestDataTypeEnum = {
    GameCenterAchievementReleases: 'gameCenterAchievementReleases'
} as const;
export type GameCenterAchievementReleaseCreateRequestDataTypeEnum = typeof GameCenterAchievementReleaseCreateRequestDataTypeEnum[keyof typeof GameCenterAchievementReleaseCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementReleaseCreateRequestData interface.
 */
export function instanceOfGameCenterAchievementReleaseCreateRequestData(value: object): value is GameCenterAchievementReleaseCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function GameCenterAchievementReleaseCreateRequestDataFromJSON(json: any): GameCenterAchievementReleaseCreateRequestData {
    return GameCenterAchievementReleaseCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterAchievementReleaseCreateRequestDataToJSON(json: any): GameCenterAchievementReleaseCreateRequestData {
    return GameCenterAchievementReleaseCreateRequestDataToJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestDataToJSONTyped(value?: GameCenterAchievementReleaseCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'relationships': GameCenterAchievementReleaseCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

