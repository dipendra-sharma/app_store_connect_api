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
import type { GameCenterLeaderboardSetMemberLocalizationCreateRequestData } from './GameCenterLeaderboardSetMemberLocalizationCreateRequestData';
import {
    GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSON,
    GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSONTyped,
    GameCenterLeaderboardSetMemberLocalizationCreateRequestDataToJSON,
    GameCenterLeaderboardSetMemberLocalizationCreateRequestDataToJSONTyped,
} from './GameCenterLeaderboardSetMemberLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetMemberLocalizationCreateRequest
 */
export interface GameCenterLeaderboardSetMemberLocalizationCreateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardSetMemberLocalizationCreateRequestData}
     * @memberof GameCenterLeaderboardSetMemberLocalizationCreateRequest
     */
    data: GameCenterLeaderboardSetMemberLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationCreateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetMemberLocalizationCreateRequest(value: object): value is GameCenterLeaderboardSetMemberLocalizationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationCreateRequest {
    return GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestToJSON(json: any): GameCenterLeaderboardSetMemberLocalizationCreateRequest {
    return GameCenterLeaderboardSetMemberLocalizationCreateRequestToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestToJSONTyped(value?: GameCenterLeaderboardSetMemberLocalizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardSetMemberLocalizationCreateRequestDataToJSON(value['data']),
    };
}

