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
import type { GameCenterLeaderboardSetCreateRequestDataRelationships } from './GameCenterLeaderboardSetCreateRequestDataRelationships';
import {
    GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSON,
    GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterLeaderboardSetCreateRequestDataRelationshipsToJSON,
    GameCenterLeaderboardSetCreateRequestDataRelationshipsToJSONTyped,
} from './GameCenterLeaderboardSetCreateRequestDataRelationships';
import type { GameCenterLeaderboardSetCreateRequestDataAttributes } from './GameCenterLeaderboardSetCreateRequestDataAttributes';
import {
    GameCenterLeaderboardSetCreateRequestDataAttributesFromJSON,
    GameCenterLeaderboardSetCreateRequestDataAttributesFromJSONTyped,
    GameCenterLeaderboardSetCreateRequestDataAttributesToJSON,
    GameCenterLeaderboardSetCreateRequestDataAttributesToJSONTyped,
} from './GameCenterLeaderboardSetCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetCreateRequestData
 */
export interface GameCenterLeaderboardSetCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetCreateRequestData
     */
    type: GameCenterLeaderboardSetCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterLeaderboardSetCreateRequestDataAttributes}
     * @memberof GameCenterLeaderboardSetCreateRequestData
     */
    attributes: GameCenterLeaderboardSetCreateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardSetCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardSetCreateRequestData
     */
    relationships?: GameCenterLeaderboardSetCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetCreateRequestDataTypeEnum = {
    GameCenterLeaderboardSets: 'gameCenterLeaderboardSets'
} as const;
export type GameCenterLeaderboardSetCreateRequestDataTypeEnum = typeof GameCenterLeaderboardSetCreateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardSetCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardSetCreateRequestData(value: object): value is GameCenterLeaderboardSetCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetCreateRequestDataFromJSON(json: any): GameCenterLeaderboardSetCreateRequestData {
    return GameCenterLeaderboardSetCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GameCenterLeaderboardSetCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterLeaderboardSetCreateRequestDataToJSON(json: any): GameCenterLeaderboardSetCreateRequestData {
    return GameCenterLeaderboardSetCreateRequestDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetCreateRequestDataToJSONTyped(value?: GameCenterLeaderboardSetCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': GameCenterLeaderboardSetCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': GameCenterLeaderboardSetCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

