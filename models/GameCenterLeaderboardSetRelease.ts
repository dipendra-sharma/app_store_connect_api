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
import type { GameCenterAchievementReleaseAttributes } from './GameCenterAchievementReleaseAttributes';
import {
    GameCenterAchievementReleaseAttributesFromJSON,
    GameCenterAchievementReleaseAttributesFromJSONTyped,
    GameCenterAchievementReleaseAttributesToJSON,
    GameCenterAchievementReleaseAttributesToJSONTyped,
} from './GameCenterAchievementReleaseAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { GameCenterLeaderboardSetReleaseRelationships } from './GameCenterLeaderboardSetReleaseRelationships';
import {
    GameCenterLeaderboardSetReleaseRelationshipsFromJSON,
    GameCenterLeaderboardSetReleaseRelationshipsFromJSONTyped,
    GameCenterLeaderboardSetReleaseRelationshipsToJSON,
    GameCenterLeaderboardSetReleaseRelationshipsToJSONTyped,
} from './GameCenterLeaderboardSetReleaseRelationships';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetRelease
 */
export interface GameCenterLeaderboardSetRelease {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetRelease
     */
    type: GameCenterLeaderboardSetReleaseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetRelease
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementReleaseAttributes}
     * @memberof GameCenterLeaderboardSetRelease
     */
    attributes?: GameCenterAchievementReleaseAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardSetReleaseRelationships}
     * @memberof GameCenterLeaderboardSetRelease
     */
    relationships?: GameCenterLeaderboardSetReleaseRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboardSetRelease
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetReleaseTypeEnum = {
    GameCenterLeaderboardSetReleases: 'gameCenterLeaderboardSetReleases'
} as const;
export type GameCenterLeaderboardSetReleaseTypeEnum = typeof GameCenterLeaderboardSetReleaseTypeEnum[keyof typeof GameCenterLeaderboardSetReleaseTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetRelease interface.
 */
export function instanceOfGameCenterLeaderboardSetRelease(value: object): value is GameCenterLeaderboardSetRelease {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetReleaseFromJSON(json: any): GameCenterLeaderboardSetRelease {
    return GameCenterLeaderboardSetReleaseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetRelease {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterAchievementReleaseAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterLeaderboardSetReleaseRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardSetReleaseToJSON(json: any): GameCenterLeaderboardSetRelease {
    return GameCenterLeaderboardSetReleaseToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseToJSONTyped(value?: GameCenterLeaderboardSetRelease | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterAchievementReleaseAttributesToJSON(value['attributes']),
        'relationships': GameCenterLeaderboardSetReleaseRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

