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
 * @interface GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet
 */
export interface GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet {
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner}
     * @memberof GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet
     */
    data?: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet(value: object): value is GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet {
    return true;
}

export function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetFromJSON(json: any): GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet {
    return GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetToJSON(json: any): GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet {
    return GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetToJSONTyped(value?: GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON(value['data']),
    };
}

