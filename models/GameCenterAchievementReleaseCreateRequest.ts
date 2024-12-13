
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
import type { GameCenterAchievementReleaseCreateRequestData } from './GameCenterAchievementReleaseCreateRequestData';
import {
    GameCenterAchievementReleaseCreateRequestDataFromJSON,
    GameCenterAchievementReleaseCreateRequestDataFromJSONTyped,
    GameCenterAchievementReleaseCreateRequestDataToJSON,
    GameCenterAchievementReleaseCreateRequestDataToJSONTyped,
} from './GameCenterAchievementReleaseCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterAchievementReleaseCreateRequest
 */
export interface GameCenterAchievementReleaseCreateRequest {
    /**
     * 
     * @type {GameCenterAchievementReleaseCreateRequestData}
     * @memberof GameCenterAchievementReleaseCreateRequest
     */
    data: GameCenterAchievementReleaseCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterAchievementReleaseCreateRequest interface.
 */
export function instanceOfGameCenterAchievementReleaseCreateRequest(value: object): value is GameCenterAchievementReleaseCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterAchievementReleaseCreateRequestFromJSON(json: any): GameCenterAchievementReleaseCreateRequest {
    return GameCenterAchievementReleaseCreateRequestFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterAchievementReleaseCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementReleaseCreateRequestToJSON(json: any): GameCenterAchievementReleaseCreateRequest {
    return GameCenterAchievementReleaseCreateRequestToJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestToJSONTyped(value?: GameCenterAchievementReleaseCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterAchievementReleaseCreateRequestDataToJSON(value['data']),
    };
}

