
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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner } from './GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSONTyped,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardGroupLeaderboardLinkageRequest
 */
export interface GameCenterLeaderboardGroupLeaderboardLinkageRequest {
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner}
     * @memberof GameCenterLeaderboardGroupLeaderboardLinkageRequest
     */
    data: GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner;
}

/**
 * Check if a given object implements the GameCenterLeaderboardGroupLeaderboardLinkageRequest interface.
 */
export function instanceOfGameCenterLeaderboardGroupLeaderboardLinkageRequest(value: object): value is GameCenterLeaderboardGroupLeaderboardLinkageRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSON(json: any): GameCenterLeaderboardGroupLeaderboardLinkageRequest {
    return GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardGroupLeaderboardLinkageRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardGroupLeaderboardLinkageRequestToJSON(json: any): GameCenterLeaderboardGroupLeaderboardLinkageRequest {
    return GameCenterLeaderboardGroupLeaderboardLinkageRequestToJSONTyped(json, false);
}

export function GameCenterLeaderboardGroupLeaderboardLinkageRequestToJSONTyped(value?: GameCenterLeaderboardGroupLeaderboardLinkageRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON(value['data']),
    };
}

