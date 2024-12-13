
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
import type { GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData } from './GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData';
import {
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSON,
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSONTyped,
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataToJSON,
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataToJSONTyped,
} from './GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization
 */
export interface GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization {
    /**
     * 
     * @type {GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData}
     * @memberof GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization
     */
    data: GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization interface.
 */
export function instanceOfGameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization(value: object): value is GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSON(json: any): GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization {
    return GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSON(json: any): GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization {
    return GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSONTyped(json, false);
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSONTyped(value?: GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataToJSON(value['data']),
    };
}
