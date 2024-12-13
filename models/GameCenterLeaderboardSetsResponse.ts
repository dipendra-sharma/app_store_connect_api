
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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
import type { GameCenterLeaderboardSet } from './GameCenterLeaderboardSet';
import {
    GameCenterLeaderboardSetFromJSON,
    GameCenterLeaderboardSetFromJSONTyped,
    GameCenterLeaderboardSetToJSON,
    GameCenterLeaderboardSetToJSONTyped,
} from './GameCenterLeaderboardSet';
import type { GameCenterLeaderboardSetsResponseIncludedInner } from './GameCenterLeaderboardSetsResponseIncludedInner';
import {
    GameCenterLeaderboardSetsResponseIncludedInnerFromJSON,
    GameCenterLeaderboardSetsResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardSetsResponseIncludedInnerToJSON,
    GameCenterLeaderboardSetsResponseIncludedInnerToJSONTyped,
} from './GameCenterLeaderboardSetsResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetsResponse
 */
export interface GameCenterLeaderboardSetsResponse {
    /**
     * 
     * @type {Array<GameCenterLeaderboardSet>}
     * @memberof GameCenterLeaderboardSetsResponse
     */
    data: Array<GameCenterLeaderboardSet>;
    /**
     * 
     * @type {Array<GameCenterLeaderboardSetsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardSetsResponse
     */
    included?: Array<GameCenterLeaderboardSetsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterLeaderboardSetsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardSetsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetsResponse interface.
 */
export function instanceOfGameCenterLeaderboardSetsResponse(value: object): value is GameCenterLeaderboardSetsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetsResponseFromJSON(json: any): GameCenterLeaderboardSetsResponse {
    return GameCenterLeaderboardSetsResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterLeaderboardSetFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardSetsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterLeaderboardSetsResponseToJSON(json: any): GameCenterLeaderboardSetsResponse {
    return GameCenterLeaderboardSetsResponseToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetsResponseToJSONTyped(value?: GameCenterLeaderboardSetsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(GameCenterLeaderboardSetToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(GameCenterLeaderboardSetsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
