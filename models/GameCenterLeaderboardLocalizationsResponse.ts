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
import type { GameCenterLeaderboardLocalizationsResponseIncludedInner } from './GameCenterLeaderboardLocalizationsResponseIncludedInner';
import {
    GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSON,
    GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSON,
    GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSONTyped,
} from './GameCenterLeaderboardLocalizationsResponseIncludedInner';
import type { GameCenterLeaderboardLocalization } from './GameCenterLeaderboardLocalization';
import {
    GameCenterLeaderboardLocalizationFromJSON,
    GameCenterLeaderboardLocalizationFromJSONTyped,
    GameCenterLeaderboardLocalizationToJSON,
    GameCenterLeaderboardLocalizationToJSONTyped,
} from './GameCenterLeaderboardLocalization';
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
 * @interface GameCenterLeaderboardLocalizationsResponse
 */
export interface GameCenterLeaderboardLocalizationsResponse {
    /**
     * 
     * @type {Array<GameCenterLeaderboardLocalization>}
     * @memberof GameCenterLeaderboardLocalizationsResponse
     */
    data: Array<GameCenterLeaderboardLocalization>;
    /**
     * 
     * @type {Array<GameCenterLeaderboardLocalizationsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardLocalizationsResponse
     */
    included?: Array<GameCenterLeaderboardLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterLeaderboardLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationsResponse interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationsResponse(value: object): value is GameCenterLeaderboardLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardLocalizationsResponseFromJSON(json: any): GameCenterLeaderboardLocalizationsResponse {
    return GameCenterLeaderboardLocalizationsResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterLeaderboardLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterLeaderboardLocalizationsResponseToJSON(json: any): GameCenterLeaderboardLocalizationsResponse {
    return GameCenterLeaderboardLocalizationsResponseToJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationsResponseToJSONTyped(value?: GameCenterLeaderboardLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(GameCenterLeaderboardLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

