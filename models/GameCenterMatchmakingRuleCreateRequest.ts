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
import type { GameCenterMatchmakingRuleCreateRequestData } from './GameCenterMatchmakingRuleCreateRequestData';
import {
    GameCenterMatchmakingRuleCreateRequestDataFromJSON,
    GameCenterMatchmakingRuleCreateRequestDataFromJSONTyped,
    GameCenterMatchmakingRuleCreateRequestDataToJSON,
    GameCenterMatchmakingRuleCreateRequestDataToJSONTyped,
} from './GameCenterMatchmakingRuleCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleCreateRequest
 */
export interface GameCenterMatchmakingRuleCreateRequest {
    /**
     * 
     * @type {GameCenterMatchmakingRuleCreateRequestData}
     * @memberof GameCenterMatchmakingRuleCreateRequest
     */
    data: GameCenterMatchmakingRuleCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleCreateRequest interface.
 */
export function instanceOfGameCenterMatchmakingRuleCreateRequest(value: object): value is GameCenterMatchmakingRuleCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingRuleCreateRequestFromJSON(json: any): GameCenterMatchmakingRuleCreateRequest {
    return GameCenterMatchmakingRuleCreateRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingRuleCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingRuleCreateRequestToJSON(json: any): GameCenterMatchmakingRuleCreateRequest {
    return GameCenterMatchmakingRuleCreateRequestToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleCreateRequestToJSONTyped(value?: GameCenterMatchmakingRuleCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterMatchmakingRuleCreateRequestDataToJSON(value['data']),
    };
}

