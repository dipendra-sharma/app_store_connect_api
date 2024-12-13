
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
import type { GameCenterLeaderboardSetMemberLocalizationUpdateRequestData } from './GameCenterLeaderboardSetMemberLocalizationUpdateRequestData';
import {
    GameCenterLeaderboardSetMemberLocalizationUpdateRequestDataFromJSON,
    GameCenterLeaderboardSetMemberLocalizationUpdateRequestDataFromJSONTyped,
    GameCenterLeaderboardSetMemberLocalizationUpdateRequestDataToJSON,
    GameCenterLeaderboardSetMemberLocalizationUpdateRequestDataToJSONTyped,
} from './GameCenterLeaderboardSetMemberLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetMemberLocalizationUpdateRequest
 */
export interface GameCenterLeaderboardSetMemberLocalizationUpdateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardSetMemberLocalizationUpdateRequestData}
     * @memberof GameCenterLeaderboardSetMemberLocalizationUpdateRequest
     */
    data: GameCenterLeaderboardSetMemberLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationUpdateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetMemberLocalizationUpdateRequest(value: object): value is GameCenterLeaderboardSetMemberLocalizationUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetMemberLocalizationUpdateRequestFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationUpdateRequest {
    return GameCenterLeaderboardSetMemberLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetMemberLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetMemberLocalizationUpdateRequestToJSON(json: any): GameCenterLeaderboardSetMemberLocalizationUpdateRequest {
    return GameCenterLeaderboardSetMemberLocalizationUpdateRequestToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationUpdateRequestToJSONTyped(value?: GameCenterLeaderboardSetMemberLocalizationUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardSetMemberLocalizationUpdateRequestDataToJSON(value['data']),
    };
}

