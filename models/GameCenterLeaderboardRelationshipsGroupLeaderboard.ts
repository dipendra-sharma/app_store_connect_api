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
 * @interface GameCenterLeaderboardRelationshipsGroupLeaderboard
 */
export interface GameCenterLeaderboardRelationshipsGroupLeaderboard {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterLeaderboardRelationshipsGroupLeaderboard
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner}
     * @memberof GameCenterLeaderboardRelationshipsGroupLeaderboard
     */
    data?: GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner;
}

/**
 * Check if a given object implements the GameCenterLeaderboardRelationshipsGroupLeaderboard interface.
 */
export function instanceOfGameCenterLeaderboardRelationshipsGroupLeaderboard(value: object): value is GameCenterLeaderboardRelationshipsGroupLeaderboard {
    return true;
}

export function GameCenterLeaderboardRelationshipsGroupLeaderboardFromJSON(json: any): GameCenterLeaderboardRelationshipsGroupLeaderboard {
    return GameCenterLeaderboardRelationshipsGroupLeaderboardFromJSONTyped(json, false);
}

export function GameCenterLeaderboardRelationshipsGroupLeaderboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardRelationshipsGroupLeaderboard {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardRelationshipsGroupLeaderboardToJSON(json: any): GameCenterLeaderboardRelationshipsGroupLeaderboard {
    return GameCenterLeaderboardRelationshipsGroupLeaderboardToJSONTyped(json, false);
}

export function GameCenterLeaderboardRelationshipsGroupLeaderboardToJSONTyped(value?: GameCenterLeaderboardRelationshipsGroupLeaderboard | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON(value['data']),
    };
}

