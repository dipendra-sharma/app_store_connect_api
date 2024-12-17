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
import type { GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData } from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData';
import {
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSON,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSONTyped,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSON,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSONTyped,
} from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization
 */
export interface GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization {
    /**
     * 
     * @type {GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData}
     * @memberof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization
     */
    data?: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization interface.
 */
export function instanceOfGameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization(value: object): value is GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization {
    return true;
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSON(json: any): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization {
    return GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationToJSON(json: any): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization {
    return GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationToJSONTyped(value?: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSON(value['data']),
    };
}

