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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
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
 * @interface GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet
 */
export interface GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner}
     * @memberof GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet
     */
    data?: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet interface.
 */
export function instanceOfGameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet(value: object): value is GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet {
    return true;
}

export function GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet {
    return GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetToJSON(json: any): GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet {
    return GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSetToJSONTyped(value?: GameCenterLeaderboardSetMemberLocalizationRelationshipsGameCenterLeaderboardSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON(value['data']),
    };
}

