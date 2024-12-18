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
import type { GameCenterLeaderboardLocalizationCreateRequestDataAttributes } from './GameCenterLeaderboardLocalizationCreateRequestDataAttributes';
import {
    GameCenterLeaderboardLocalizationCreateRequestDataAttributesFromJSON,
    GameCenterLeaderboardLocalizationCreateRequestDataAttributesFromJSONTyped,
    GameCenterLeaderboardLocalizationCreateRequestDataAttributesToJSON,
    GameCenterLeaderboardLocalizationCreateRequestDataAttributesToJSONTyped,
} from './GameCenterLeaderboardLocalizationCreateRequestDataAttributes';
import type { GameCenterLeaderboardLocalizationCreateRequestDataRelationships } from './GameCenterLeaderboardLocalizationCreateRequestDataRelationships';
import {
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsFromJSON,
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsToJSON,
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsToJSONTyped,
} from './GameCenterLeaderboardLocalizationCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardLocalizationCreateRequestData
 */
export interface GameCenterLeaderboardLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestData
     */
    type: GameCenterLeaderboardLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterLeaderboardLocalizationCreateRequestDataAttributes}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestData
     */
    attributes: GameCenterLeaderboardLocalizationCreateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardLocalizationCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestData
     */
    relationships: GameCenterLeaderboardLocalizationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterLeaderboardLocalizationCreateRequestDataTypeEnum = {
    GameCenterLeaderboardLocalizations: 'gameCenterLeaderboardLocalizations'
} as const;
export type GameCenterLeaderboardLocalizationCreateRequestDataTypeEnum = typeof GameCenterLeaderboardLocalizationCreateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationCreateRequestData(value: object): value is GameCenterLeaderboardLocalizationCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardLocalizationCreateRequestDataFromJSON(json: any): GameCenterLeaderboardLocalizationCreateRequestData {
    return GameCenterLeaderboardLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GameCenterLeaderboardLocalizationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterLeaderboardLocalizationCreateRequestDataToJSON(json: any): GameCenterLeaderboardLocalizationCreateRequestData {
    return GameCenterLeaderboardLocalizationCreateRequestDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationCreateRequestDataToJSONTyped(value?: GameCenterLeaderboardLocalizationCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': GameCenterLeaderboardLocalizationCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

