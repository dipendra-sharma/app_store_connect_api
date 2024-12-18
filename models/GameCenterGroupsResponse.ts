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
import type { GameCenterGroupsResponseIncludedInner } from './GameCenterGroupsResponseIncludedInner';
import {
    GameCenterGroupsResponseIncludedInnerFromJSON,
    GameCenterGroupsResponseIncludedInnerFromJSONTyped,
    GameCenterGroupsResponseIncludedInnerToJSON,
    GameCenterGroupsResponseIncludedInnerToJSONTyped,
} from './GameCenterGroupsResponseIncludedInner';
import type { GameCenterGroup } from './GameCenterGroup';
import {
    GameCenterGroupFromJSON,
    GameCenterGroupFromJSONTyped,
    GameCenterGroupToJSON,
    GameCenterGroupToJSONTyped,
} from './GameCenterGroup';
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
 * @interface GameCenterGroupsResponse
 */
export interface GameCenterGroupsResponse {
    /**
     * 
     * @type {Array<GameCenterGroup>}
     * @memberof GameCenterGroupsResponse
     */
    data: Array<GameCenterGroup>;
    /**
     * 
     * @type {Array<GameCenterGroupsResponseIncludedInner>}
     * @memberof GameCenterGroupsResponse
     */
    included?: Array<GameCenterGroupsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterGroupsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterGroupsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterGroupsResponse interface.
 */
export function instanceOfGameCenterGroupsResponse(value: object): value is GameCenterGroupsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterGroupsResponseFromJSON(json: any): GameCenterGroupsResponse {
    return GameCenterGroupsResponseFromJSONTyped(json, false);
}

export function GameCenterGroupsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterGroupFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(GameCenterGroupsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterGroupsResponseToJSON(json: any): GameCenterGroupsResponse {
    return GameCenterGroupsResponseToJSONTyped(json, false);
}

export function GameCenterGroupsResponseToJSONTyped(value?: GameCenterGroupsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(GameCenterGroupToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(GameCenterGroupsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

