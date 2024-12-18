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
import type { GameCenterLeaderboardSetImageCreateRequestData } from './GameCenterLeaderboardSetImageCreateRequestData';
import {
    GameCenterLeaderboardSetImageCreateRequestDataFromJSON,
    GameCenterLeaderboardSetImageCreateRequestDataFromJSONTyped,
    GameCenterLeaderboardSetImageCreateRequestDataToJSON,
    GameCenterLeaderboardSetImageCreateRequestDataToJSONTyped,
} from './GameCenterLeaderboardSetImageCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImageCreateRequest
 */
export interface GameCenterLeaderboardSetImageCreateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardSetImageCreateRequestData}
     * @memberof GameCenterLeaderboardSetImageCreateRequest
     */
    data: GameCenterLeaderboardSetImageCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetImageCreateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetImageCreateRequest(value: object): value is GameCenterLeaderboardSetImageCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetImageCreateRequestFromJSON(json: any): GameCenterLeaderboardSetImageCreateRequest {
    return GameCenterLeaderboardSetImageCreateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetImageCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetImageCreateRequestToJSON(json: any): GameCenterLeaderboardSetImageCreateRequest {
    return GameCenterLeaderboardSetImageCreateRequestToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageCreateRequestToJSONTyped(value?: GameCenterLeaderboardSetImageCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardSetImageCreateRequestDataToJSON(value['data']),
    };
}

