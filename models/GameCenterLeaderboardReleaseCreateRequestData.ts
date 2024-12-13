
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
import type { GameCenterLeaderboardReleaseCreateRequestDataRelationships } from './GameCenterLeaderboardReleaseCreateRequestDataRelationships';
import {
    GameCenterLeaderboardReleaseCreateRequestDataRelationshipsFromJSON,
    GameCenterLeaderboardReleaseCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterLeaderboardReleaseCreateRequestDataRelationshipsToJSON,
    GameCenterLeaderboardReleaseCreateRequestDataRelationshipsToJSONTyped,
} from './GameCenterLeaderboardReleaseCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardReleaseCreateRequestData
 */
export interface GameCenterLeaderboardReleaseCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardReleaseCreateRequestData
     */
    type: GameCenterLeaderboardReleaseCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterLeaderboardReleaseCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardReleaseCreateRequestData
     */
    relationships: GameCenterLeaderboardReleaseCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterLeaderboardReleaseCreateRequestDataTypeEnum = {
    GameCenterLeaderboardReleases: 'gameCenterLeaderboardReleases'
} as const;
export type GameCenterLeaderboardReleaseCreateRequestDataTypeEnum = typeof GameCenterLeaderboardReleaseCreateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardReleaseCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardReleaseCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardReleaseCreateRequestData(value: object): value is GameCenterLeaderboardReleaseCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardReleaseCreateRequestDataFromJSON(json: any): GameCenterLeaderboardReleaseCreateRequestData {
    return GameCenterLeaderboardReleaseCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardReleaseCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardReleaseCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': GameCenterLeaderboardReleaseCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterLeaderboardReleaseCreateRequestDataToJSON(json: any): GameCenterLeaderboardReleaseCreateRequestData {
    return GameCenterLeaderboardReleaseCreateRequestDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardReleaseCreateRequestDataToJSONTyped(value?: GameCenterLeaderboardReleaseCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'relationships': GameCenterLeaderboardReleaseCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}
