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
import type { GameCenterMatchmakingRuleSetTestCreateRequestData } from './GameCenterMatchmakingRuleSetTestCreateRequestData';
import {
    GameCenterMatchmakingRuleSetTestCreateRequestDataFromJSON,
    GameCenterMatchmakingRuleSetTestCreateRequestDataFromJSONTyped,
    GameCenterMatchmakingRuleSetTestCreateRequestDataToJSON,
    GameCenterMatchmakingRuleSetTestCreateRequestDataToJSONTyped,
} from './GameCenterMatchmakingRuleSetTestCreateRequestData';
import type { GameCenterMatchmakingRuleSetTestCreateRequestIncludedInner } from './GameCenterMatchmakingRuleSetTestCreateRequestIncludedInner';
import {
    GameCenterMatchmakingRuleSetTestCreateRequestIncludedInnerFromJSON,
    GameCenterMatchmakingRuleSetTestCreateRequestIncludedInnerFromJSONTyped,
    GameCenterMatchmakingRuleSetTestCreateRequestIncludedInnerToJSON,
    GameCenterMatchmakingRuleSetTestCreateRequestIncludedInnerToJSONTyped,
} from './GameCenterMatchmakingRuleSetTestCreateRequestIncludedInner';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetTestCreateRequest
 */
export interface GameCenterMatchmakingRuleSetTestCreateRequest {
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetTestCreateRequestData}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequest
     */
    data: GameCenterMatchmakingRuleSetTestCreateRequestData;
    /**
     * 
     * @type {Array<GameCenterMatchmakingRuleSetTestCreateRequestIncludedInner>}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequest
     */
    included?: Array<GameCenterMatchmakingRuleSetTestCreateRequestIncludedInner>;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTestCreateRequest interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetTestCreateRequest(value: object): value is GameCenterMatchmakingRuleSetTestCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingRuleSetTestCreateRequestFromJSON(json: any): GameCenterMatchmakingRuleSetTestCreateRequest {
    return GameCenterMatchmakingRuleSetTestCreateRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetTestCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingRuleSetTestCreateRequestDataFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(GameCenterMatchmakingRuleSetTestCreateRequestIncludedInnerFromJSON)),
    };
}

export function GameCenterMatchmakingRuleSetTestCreateRequestToJSON(json: any): GameCenterMatchmakingRuleSetTestCreateRequest {
    return GameCenterMatchmakingRuleSetTestCreateRequestToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestCreateRequestToJSONTyped(value?: GameCenterMatchmakingRuleSetTestCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterMatchmakingRuleSetTestCreateRequestDataToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(GameCenterMatchmakingRuleSetTestCreateRequestIncludedInnerToJSON)),
    };
}

