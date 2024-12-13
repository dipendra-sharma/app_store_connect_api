
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
import type { GameCenterAchievementUpdateRequestData } from './GameCenterAchievementUpdateRequestData';
import {
    GameCenterAchievementUpdateRequestDataFromJSON,
    GameCenterAchievementUpdateRequestDataFromJSONTyped,
    GameCenterAchievementUpdateRequestDataToJSON,
    GameCenterAchievementUpdateRequestDataToJSONTyped,
} from './GameCenterAchievementUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterAchievementUpdateRequest
 */
export interface GameCenterAchievementUpdateRequest {
    /**
     * 
     * @type {GameCenterAchievementUpdateRequestData}
     * @memberof GameCenterAchievementUpdateRequest
     */
    data: GameCenterAchievementUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterAchievementUpdateRequest interface.
 */
export function instanceOfGameCenterAchievementUpdateRequest(value: object): value is GameCenterAchievementUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterAchievementUpdateRequestFromJSON(json: any): GameCenterAchievementUpdateRequest {
    return GameCenterAchievementUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterAchievementUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterAchievementUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementUpdateRequestToJSON(json: any): GameCenterAchievementUpdateRequest {
    return GameCenterAchievementUpdateRequestToJSONTyped(json, false);
}

export function GameCenterAchievementUpdateRequestToJSONTyped(value?: GameCenterAchievementUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterAchievementUpdateRequestDataToJSON(value['data']),
    };
}
