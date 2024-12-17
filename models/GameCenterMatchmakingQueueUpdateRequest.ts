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
import type { GameCenterMatchmakingQueueUpdateRequestData } from './GameCenterMatchmakingQueueUpdateRequestData';
import {
    GameCenterMatchmakingQueueUpdateRequestDataFromJSON,
    GameCenterMatchmakingQueueUpdateRequestDataFromJSONTyped,
    GameCenterMatchmakingQueueUpdateRequestDataToJSON,
    GameCenterMatchmakingQueueUpdateRequestDataToJSONTyped,
} from './GameCenterMatchmakingQueueUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueUpdateRequest
 */
export interface GameCenterMatchmakingQueueUpdateRequest {
    /**
     * 
     * @type {GameCenterMatchmakingQueueUpdateRequestData}
     * @memberof GameCenterMatchmakingQueueUpdateRequest
     */
    data: GameCenterMatchmakingQueueUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueUpdateRequest interface.
 */
export function instanceOfGameCenterMatchmakingQueueUpdateRequest(value: object): value is GameCenterMatchmakingQueueUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingQueueUpdateRequestFromJSON(json: any): GameCenterMatchmakingQueueUpdateRequest {
    return GameCenterMatchmakingQueueUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingQueueUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingQueueUpdateRequestToJSON(json: any): GameCenterMatchmakingQueueUpdateRequest {
    return GameCenterMatchmakingQueueUpdateRequestToJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueUpdateRequestToJSONTyped(value?: GameCenterMatchmakingQueueUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterMatchmakingQueueUpdateRequestDataToJSON(value['data']),
    };
}

