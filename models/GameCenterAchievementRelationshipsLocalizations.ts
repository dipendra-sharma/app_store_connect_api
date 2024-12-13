
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
import type { GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData } from './GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData';
import {
    GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataFromJSON,
    GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataFromJSONTyped,
    GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataToJSON,
    GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataToJSONTyped,
} from './GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData';

/**
 * 
 * @export
 * @interface GameCenterAchievementRelationshipsLocalizations
 */
export interface GameCenterAchievementRelationshipsLocalizations {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterAchievementRelationshipsLocalizations
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterAchievementRelationshipsLocalizations
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData>}
     * @memberof GameCenterAchievementRelationshipsLocalizations
     */
    data?: Array<GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationData>;
}

/**
 * Check if a given object implements the GameCenterAchievementRelationshipsLocalizations interface.
 */
export function instanceOfGameCenterAchievementRelationshipsLocalizations(value: object): value is GameCenterAchievementRelationshipsLocalizations {
    return true;
}

export function GameCenterAchievementRelationshipsLocalizationsFromJSON(json: any): GameCenterAchievementRelationshipsLocalizations {
    return GameCenterAchievementRelationshipsLocalizationsFromJSONTyped(json, false);
}

export function GameCenterAchievementRelationshipsLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementRelationshipsLocalizations {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataFromJSON)),
    };
}

export function GameCenterAchievementRelationshipsLocalizationsToJSON(json: any): GameCenterAchievementRelationshipsLocalizations {
    return GameCenterAchievementRelationshipsLocalizationsToJSONTyped(json, false);
}

export function GameCenterAchievementRelationshipsLocalizationsToJSONTyped(value?: GameCenterAchievementRelationshipsLocalizations | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(GameCenterAchievementImageRelationshipsGameCenterAchievementLocalizationDataToJSON)),
    };
}
