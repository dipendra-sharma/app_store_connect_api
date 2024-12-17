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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
import type { GameCenterLeaderboardRelease } from './GameCenterLeaderboardRelease';
import {
    GameCenterLeaderboardReleaseFromJSON,
    GameCenterLeaderboardReleaseFromJSONTyped,
    GameCenterLeaderboardReleaseToJSON,
    GameCenterLeaderboardReleaseToJSONTyped,
} from './GameCenterLeaderboardRelease';
import type { GameCenterLeaderboardReleasesResponseIncludedInner } from './GameCenterLeaderboardReleasesResponseIncludedInner';
import {
    GameCenterLeaderboardReleasesResponseIncludedInnerFromJSON,
    GameCenterLeaderboardReleasesResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardReleasesResponseIncludedInnerToJSON,
    GameCenterLeaderboardReleasesResponseIncludedInnerToJSONTyped,
} from './GameCenterLeaderboardReleasesResponseIncludedInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardReleasesResponse
 */
export interface GameCenterLeaderboardReleasesResponse {
    /**
     * 
     * @type {Array<GameCenterLeaderboardRelease>}
     * @memberof GameCenterLeaderboardReleasesResponse
     */
    data: Array<GameCenterLeaderboardRelease>;
    /**
     * 
     * @type {Array<GameCenterLeaderboardReleasesResponseIncludedInner>}
     * @memberof GameCenterLeaderboardReleasesResponse
     */
    included?: Array<GameCenterLeaderboardReleasesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterLeaderboardReleasesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardReleasesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterLeaderboardReleasesResponse interface.
 */
export function instanceOfGameCenterLeaderboardReleasesResponse(value: object): value is GameCenterLeaderboardReleasesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardReleasesResponseFromJSON(json: any): GameCenterLeaderboardReleasesResponse {
    return GameCenterLeaderboardReleasesResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardReleasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardReleasesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterLeaderboardReleaseFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardReleasesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterLeaderboardReleasesResponseToJSON(json: any): GameCenterLeaderboardReleasesResponse {
    return GameCenterLeaderboardReleasesResponseToJSONTyped(json, false);
}

export function GameCenterLeaderboardReleasesResponseToJSONTyped(value?: GameCenterLeaderboardReleasesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(GameCenterLeaderboardReleaseToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(GameCenterLeaderboardReleasesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

