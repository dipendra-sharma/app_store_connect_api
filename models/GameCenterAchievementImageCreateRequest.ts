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
import type { GameCenterAchievementImageCreateRequestData } from './GameCenterAchievementImageCreateRequestData';
import {
    GameCenterAchievementImageCreateRequestDataFromJSON,
    GameCenterAchievementImageCreateRequestDataFromJSONTyped,
    GameCenterAchievementImageCreateRequestDataToJSON,
    GameCenterAchievementImageCreateRequestDataToJSONTyped,
} from './GameCenterAchievementImageCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterAchievementImageCreateRequest
 */
export interface GameCenterAchievementImageCreateRequest {
    /**
     * 
     * @type {GameCenterAchievementImageCreateRequestData}
     * @memberof GameCenterAchievementImageCreateRequest
     */
    data: GameCenterAchievementImageCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterAchievementImageCreateRequest interface.
 */
export function instanceOfGameCenterAchievementImageCreateRequest(value: object): value is GameCenterAchievementImageCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterAchievementImageCreateRequestFromJSON(json: any): GameCenterAchievementImageCreateRequest {
    return GameCenterAchievementImageCreateRequestFromJSONTyped(json, false);
}

export function GameCenterAchievementImageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementImageCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterAchievementImageCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementImageCreateRequestToJSON(json: any): GameCenterAchievementImageCreateRequest {
    return GameCenterAchievementImageCreateRequestToJSONTyped(json, false);
}

export function GameCenterAchievementImageCreateRequestToJSONTyped(value?: GameCenterAchievementImageCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterAchievementImageCreateRequestDataToJSON(value['data']),
    };
}

