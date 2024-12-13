
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
import type { GameCenterPlayerAchievementSubmission } from './GameCenterPlayerAchievementSubmission';
import {
    GameCenterPlayerAchievementSubmissionFromJSON,
    GameCenterPlayerAchievementSubmissionFromJSONTyped,
    GameCenterPlayerAchievementSubmissionToJSON,
    GameCenterPlayerAchievementSubmissionToJSONTyped,
} from './GameCenterPlayerAchievementSubmission';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface GameCenterPlayerAchievementSubmissionResponse
 */
export interface GameCenterPlayerAchievementSubmissionResponse {
    /**
     * 
     * @type {GameCenterPlayerAchievementSubmission}
     * @memberof GameCenterPlayerAchievementSubmissionResponse
     */
    data: GameCenterPlayerAchievementSubmission;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterPlayerAchievementSubmissionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterPlayerAchievementSubmissionResponse interface.
 */
export function instanceOfGameCenterPlayerAchievementSubmissionResponse(value: object): value is GameCenterPlayerAchievementSubmissionResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterPlayerAchievementSubmissionResponseFromJSON(json: any): GameCenterPlayerAchievementSubmissionResponse {
    return GameCenterPlayerAchievementSubmissionResponseFromJSONTyped(json, false);
}

export function GameCenterPlayerAchievementSubmissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterPlayerAchievementSubmissionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterPlayerAchievementSubmissionFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterPlayerAchievementSubmissionResponseToJSON(json: any): GameCenterPlayerAchievementSubmissionResponse {
    return GameCenterPlayerAchievementSubmissionResponseToJSONTyped(json, false);
}

export function GameCenterPlayerAchievementSubmissionResponseToJSONTyped(value?: GameCenterPlayerAchievementSubmissionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterPlayerAchievementSubmissionToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}
