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
import type { GameCenterMatchmakingQueueRelationships } from './GameCenterMatchmakingQueueRelationships';
import {
    GameCenterMatchmakingQueueRelationshipsFromJSON,
    GameCenterMatchmakingQueueRelationshipsFromJSONTyped,
    GameCenterMatchmakingQueueRelationshipsToJSON,
    GameCenterMatchmakingQueueRelationshipsToJSONTyped,
} from './GameCenterMatchmakingQueueRelationships';
import type { GameCenterMatchmakingQueueAttributes } from './GameCenterMatchmakingQueueAttributes';
import {
    GameCenterMatchmakingQueueAttributesFromJSON,
    GameCenterMatchmakingQueueAttributesFromJSONTyped,
    GameCenterMatchmakingQueueAttributesToJSON,
    GameCenterMatchmakingQueueAttributesToJSONTyped,
} from './GameCenterMatchmakingQueueAttributes';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueue
 */
export interface GameCenterMatchmakingQueue {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingQueue
     */
    type: GameCenterMatchmakingQueueTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingQueue
     */
    id: string;
    /**
     * 
     * @type {GameCenterMatchmakingQueueAttributes}
     * @memberof GameCenterMatchmakingQueue
     */
    attributes?: GameCenterMatchmakingQueueAttributes;
    /**
     * 
     * @type {GameCenterMatchmakingQueueRelationships}
     * @memberof GameCenterMatchmakingQueue
     */
    relationships?: GameCenterMatchmakingQueueRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterMatchmakingQueue
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterMatchmakingQueueTypeEnum = {
    GameCenterMatchmakingQueues: 'gameCenterMatchmakingQueues'
} as const;
export type GameCenterMatchmakingQueueTypeEnum = typeof GameCenterMatchmakingQueueTypeEnum[keyof typeof GameCenterMatchmakingQueueTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingQueue interface.
 */
export function instanceOfGameCenterMatchmakingQueue(value: object): value is GameCenterMatchmakingQueue {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingQueueFromJSON(json: any): GameCenterMatchmakingQueue {
    return GameCenterMatchmakingQueueFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueue {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterMatchmakingQueueAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterMatchmakingQueueRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingQueueToJSON(json: any): GameCenterMatchmakingQueue {
    return GameCenterMatchmakingQueueToJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueToJSONTyped(value?: GameCenterMatchmakingQueue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterMatchmakingQueueAttributesToJSON(value['attributes']),
        'relationships': GameCenterMatchmakingQueueRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

