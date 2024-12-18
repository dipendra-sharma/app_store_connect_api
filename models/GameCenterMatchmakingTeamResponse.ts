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
import type { GameCenterMatchmakingTeam } from './GameCenterMatchmakingTeam';
import {
    GameCenterMatchmakingTeamFromJSON,
    GameCenterMatchmakingTeamFromJSONTyped,
    GameCenterMatchmakingTeamToJSON,
    GameCenterMatchmakingTeamToJSONTyped,
} from './GameCenterMatchmakingTeam';
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
 * @interface GameCenterMatchmakingTeamResponse
 */
export interface GameCenterMatchmakingTeamResponse {
    /**
     * 
     * @type {GameCenterMatchmakingTeam}
     * @memberof GameCenterMatchmakingTeamResponse
     */
    data: GameCenterMatchmakingTeam;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterMatchmakingTeamResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTeamResponse interface.
 */
export function instanceOfGameCenterMatchmakingTeamResponse(value: object): value is GameCenterMatchmakingTeamResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingTeamResponseFromJSON(json: any): GameCenterMatchmakingTeamResponse {
    return GameCenterMatchmakingTeamResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingTeamFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingTeamResponseToJSON(json: any): GameCenterMatchmakingTeamResponse {
    return GameCenterMatchmakingTeamResponseToJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamResponseToJSONTyped(value?: GameCenterMatchmakingTeamResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterMatchmakingTeamToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

