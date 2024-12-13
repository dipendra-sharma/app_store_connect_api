
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

import type { GameCenterMatchmakingQueue } from './GameCenterMatchmakingQueue';
import {
    instanceOfGameCenterMatchmakingQueue,
    GameCenterMatchmakingQueueFromJSON,
    GameCenterMatchmakingQueueFromJSONTyped,
    GameCenterMatchmakingQueueToJSON,
} from './GameCenterMatchmakingQueue';
import type { GameCenterMatchmakingRule } from './GameCenterMatchmakingRule';
import {
    instanceOfGameCenterMatchmakingRule,
    GameCenterMatchmakingRuleFromJSON,
    GameCenterMatchmakingRuleFromJSONTyped,
    GameCenterMatchmakingRuleToJSON,
} from './GameCenterMatchmakingRule';
import type { GameCenterMatchmakingTeam } from './GameCenterMatchmakingTeam';
import {
    instanceOfGameCenterMatchmakingTeam,
    GameCenterMatchmakingTeamFromJSON,
    GameCenterMatchmakingTeamFromJSONTyped,
    GameCenterMatchmakingTeamToJSON,
} from './GameCenterMatchmakingTeam';

/**
 * @type GameCenterMatchmakingRuleSetsResponseIncludedInner
 * 
 * @export
 */
export type GameCenterMatchmakingRuleSetsResponseIncludedInner = GameCenterMatchmakingQueue | GameCenterMatchmakingRule | GameCenterMatchmakingTeam;

export function GameCenterMatchmakingRuleSetsResponseIncludedInnerFromJSON(json: any): GameCenterMatchmakingRuleSetsResponseIncludedInner {
    return GameCenterMatchmakingRuleSetsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfGameCenterMatchmakingQueue(json)) {
        return GameCenterMatchmakingQueueFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterMatchmakingRule(json)) {
        return GameCenterMatchmakingRuleFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterMatchmakingTeam(json)) {
        return GameCenterMatchmakingTeamFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GameCenterMatchmakingRuleSetsResponseIncludedInnerToJSON(json: any): any {
    return GameCenterMatchmakingRuleSetsResponseIncludedInnerToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetsResponseIncludedInnerToJSONTyped(value?: GameCenterMatchmakingRuleSetsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfGameCenterMatchmakingQueue(value)) {
        return GameCenterMatchmakingQueueToJSON(value as GameCenterMatchmakingQueue);
    }
    if (instanceOfGameCenterMatchmakingRule(value)) {
        return GameCenterMatchmakingRuleToJSON(value as GameCenterMatchmakingRule);
    }
    if (instanceOfGameCenterMatchmakingTeam(value)) {
        return GameCenterMatchmakingTeamToJSON(value as GameCenterMatchmakingTeam);
    }

    return {};
}
