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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface GameCenterDetailRelationshipsGameCenterLeaderboards
 */
export interface GameCenterDetailRelationshipsGameCenterLeaderboards {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterDetailRelationshipsGameCenterLeaderboards
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterDetailRelationshipsGameCenterLeaderboards
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>}
     * @memberof GameCenterDetailRelationshipsGameCenterLeaderboards
     */
    data?: Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>;
}

/**
 * Check if a given object implements the GameCenterDetailRelationshipsGameCenterLeaderboards interface.
 */
export function instanceOfGameCenterDetailRelationshipsGameCenterLeaderboards(value: object): value is GameCenterDetailRelationshipsGameCenterLeaderboards {
    return true;
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSON(json: any): GameCenterDetailRelationshipsGameCenterLeaderboards {
    return GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSONTyped(json, false);
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailRelationshipsGameCenterLeaderboards {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)),
    };
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsToJSON(json: any): GameCenterDetailRelationshipsGameCenterLeaderboards {
    return GameCenterDetailRelationshipsGameCenterLeaderboardsToJSONTyped(json, false);
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsToJSONTyped(value?: GameCenterDetailRelationshipsGameCenterLeaderboards | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON)),
    };
}

