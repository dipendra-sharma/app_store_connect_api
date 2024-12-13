
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
import type { GameCenterLeaderboardSetReleaseCreateRequestDataRelationships } from './GameCenterLeaderboardSetReleaseCreateRequestDataRelationships';
import {
    GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSON,
    GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSON,
    GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSONTyped,
} from './GameCenterLeaderboardSetReleaseCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetReleaseCreateRequestData
 */
export interface GameCenterLeaderboardSetReleaseCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetReleaseCreateRequestData
     */
    type: GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterLeaderboardSetReleaseCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardSetReleaseCreateRequestData
     */
    relationships: GameCenterLeaderboardSetReleaseCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum = {
    GameCenterLeaderboardSetReleases: 'gameCenterLeaderboardSetReleases'
} as const;
export type GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum = typeof GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetReleaseCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardSetReleaseCreateRequestData(value: object): value is GameCenterLeaderboardSetReleaseCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataFromJSON(json: any): GameCenterLeaderboardSetReleaseCreateRequestData {
    return GameCenterLeaderboardSetReleaseCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetReleaseCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataToJSON(json: any): GameCenterLeaderboardSetReleaseCreateRequestData {
    return GameCenterLeaderboardSetReleaseCreateRequestDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataToJSONTyped(value?: GameCenterLeaderboardSetReleaseCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'relationships': GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}
