
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
import type { GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests } from './GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests';
import {
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsFromJSON,
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsFromJSONTyped,
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsToJSON,
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsToJSONTyped,
} from './GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships
 */
export interface GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships
     */
    matchmakingRuleSet: GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet;
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships
     */
    matchmakingRequests: GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetTestCreateRequestDataRelationships(value: object): value is GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships {
    if (!('matchmakingRuleSet' in value) || value['matchmakingRuleSet'] === undefined) return false;
    if (!('matchmakingRequests' in value) || value['matchmakingRequests'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSON(json: any): GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships {
    return GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'matchmakingRuleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON(json['matchmakingRuleSet']),
        'matchmakingRequests': GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsFromJSON(json['matchmakingRequests']),
    };
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsToJSON(json: any): GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships {
    return GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsToJSONTyped(value?: GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'matchmakingRuleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON(value['matchmakingRuleSet']),
        'matchmakingRequests': GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsToJSON(value['matchmakingRequests']),
    };
}
