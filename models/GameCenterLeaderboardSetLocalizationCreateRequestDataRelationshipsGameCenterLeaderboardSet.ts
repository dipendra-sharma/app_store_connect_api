
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
 * @interface GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet
 */
export interface GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet {
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner}
     * @memberof GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet
     */
    data: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet(value: object): value is GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSON(json: any): GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet {
    return GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetToJSON(json: any): GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet {
    return GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetToJSONTyped(value?: GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON(value['data']),
    };
}

