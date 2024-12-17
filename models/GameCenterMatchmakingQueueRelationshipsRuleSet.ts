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
import type { GameCenterMatchmakingQueueRelationshipsRuleSetData } from './GameCenterMatchmakingQueueRelationshipsRuleSetData';
import {
    GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSON,
    GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSONTyped,
    GameCenterMatchmakingQueueRelationshipsRuleSetDataToJSON,
    GameCenterMatchmakingQueueRelationshipsRuleSetDataToJSONTyped,
} from './GameCenterMatchmakingQueueRelationshipsRuleSetData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueRelationshipsRuleSet
 */
export interface GameCenterMatchmakingQueueRelationshipsRuleSet {
    /**
     * 
     * @type {GameCenterMatchmakingQueueRelationshipsRuleSetData}
     * @memberof GameCenterMatchmakingQueueRelationshipsRuleSet
     */
    data?: GameCenterMatchmakingQueueRelationshipsRuleSetData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueRelationshipsRuleSet interface.
 */
export function instanceOfGameCenterMatchmakingQueueRelationshipsRuleSet(value: object): value is GameCenterMatchmakingQueueRelationshipsRuleSet {
    return true;
}

export function GameCenterMatchmakingQueueRelationshipsRuleSetFromJSON(json: any): GameCenterMatchmakingQueueRelationshipsRuleSet {
    return GameCenterMatchmakingQueueRelationshipsRuleSetFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueRelationshipsRuleSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueRelationshipsRuleSet {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingQueueRelationshipsRuleSetToJSON(json: any): GameCenterMatchmakingQueueRelationshipsRuleSet {
    return GameCenterMatchmakingQueueRelationshipsRuleSetToJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueRelationshipsRuleSetToJSONTyped(value?: GameCenterMatchmakingQueueRelationshipsRuleSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterMatchmakingQueueRelationshipsRuleSetDataToJSON(value['data']),
    };
}

