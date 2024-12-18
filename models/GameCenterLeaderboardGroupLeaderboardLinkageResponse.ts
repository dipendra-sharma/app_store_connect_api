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
 * @interface GameCenterLeaderboardGroupLeaderboardLinkageResponse
 */
export interface GameCenterLeaderboardGroupLeaderboardLinkageResponse {
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner}
     * @memberof GameCenterLeaderboardGroupLeaderboardLinkageResponse
     */
    data: GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardGroupLeaderboardLinkageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardGroupLeaderboardLinkageResponse interface.
 */
export function instanceOfGameCenterLeaderboardGroupLeaderboardLinkageResponse(value: object): value is GameCenterLeaderboardGroupLeaderboardLinkageResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardGroupLeaderboardLinkageResponseFromJSON(json: any): GameCenterLeaderboardGroupLeaderboardLinkageResponse {
    return GameCenterLeaderboardGroupLeaderboardLinkageResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardGroupLeaderboardLinkageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardGroupLeaderboardLinkageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardGroupLeaderboardLinkageResponseToJSON(json: any): GameCenterLeaderboardGroupLeaderboardLinkageResponse {
    return GameCenterLeaderboardGroupLeaderboardLinkageResponseToJSONTyped(json, false);
}

export function GameCenterLeaderboardGroupLeaderboardLinkageResponseToJSONTyped(value?: GameCenterLeaderboardGroupLeaderboardLinkageResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

