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
import type { GameCenterMatchmakingRule } from './GameCenterMatchmakingRule';
import {
    GameCenterMatchmakingRuleFromJSON,
    GameCenterMatchmakingRuleFromJSONTyped,
    GameCenterMatchmakingRuleToJSON,
    GameCenterMatchmakingRuleToJSONTyped,
} from './GameCenterMatchmakingRule';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleResponse
 */
export interface GameCenterMatchmakingRuleResponse {
    /**
     * 
     * @type {GameCenterMatchmakingRule}
     * @memberof GameCenterMatchmakingRuleResponse
     */
    data: GameCenterMatchmakingRule;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterMatchmakingRuleResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleResponse interface.
 */
export function instanceOfGameCenterMatchmakingRuleResponse(value: object): value is GameCenterMatchmakingRuleResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingRuleResponseFromJSON(json: any): GameCenterMatchmakingRuleResponse {
    return GameCenterMatchmakingRuleResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingRuleFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingRuleResponseToJSON(json: any): GameCenterMatchmakingRuleResponse {
    return GameCenterMatchmakingRuleResponseToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleResponseToJSONTyped(value?: GameCenterMatchmakingRuleResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterMatchmakingRuleToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

