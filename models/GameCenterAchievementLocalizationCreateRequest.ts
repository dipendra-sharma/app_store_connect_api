
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
import type { GameCenterAchievementLocalizationCreateRequestData } from './GameCenterAchievementLocalizationCreateRequestData';
import {
    GameCenterAchievementLocalizationCreateRequestDataFromJSON,
    GameCenterAchievementLocalizationCreateRequestDataFromJSONTyped,
    GameCenterAchievementLocalizationCreateRequestDataToJSON,
    GameCenterAchievementLocalizationCreateRequestDataToJSONTyped,
} from './GameCenterAchievementLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationCreateRequest
 */
export interface GameCenterAchievementLocalizationCreateRequest {
    /**
     * 
     * @type {GameCenterAchievementLocalizationCreateRequestData}
     * @memberof GameCenterAchievementLocalizationCreateRequest
     */
    data: GameCenterAchievementLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterAchievementLocalizationCreateRequest interface.
 */
export function instanceOfGameCenterAchievementLocalizationCreateRequest(value: object): value is GameCenterAchievementLocalizationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterAchievementLocalizationCreateRequestFromJSON(json: any): GameCenterAchievementLocalizationCreateRequest {
    return GameCenterAchievementLocalizationCreateRequestFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterAchievementLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementLocalizationCreateRequestToJSON(json: any): GameCenterAchievementLocalizationCreateRequest {
    return GameCenterAchievementLocalizationCreateRequestToJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationCreateRequestToJSONTyped(value?: GameCenterAchievementLocalizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterAchievementLocalizationCreateRequestDataToJSON(value['data']),
    };
}

