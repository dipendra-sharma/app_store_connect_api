
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
import type { GameCenterLeaderboardSetImageUpdateRequestData } from './GameCenterLeaderboardSetImageUpdateRequestData';
import {
    GameCenterLeaderboardSetImageUpdateRequestDataFromJSON,
    GameCenterLeaderboardSetImageUpdateRequestDataFromJSONTyped,
    GameCenterLeaderboardSetImageUpdateRequestDataToJSON,
    GameCenterLeaderboardSetImageUpdateRequestDataToJSONTyped,
} from './GameCenterLeaderboardSetImageUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImageUpdateRequest
 */
export interface GameCenterLeaderboardSetImageUpdateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardSetImageUpdateRequestData}
     * @memberof GameCenterLeaderboardSetImageUpdateRequest
     */
    data: GameCenterLeaderboardSetImageUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetImageUpdateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetImageUpdateRequest(value: object): value is GameCenterLeaderboardSetImageUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetImageUpdateRequestFromJSON(json: any): GameCenterLeaderboardSetImageUpdateRequest {
    return GameCenterLeaderboardSetImageUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetImageUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetImageUpdateRequestToJSON(json: any): GameCenterLeaderboardSetImageUpdateRequest {
    return GameCenterLeaderboardSetImageUpdateRequestToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageUpdateRequestToJSONTyped(value?: GameCenterLeaderboardSetImageUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardSetImageUpdateRequestDataToJSON(value['data']),
    };
}

