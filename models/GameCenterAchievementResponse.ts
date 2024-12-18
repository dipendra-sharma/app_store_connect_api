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
import type { GameCenterAchievementsResponseIncludedInner } from './GameCenterAchievementsResponseIncludedInner';
import {
    GameCenterAchievementsResponseIncludedInnerFromJSON,
    GameCenterAchievementsResponseIncludedInnerFromJSONTyped,
    GameCenterAchievementsResponseIncludedInnerToJSON,
    GameCenterAchievementsResponseIncludedInnerToJSONTyped,
} from './GameCenterAchievementsResponseIncludedInner';
import type { GameCenterAchievement } from './GameCenterAchievement';
import {
    GameCenterAchievementFromJSON,
    GameCenterAchievementFromJSONTyped,
    GameCenterAchievementToJSON,
    GameCenterAchievementToJSONTyped,
} from './GameCenterAchievement';
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
 * @interface GameCenterAchievementResponse
 */
export interface GameCenterAchievementResponse {
    /**
     * 
     * @type {GameCenterAchievement}
     * @memberof GameCenterAchievementResponse
     */
    data: GameCenterAchievement;
    /**
     * 
     * @type {Array<GameCenterAchievementsResponseIncludedInner>}
     * @memberof GameCenterAchievementResponse
     */
    included?: Array<GameCenterAchievementsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterAchievementResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterAchievementResponse interface.
 */
export function instanceOfGameCenterAchievementResponse(value: object): value is GameCenterAchievementResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterAchievementResponseFromJSON(json: any): GameCenterAchievementResponse {
    return GameCenterAchievementResponseFromJSONTyped(json, false);
}

export function GameCenterAchievementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterAchievementFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(GameCenterAchievementsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterAchievementResponseToJSON(json: any): GameCenterAchievementResponse {
    return GameCenterAchievementResponseToJSONTyped(json, false);
}

export function GameCenterAchievementResponseToJSONTyped(value?: GameCenterAchievementResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterAchievementToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(GameCenterAchievementsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

