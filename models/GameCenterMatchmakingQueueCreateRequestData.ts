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
import type { GameCenterMatchmakingQueueCreateRequestDataAttributes } from './GameCenterMatchmakingQueueCreateRequestDataAttributes';
import {
    GameCenterMatchmakingQueueCreateRequestDataAttributesFromJSON,
    GameCenterMatchmakingQueueCreateRequestDataAttributesFromJSONTyped,
    GameCenterMatchmakingQueueCreateRequestDataAttributesToJSON,
    GameCenterMatchmakingQueueCreateRequestDataAttributesToJSONTyped,
} from './GameCenterMatchmakingQueueCreateRequestDataAttributes';
import type { GameCenterMatchmakingQueueCreateRequestDataRelationships } from './GameCenterMatchmakingQueueCreateRequestDataRelationships';
import {
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSON,
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsToJSON,
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsToJSONTyped,
} from './GameCenterMatchmakingQueueCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueCreateRequestData
 */
export interface GameCenterMatchmakingQueueCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingQueueCreateRequestData
     */
    type: GameCenterMatchmakingQueueCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterMatchmakingQueueCreateRequestDataAttributes}
     * @memberof GameCenterMatchmakingQueueCreateRequestData
     */
    attributes: GameCenterMatchmakingQueueCreateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterMatchmakingQueueCreateRequestDataRelationships}
     * @memberof GameCenterMatchmakingQueueCreateRequestData
     */
    relationships: GameCenterMatchmakingQueueCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterMatchmakingQueueCreateRequestDataTypeEnum = {
    GameCenterMatchmakingQueues: 'gameCenterMatchmakingQueues'
} as const;
export type GameCenterMatchmakingQueueCreateRequestDataTypeEnum = typeof GameCenterMatchmakingQueueCreateRequestDataTypeEnum[keyof typeof GameCenterMatchmakingQueueCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingQueueCreateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingQueueCreateRequestData(value: object): value is GameCenterMatchmakingQueueCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingQueueCreateRequestDataFromJSON(json: any): GameCenterMatchmakingQueueCreateRequestData {
    return GameCenterMatchmakingQueueCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GameCenterMatchmakingQueueCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterMatchmakingQueueCreateRequestDataToJSON(json: any): GameCenterMatchmakingQueueCreateRequestData {
    return GameCenterMatchmakingQueueCreateRequestDataToJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestDataToJSONTyped(value?: GameCenterMatchmakingQueueCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': GameCenterMatchmakingQueueCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': GameCenterMatchmakingQueueCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

