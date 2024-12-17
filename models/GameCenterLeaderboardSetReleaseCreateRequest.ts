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
import type { GameCenterLeaderboardSetReleaseCreateRequestData } from './GameCenterLeaderboardSetReleaseCreateRequestData';
import {
    GameCenterLeaderboardSetReleaseCreateRequestDataFromJSON,
    GameCenterLeaderboardSetReleaseCreateRequestDataFromJSONTyped,
    GameCenterLeaderboardSetReleaseCreateRequestDataToJSON,
    GameCenterLeaderboardSetReleaseCreateRequestDataToJSONTyped,
} from './GameCenterLeaderboardSetReleaseCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetReleaseCreateRequest
 */
export interface GameCenterLeaderboardSetReleaseCreateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardSetReleaseCreateRequestData}
     * @memberof GameCenterLeaderboardSetReleaseCreateRequest
     */
    data: GameCenterLeaderboardSetReleaseCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetReleaseCreateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetReleaseCreateRequest(value: object): value is GameCenterLeaderboardSetReleaseCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetReleaseCreateRequestFromJSON(json: any): GameCenterLeaderboardSetReleaseCreateRequest {
    return GameCenterLeaderboardSetReleaseCreateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetReleaseCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetReleaseCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetReleaseCreateRequestToJSON(json: any): GameCenterLeaderboardSetReleaseCreateRequest {
    return GameCenterLeaderboardSetReleaseCreateRequestToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseCreateRequestToJSONTyped(value?: GameCenterLeaderboardSetReleaseCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardSetReleaseCreateRequestDataToJSON(value['data']),
    };
}

