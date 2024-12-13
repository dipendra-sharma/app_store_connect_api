
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
import type { GameCenterLeaderboardSetCreateRequestData } from './GameCenterLeaderboardSetCreateRequestData';
import {
    GameCenterLeaderboardSetCreateRequestDataFromJSON,
    GameCenterLeaderboardSetCreateRequestDataFromJSONTyped,
    GameCenterLeaderboardSetCreateRequestDataToJSON,
    GameCenterLeaderboardSetCreateRequestDataToJSONTyped,
} from './GameCenterLeaderboardSetCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetCreateRequest
 */
export interface GameCenterLeaderboardSetCreateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardSetCreateRequestData}
     * @memberof GameCenterLeaderboardSetCreateRequest
     */
    data: GameCenterLeaderboardSetCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetCreateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetCreateRequest(value: object): value is GameCenterLeaderboardSetCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetCreateRequestFromJSON(json: any): GameCenterLeaderboardSetCreateRequest {
    return GameCenterLeaderboardSetCreateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetCreateRequestToJSON(json: any): GameCenterLeaderboardSetCreateRequest {
    return GameCenterLeaderboardSetCreateRequestToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetCreateRequestToJSONTyped(value?: GameCenterLeaderboardSetCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardSetCreateRequestDataToJSON(value['data']),
    };
}
