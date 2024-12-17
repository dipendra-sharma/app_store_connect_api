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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner } from './GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSONTyped,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner';

/**
 * 
 * @export
 * @interface GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest
 */
export interface GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest {
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>}
     * @memberof GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest
     */
    data: Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>;
}

/**
 * Check if a given object implements the GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest interface.
 */
export function instanceOfGameCenterGroupGameCenterLeaderboardSetsLinkagesRequest(value: object): value is GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterGroupGameCenterLeaderboardSetsLinkagesRequestFromJSON(json: any): GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest {
    return GameCenterGroupGameCenterLeaderboardSetsLinkagesRequestFromJSONTyped(json, false);
}

export function GameCenterGroupGameCenterLeaderboardSetsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON)),
    };
}

export function GameCenterGroupGameCenterLeaderboardSetsLinkagesRequestToJSON(json: any): GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest {
    return GameCenterGroupGameCenterLeaderboardSetsLinkagesRequestToJSONTyped(json, false);
}

export function GameCenterGroupGameCenterLeaderboardSetsLinkagesRequestToJSONTyped(value?: GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON)),
    };
}

