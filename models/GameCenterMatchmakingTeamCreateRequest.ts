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
import type { GameCenterMatchmakingTeamCreateRequestData } from './GameCenterMatchmakingTeamCreateRequestData';
import {
    GameCenterMatchmakingTeamCreateRequestDataFromJSON,
    GameCenterMatchmakingTeamCreateRequestDataFromJSONTyped,
    GameCenterMatchmakingTeamCreateRequestDataToJSON,
    GameCenterMatchmakingTeamCreateRequestDataToJSONTyped,
} from './GameCenterMatchmakingTeamCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTeamCreateRequest
 */
export interface GameCenterMatchmakingTeamCreateRequest {
    /**
     * 
     * @type {GameCenterMatchmakingTeamCreateRequestData}
     * @memberof GameCenterMatchmakingTeamCreateRequest
     */
    data: GameCenterMatchmakingTeamCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTeamCreateRequest interface.
 */
export function instanceOfGameCenterMatchmakingTeamCreateRequest(value: object): value is GameCenterMatchmakingTeamCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingTeamCreateRequestFromJSON(json: any): GameCenterMatchmakingTeamCreateRequest {
    return GameCenterMatchmakingTeamCreateRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingTeamCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingTeamCreateRequestToJSON(json: any): GameCenterMatchmakingTeamCreateRequest {
    return GameCenterMatchmakingTeamCreateRequestToJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamCreateRequestToJSONTyped(value?: GameCenterMatchmakingTeamCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterMatchmakingTeamCreateRequestDataToJSON(value['data']),
    };
}

