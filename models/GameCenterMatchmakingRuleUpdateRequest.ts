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
import type { GameCenterMatchmakingRuleUpdateRequestData } from './GameCenterMatchmakingRuleUpdateRequestData';
import {
    GameCenterMatchmakingRuleUpdateRequestDataFromJSON,
    GameCenterMatchmakingRuleUpdateRequestDataFromJSONTyped,
    GameCenterMatchmakingRuleUpdateRequestDataToJSON,
    GameCenterMatchmakingRuleUpdateRequestDataToJSONTyped,
} from './GameCenterMatchmakingRuleUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleUpdateRequest
 */
export interface GameCenterMatchmakingRuleUpdateRequest {
    /**
     * 
     * @type {GameCenterMatchmakingRuleUpdateRequestData}
     * @memberof GameCenterMatchmakingRuleUpdateRequest
     */
    data: GameCenterMatchmakingRuleUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleUpdateRequest interface.
 */
export function instanceOfGameCenterMatchmakingRuleUpdateRequest(value: object): value is GameCenterMatchmakingRuleUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingRuleUpdateRequestFromJSON(json: any): GameCenterMatchmakingRuleUpdateRequest {
    return GameCenterMatchmakingRuleUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingRuleUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingRuleUpdateRequestToJSON(json: any): GameCenterMatchmakingRuleUpdateRequest {
    return GameCenterMatchmakingRuleUpdateRequestToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleUpdateRequestToJSONTyped(value?: GameCenterMatchmakingRuleUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterMatchmakingRuleUpdateRequestDataToJSON(value['data']),
    };
}

