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
import type { GameCenterPlayerAchievementSubmissionCreateRequestData } from './GameCenterPlayerAchievementSubmissionCreateRequestData';
import {
    GameCenterPlayerAchievementSubmissionCreateRequestDataFromJSON,
    GameCenterPlayerAchievementSubmissionCreateRequestDataFromJSONTyped,
    GameCenterPlayerAchievementSubmissionCreateRequestDataToJSON,
    GameCenterPlayerAchievementSubmissionCreateRequestDataToJSONTyped,
} from './GameCenterPlayerAchievementSubmissionCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterPlayerAchievementSubmissionCreateRequest
 */
export interface GameCenterPlayerAchievementSubmissionCreateRequest {
    /**
     * 
     * @type {GameCenterPlayerAchievementSubmissionCreateRequestData}
     * @memberof GameCenterPlayerAchievementSubmissionCreateRequest
     */
    data: GameCenterPlayerAchievementSubmissionCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterPlayerAchievementSubmissionCreateRequest interface.
 */
export function instanceOfGameCenterPlayerAchievementSubmissionCreateRequest(value: object): value is GameCenterPlayerAchievementSubmissionCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterPlayerAchievementSubmissionCreateRequestFromJSON(json: any): GameCenterPlayerAchievementSubmissionCreateRequest {
    return GameCenterPlayerAchievementSubmissionCreateRequestFromJSONTyped(json, false);
}

export function GameCenterPlayerAchievementSubmissionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterPlayerAchievementSubmissionCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterPlayerAchievementSubmissionCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterPlayerAchievementSubmissionCreateRequestToJSON(json: any): GameCenterPlayerAchievementSubmissionCreateRequest {
    return GameCenterPlayerAchievementSubmissionCreateRequestToJSONTyped(json, false);
}

export function GameCenterPlayerAchievementSubmissionCreateRequestToJSONTyped(value?: GameCenterPlayerAchievementSubmissionCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterPlayerAchievementSubmissionCreateRequestDataToJSON(value['data']),
    };
}

