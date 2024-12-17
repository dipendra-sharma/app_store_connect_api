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
import type { GameCenterAchievementRelationshipsReleasesDataInner } from './GameCenterAchievementRelationshipsReleasesDataInner';
import {
    GameCenterAchievementRelationshipsReleasesDataInnerFromJSON,
    GameCenterAchievementRelationshipsReleasesDataInnerFromJSONTyped,
    GameCenterAchievementRelationshipsReleasesDataInnerToJSON,
    GameCenterAchievementRelationshipsReleasesDataInnerToJSONTyped,
} from './GameCenterAchievementRelationshipsReleasesDataInner';
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
 * @interface GameCenterAchievementRelationshipsReleases
 */
export interface GameCenterAchievementRelationshipsReleases {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterAchievementRelationshipsReleases
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterAchievementRelationshipsReleases
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<GameCenterAchievementRelationshipsReleasesDataInner>}
     * @memberof GameCenterAchievementRelationshipsReleases
     */
    data?: Array<GameCenterAchievementRelationshipsReleasesDataInner>;
}

/**
 * Check if a given object implements the GameCenterAchievementRelationshipsReleases interface.
 */
export function instanceOfGameCenterAchievementRelationshipsReleases(value: object): value is GameCenterAchievementRelationshipsReleases {
    return true;
}

export function GameCenterAchievementRelationshipsReleasesFromJSON(json: any): GameCenterAchievementRelationshipsReleases {
    return GameCenterAchievementRelationshipsReleasesFromJSONTyped(json, false);
}

export function GameCenterAchievementRelationshipsReleasesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementRelationshipsReleases {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(GameCenterAchievementRelationshipsReleasesDataInnerFromJSON)),
    };
}

export function GameCenterAchievementRelationshipsReleasesToJSON(json: any): GameCenterAchievementRelationshipsReleases {
    return GameCenterAchievementRelationshipsReleasesToJSONTyped(json, false);
}

export function GameCenterAchievementRelationshipsReleasesToJSONTyped(value?: GameCenterAchievementRelationshipsReleases | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(GameCenterAchievementRelationshipsReleasesDataInnerToJSON)),
    };
}

