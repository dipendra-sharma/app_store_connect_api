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
import type { GameCenterAchievementLocalizationAttributes } from './GameCenterAchievementLocalizationAttributes';
import {
    GameCenterAchievementLocalizationAttributesFromJSON,
    GameCenterAchievementLocalizationAttributesFromJSONTyped,
    GameCenterAchievementLocalizationAttributesToJSON,
    GameCenterAchievementLocalizationAttributesToJSONTyped,
} from './GameCenterAchievementLocalizationAttributes';
import type { GameCenterAchievementLocalizationRelationships } from './GameCenterAchievementLocalizationRelationships';
import {
    GameCenterAchievementLocalizationRelationshipsFromJSON,
    GameCenterAchievementLocalizationRelationshipsFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsToJSON,
    GameCenterAchievementLocalizationRelationshipsToJSONTyped,
} from './GameCenterAchievementLocalizationRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalization
 */
export interface GameCenterAchievementLocalization {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalization
     */
    type: GameCenterAchievementLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalization
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementLocalizationAttributes}
     * @memberof GameCenterAchievementLocalization
     */
    attributes?: GameCenterAchievementLocalizationAttributes;
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationships}
     * @memberof GameCenterAchievementLocalization
     */
    relationships?: GameCenterAchievementLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterAchievementLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterAchievementLocalizationTypeEnum = {
    GameCenterAchievementLocalizations: 'gameCenterAchievementLocalizations'
} as const;
export type GameCenterAchievementLocalizationTypeEnum = typeof GameCenterAchievementLocalizationTypeEnum[keyof typeof GameCenterAchievementLocalizationTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementLocalization interface.
 */
export function instanceOfGameCenterAchievementLocalization(value: object): value is GameCenterAchievementLocalization {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterAchievementLocalizationFromJSON(json: any): GameCenterAchievementLocalization {
    return GameCenterAchievementLocalizationFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterAchievementLocalizationAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterAchievementLocalizationRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterAchievementLocalizationToJSON(json: any): GameCenterAchievementLocalization {
    return GameCenterAchievementLocalizationToJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationToJSONTyped(value?: GameCenterAchievementLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterAchievementLocalizationAttributesToJSON(value['attributes']),
        'relationships': GameCenterAchievementLocalizationRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

