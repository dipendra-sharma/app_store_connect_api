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
import type { GameCenterLeaderboardSetMemberLocalizationAttributes } from './GameCenterLeaderboardSetMemberLocalizationAttributes';
import {
    GameCenterLeaderboardSetMemberLocalizationAttributesFromJSON,
    GameCenterLeaderboardSetMemberLocalizationAttributesFromJSONTyped,
    GameCenterLeaderboardSetMemberLocalizationAttributesToJSON,
    GameCenterLeaderboardSetMemberLocalizationAttributesToJSONTyped,
} from './GameCenterLeaderboardSetMemberLocalizationAttributes';
import type { GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationships } from './GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationships';
import {
    GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationshipsFromJSON,
    GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationshipsToJSON,
    GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationshipsToJSONTyped,
} from './GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetMemberLocalizationCreateRequestData
 */
export interface GameCenterLeaderboardSetMemberLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetMemberLocalizationCreateRequestData
     */
    type: GameCenterLeaderboardSetMemberLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterLeaderboardSetMemberLocalizationAttributes}
     * @memberof GameCenterLeaderboardSetMemberLocalizationCreateRequestData
     */
    attributes?: GameCenterLeaderboardSetMemberLocalizationAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardSetMemberLocalizationCreateRequestData
     */
    relationships: GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetMemberLocalizationCreateRequestDataTypeEnum = {
    GameCenterLeaderboardSetMemberLocalizations: 'gameCenterLeaderboardSetMemberLocalizations'
} as const;
export type GameCenterLeaderboardSetMemberLocalizationCreateRequestDataTypeEnum = typeof GameCenterLeaderboardSetMemberLocalizationCreateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardSetMemberLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardSetMemberLocalizationCreateRequestData(value: object): value is GameCenterLeaderboardSetMemberLocalizationCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationCreateRequestData {
    return GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': json['attributes'] == null ? undefined : GameCenterLeaderboardSetMemberLocalizationAttributesFromJSON(json['attributes']),
        'relationships': GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestDataToJSON(json: any): GameCenterLeaderboardSetMemberLocalizationCreateRequestData {
    return GameCenterLeaderboardSetMemberLocalizationCreateRequestDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestDataToJSONTyped(value?: GameCenterLeaderboardSetMemberLocalizationCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': GameCenterLeaderboardSetMemberLocalizationAttributesToJSON(value['attributes']),
        'relationships': GameCenterLeaderboardSetMemberLocalizationCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

