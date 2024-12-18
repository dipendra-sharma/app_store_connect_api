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
import type { GameCenterMatchmakingQueueUpdateRequestDataAttributes } from './GameCenterMatchmakingQueueUpdateRequestDataAttributes';
import {
    GameCenterMatchmakingQueueUpdateRequestDataAttributesFromJSON,
    GameCenterMatchmakingQueueUpdateRequestDataAttributesFromJSONTyped,
    GameCenterMatchmakingQueueUpdateRequestDataAttributesToJSON,
    GameCenterMatchmakingQueueUpdateRequestDataAttributesToJSONTyped,
} from './GameCenterMatchmakingQueueUpdateRequestDataAttributes';
import type { GameCenterMatchmakingQueueRelationships } from './GameCenterMatchmakingQueueRelationships';
import {
    GameCenterMatchmakingQueueRelationshipsFromJSON,
    GameCenterMatchmakingQueueRelationshipsFromJSONTyped,
    GameCenterMatchmakingQueueRelationshipsToJSON,
    GameCenterMatchmakingQueueRelationshipsToJSONTyped,
} from './GameCenterMatchmakingQueueRelationships';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueUpdateRequestData
 */
export interface GameCenterMatchmakingQueueUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    type: GameCenterMatchmakingQueueUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {GameCenterMatchmakingQueueUpdateRequestDataAttributes}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    attributes?: GameCenterMatchmakingQueueUpdateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterMatchmakingQueueRelationships}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    relationships?: GameCenterMatchmakingQueueRelationships;
}


/**
 * @export
 */
export const GameCenterMatchmakingQueueUpdateRequestDataTypeEnum = {
    GameCenterMatchmakingQueues: 'gameCenterMatchmakingQueues'
} as const;
export type GameCenterMatchmakingQueueUpdateRequestDataTypeEnum = typeof GameCenterMatchmakingQueueUpdateRequestDataTypeEnum[keyof typeof GameCenterMatchmakingQueueUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingQueueUpdateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingQueueUpdateRequestData(value: object): value is GameCenterMatchmakingQueueUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingQueueUpdateRequestDataFromJSON(json: any): GameCenterMatchmakingQueueUpdateRequestData {
    return GameCenterMatchmakingQueueUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterMatchmakingQueueUpdateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterMatchmakingQueueRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterMatchmakingQueueUpdateRequestDataToJSON(json: any): GameCenterMatchmakingQueueUpdateRequestData {
    return GameCenterMatchmakingQueueUpdateRequestDataToJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueUpdateRequestDataToJSONTyped(value?: GameCenterMatchmakingQueueUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterMatchmakingQueueUpdateRequestDataAttributesToJSON(value['attributes']),
        'relationships': GameCenterMatchmakingQueueRelationshipsToJSON(value['relationships']),
    };
}

