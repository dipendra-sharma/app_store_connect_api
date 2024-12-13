
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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { GameCenterAchievementRelationships } from './GameCenterAchievementRelationships';
import {
    GameCenterAchievementRelationshipsFromJSON,
    GameCenterAchievementRelationshipsFromJSONTyped,
    GameCenterAchievementRelationshipsToJSON,
    GameCenterAchievementRelationshipsToJSONTyped,
} from './GameCenterAchievementRelationships';
import type { GameCenterAchievementAttributes } from './GameCenterAchievementAttributes';
import {
    GameCenterAchievementAttributesFromJSON,
    GameCenterAchievementAttributesFromJSONTyped,
    GameCenterAchievementAttributesToJSON,
    GameCenterAchievementAttributesToJSONTyped,
} from './GameCenterAchievementAttributes';

/**
 * 
 * @export
 * @interface GameCenterAchievement
 */
export interface GameCenterAchievement {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievement
     */
    type: GameCenterAchievementTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievement
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementAttributes}
     * @memberof GameCenterAchievement
     */
    attributes?: GameCenterAchievementAttributes;
    /**
     * 
     * @type {GameCenterAchievementRelationships}
     * @memberof GameCenterAchievement
     */
    relationships?: GameCenterAchievementRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterAchievement
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterAchievementTypeEnum = {
    GameCenterAchievements: 'gameCenterAchievements'
} as const;
export type GameCenterAchievementTypeEnum = typeof GameCenterAchievementTypeEnum[keyof typeof GameCenterAchievementTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievement interface.
 */
export function instanceOfGameCenterAchievement(value: object): value is GameCenterAchievement {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterAchievementFromJSON(json: any): GameCenterAchievement {
    return GameCenterAchievementFromJSONTyped(json, false);
}

export function GameCenterAchievementFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievement {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterAchievementAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterAchievementRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterAchievementToJSON(json: any): GameCenterAchievement {
    return GameCenterAchievementToJSONTyped(json, false);
}

export function GameCenterAchievementToJSONTyped(value?: GameCenterAchievement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterAchievementAttributesToJSON(value['attributes']),
        'relationships': GameCenterAchievementRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
