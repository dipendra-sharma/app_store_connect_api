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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
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
 * @interface GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse
 */
export interface GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse {
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>}
     * @memberof GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse
     */
    data: Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse interface.
 */
export function instanceOfGameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse(value: object): value is GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponseFromJSON(json: any): GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse {
    return GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponseToJSON(json: any): GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse {
    return GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponseToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponseToJSONTyped(value?: GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

