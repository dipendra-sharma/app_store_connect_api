
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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner } from './GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner';
import {
    GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerFromJSON,
    GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerFromJSONTyped,
    GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerToJSON,
    GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerToJSONTyped,
} from './GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetRelationshipsTeams
 */
export interface GameCenterMatchmakingRuleSetRelationshipsTeams {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsTeams
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsTeams
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner>}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsTeams
     */
    data?: Array<GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner>;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetRelationshipsTeams interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetRelationshipsTeams(value: object): value is GameCenterMatchmakingRuleSetRelationshipsTeams {
    return true;
}

export function GameCenterMatchmakingRuleSetRelationshipsTeamsFromJSON(json: any): GameCenterMatchmakingRuleSetRelationshipsTeams {
    return GameCenterMatchmakingRuleSetRelationshipsTeamsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetRelationshipsTeamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetRelationshipsTeams {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerFromJSON)),
    };
}

export function GameCenterMatchmakingRuleSetRelationshipsTeamsToJSON(json: any): GameCenterMatchmakingRuleSetRelationshipsTeams {
    return GameCenterMatchmakingRuleSetRelationshipsTeamsToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetRelationshipsTeamsToJSONTyped(value?: GameCenterMatchmakingRuleSetRelationshipsTeams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerToJSON)),
    };
}
