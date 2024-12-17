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
import type { GameCenterLeaderboardSetLocalizationCreateRequestData } from './GameCenterLeaderboardSetLocalizationCreateRequestData';
import {
    GameCenterLeaderboardSetLocalizationCreateRequestDataFromJSON,
    GameCenterLeaderboardSetLocalizationCreateRequestDataFromJSONTyped,
    GameCenterLeaderboardSetLocalizationCreateRequestDataToJSON,
    GameCenterLeaderboardSetLocalizationCreateRequestDataToJSONTyped,
} from './GameCenterLeaderboardSetLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetLocalizationCreateRequest
 */
export interface GameCenterLeaderboardSetLocalizationCreateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardSetLocalizationCreateRequestData}
     * @memberof GameCenterLeaderboardSetLocalizationCreateRequest
     */
    data: GameCenterLeaderboardSetLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationCreateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationCreateRequest(value: object): value is GameCenterLeaderboardSetLocalizationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetLocalizationCreateRequestFromJSON(json: any): GameCenterLeaderboardSetLocalizationCreateRequest {
    return GameCenterLeaderboardSetLocalizationCreateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetLocalizationCreateRequestToJSON(json: any): GameCenterLeaderboardSetLocalizationCreateRequest {
    return GameCenterLeaderboardSetLocalizationCreateRequestToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationCreateRequestToJSONTyped(value?: GameCenterLeaderboardSetLocalizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardSetLocalizationCreateRequestDataToJSON(value['data']),
    };
}

