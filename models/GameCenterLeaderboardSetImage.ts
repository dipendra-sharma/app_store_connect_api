
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
import type { GameCenterLeaderboardSetImageRelationships } from './GameCenterLeaderboardSetImageRelationships';
import {
    GameCenterLeaderboardSetImageRelationshipsFromJSON,
    GameCenterLeaderboardSetImageRelationshipsFromJSONTyped,
    GameCenterLeaderboardSetImageRelationshipsToJSON,
    GameCenterLeaderboardSetImageRelationshipsToJSONTyped,
} from './GameCenterLeaderboardSetImageRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { GameCenterAchievementImageAttributes } from './GameCenterAchievementImageAttributes';
import {
    GameCenterAchievementImageAttributesFromJSON,
    GameCenterAchievementImageAttributesFromJSONTyped,
    GameCenterAchievementImageAttributesToJSON,
    GameCenterAchievementImageAttributesToJSONTyped,
} from './GameCenterAchievementImageAttributes';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImage
 */
export interface GameCenterLeaderboardSetImage {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImage
     */
    type: GameCenterLeaderboardSetImageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImage
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementImageAttributes}
     * @memberof GameCenterLeaderboardSetImage
     */
    attributes?: GameCenterAchievementImageAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardSetImageRelationships}
     * @memberof GameCenterLeaderboardSetImage
     */
    relationships?: GameCenterLeaderboardSetImageRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboardSetImage
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetImageTypeEnum = {
    GameCenterLeaderboardSetImages: 'gameCenterLeaderboardSetImages'
} as const;
export type GameCenterLeaderboardSetImageTypeEnum = typeof GameCenterLeaderboardSetImageTypeEnum[keyof typeof GameCenterLeaderboardSetImageTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetImage interface.
 */
export function instanceOfGameCenterLeaderboardSetImage(value: object): value is GameCenterLeaderboardSetImage {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetImageFromJSON(json: any): GameCenterLeaderboardSetImage {
    return GameCenterLeaderboardSetImageFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImage {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterAchievementImageAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterLeaderboardSetImageRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardSetImageToJSON(json: any): GameCenterLeaderboardSetImage {
    return GameCenterLeaderboardSetImageToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageToJSONTyped(value?: GameCenterLeaderboardSetImage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterAchievementImageAttributesToJSON(value['attributes']),
        'relationships': GameCenterLeaderboardSetImageRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

