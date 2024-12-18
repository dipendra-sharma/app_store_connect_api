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
import type { GameCenterLeaderboardCreateRequestDataRelationships } from './GameCenterLeaderboardCreateRequestDataRelationships';
import {
    GameCenterLeaderboardCreateRequestDataRelationshipsFromJSON,
    GameCenterLeaderboardCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterLeaderboardCreateRequestDataRelationshipsToJSON,
    GameCenterLeaderboardCreateRequestDataRelationshipsToJSONTyped,
} from './GameCenterLeaderboardCreateRequestDataRelationships';
import type { GameCenterLeaderboardCreateRequestDataAttributes } from './GameCenterLeaderboardCreateRequestDataAttributes';
import {
    GameCenterLeaderboardCreateRequestDataAttributesFromJSON,
    GameCenterLeaderboardCreateRequestDataAttributesFromJSONTyped,
    GameCenterLeaderboardCreateRequestDataAttributesToJSON,
    GameCenterLeaderboardCreateRequestDataAttributesToJSONTyped,
} from './GameCenterLeaderboardCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardCreateRequestData
 */
export interface GameCenterLeaderboardCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestData
     */
    type: GameCenterLeaderboardCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterLeaderboardCreateRequestDataAttributes}
     * @memberof GameCenterLeaderboardCreateRequestData
     */
    attributes: GameCenterLeaderboardCreateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardCreateRequestData
     */
    relationships?: GameCenterLeaderboardCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterLeaderboardCreateRequestDataTypeEnum = {
    GameCenterLeaderboards: 'gameCenterLeaderboards'
} as const;
export type GameCenterLeaderboardCreateRequestDataTypeEnum = typeof GameCenterLeaderboardCreateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardCreateRequestData(value: object): value is GameCenterLeaderboardCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardCreateRequestDataFromJSON(json: any): GameCenterLeaderboardCreateRequestData {
    return GameCenterLeaderboardCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GameCenterLeaderboardCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterLeaderboardCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterLeaderboardCreateRequestDataToJSON(json: any): GameCenterLeaderboardCreateRequestData {
    return GameCenterLeaderboardCreateRequestDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardCreateRequestDataToJSONTyped(value?: GameCenterLeaderboardCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': GameCenterLeaderboardCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': GameCenterLeaderboardCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

