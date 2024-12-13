
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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
import type { GameCenterMatchmakingRuleSetTest } from './GameCenterMatchmakingRuleSetTest';
import {
    GameCenterMatchmakingRuleSetTestFromJSON,
    GameCenterMatchmakingRuleSetTestFromJSONTyped,
    GameCenterMatchmakingRuleSetTestToJSON,
    GameCenterMatchmakingRuleSetTestToJSONTyped,
} from './GameCenterMatchmakingRuleSetTest';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetTestResponse
 */
export interface GameCenterMatchmakingRuleSetTestResponse {
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetTest}
     * @memberof GameCenterMatchmakingRuleSetTestResponse
     */
    data: GameCenterMatchmakingRuleSetTest;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterMatchmakingRuleSetTestResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTestResponse interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetTestResponse(value: object): value is GameCenterMatchmakingRuleSetTestResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingRuleSetTestResponseFromJSON(json: any): GameCenterMatchmakingRuleSetTestResponse {
    return GameCenterMatchmakingRuleSetTestResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetTestResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingRuleSetTestFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingRuleSetTestResponseToJSON(json: any): GameCenterMatchmakingRuleSetTestResponse {
    return GameCenterMatchmakingRuleSetTestResponseToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestResponseToJSONTyped(value?: GameCenterMatchmakingRuleSetTestResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterMatchmakingRuleSetTestToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}
