
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
import type { GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner } from './GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner';
import {
    GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInnerFromJSON,
    GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInnerFromJSONTyped,
    GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInnerToJSON,
    GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInnerToJSONTyped,
} from './GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetTestAttributes
 */
export interface GameCenterMatchmakingRuleSetTestAttributes {
    /**
     * 
     * @type {Array<Array<GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner>>}
     * @memberof GameCenterMatchmakingRuleSetTestAttributes
     */
    matchmakingResults?: Array<Array<GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner>>;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTestAttributes interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetTestAttributes(value: object): value is GameCenterMatchmakingRuleSetTestAttributes {
    return true;
}

export function GameCenterMatchmakingRuleSetTestAttributesFromJSON(json: any): GameCenterMatchmakingRuleSetTestAttributes {
    return GameCenterMatchmakingRuleSetTestAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetTestAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'matchmakingResults': json['matchmakingResults'] == null ? undefined : json['matchmakingResults'],
    };
}

export function GameCenterMatchmakingRuleSetTestAttributesToJSON(json: any): GameCenterMatchmakingRuleSetTestAttributes {
    return GameCenterMatchmakingRuleSetTestAttributesToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestAttributesToJSONTyped(value?: GameCenterMatchmakingRuleSetTestAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'matchmakingResults': value['matchmakingResults'],
    };
}
