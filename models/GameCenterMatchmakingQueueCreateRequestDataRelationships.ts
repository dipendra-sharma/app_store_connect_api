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
import type { GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet } from './GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet';
import {
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON,
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSONTyped,
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON,
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSONTyped,
} from './GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet';
import type { GameCenterMatchmakingQueueRelationshipsRuleSet } from './GameCenterMatchmakingQueueRelationshipsRuleSet';
import {
    GameCenterMatchmakingQueueRelationshipsRuleSetFromJSON,
    GameCenterMatchmakingQueueRelationshipsRuleSetFromJSONTyped,
    GameCenterMatchmakingQueueRelationshipsRuleSetToJSON,
    GameCenterMatchmakingQueueRelationshipsRuleSetToJSONTyped,
} from './GameCenterMatchmakingQueueRelationshipsRuleSet';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueCreateRequestDataRelationships
 */
export interface GameCenterMatchmakingQueueCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet}
     * @memberof GameCenterMatchmakingQueueCreateRequestDataRelationships
     */
    ruleSet: GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet;
    /**
     * 
     * @type {GameCenterMatchmakingQueueRelationshipsRuleSet}
     * @memberof GameCenterMatchmakingQueueCreateRequestDataRelationships
     */
    experimentRuleSet?: GameCenterMatchmakingQueueRelationshipsRuleSet;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterMatchmakingQueueCreateRequestDataRelationships(value: object): value is GameCenterMatchmakingQueueCreateRequestDataRelationships {
    if (!('ruleSet' in value) || value['ruleSet'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSON(json: any): GameCenterMatchmakingQueueCreateRequestDataRelationships {
    return GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'ruleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON(json['ruleSet']),
        'experimentRuleSet': json['experimentRuleSet'] == null ? undefined : GameCenterMatchmakingQueueRelationshipsRuleSetFromJSON(json['experimentRuleSet']),
    };
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsToJSON(json: any): GameCenterMatchmakingQueueCreateRequestDataRelationships {
    return GameCenterMatchmakingQueueCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsToJSONTyped(value?: GameCenterMatchmakingQueueCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ruleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON(value['ruleSet']),
        'experimentRuleSet': GameCenterMatchmakingQueueRelationshipsRuleSetToJSON(value['experimentRuleSet']),
    };
}

