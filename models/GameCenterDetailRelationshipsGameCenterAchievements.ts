
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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSONTyped,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';

/**
 * 
 * @export
 * @interface GameCenterDetailRelationshipsGameCenterAchievements
 */
export interface GameCenterDetailRelationshipsGameCenterAchievements {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterDetailRelationshipsGameCenterAchievements
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterDetailRelationshipsGameCenterAchievements
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>}
     * @memberof GameCenterDetailRelationshipsGameCenterAchievements
     */
    data?: Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>;
}

/**
 * Check if a given object implements the GameCenterDetailRelationshipsGameCenterAchievements interface.
 */
export function instanceOfGameCenterDetailRelationshipsGameCenterAchievements(value: object): value is GameCenterDetailRelationshipsGameCenterAchievements {
    return true;
}

export function GameCenterDetailRelationshipsGameCenterAchievementsFromJSON(json: any): GameCenterDetailRelationshipsGameCenterAchievements {
    return GameCenterDetailRelationshipsGameCenterAchievementsFromJSONTyped(json, false);
}

export function GameCenterDetailRelationshipsGameCenterAchievementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailRelationshipsGameCenterAchievements {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON)),
    };
}

export function GameCenterDetailRelationshipsGameCenterAchievementsToJSON(json: any): GameCenterDetailRelationshipsGameCenterAchievements {
    return GameCenterDetailRelationshipsGameCenterAchievementsToJSONTyped(json, false);
}

export function GameCenterDetailRelationshipsGameCenterAchievementsToJSONTyped(value?: GameCenterDetailRelationshipsGameCenterAchievements | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON)),
    };
}
