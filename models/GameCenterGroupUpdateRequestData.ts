
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
import type { GameCenterGroupAttributes } from './GameCenterGroupAttributes';
import {
    GameCenterGroupAttributesFromJSON,
    GameCenterGroupAttributesFromJSONTyped,
    GameCenterGroupAttributesToJSON,
    GameCenterGroupAttributesToJSONTyped,
} from './GameCenterGroupAttributes';

/**
 * 
 * @export
 * @interface GameCenterGroupUpdateRequestData
 */
export interface GameCenterGroupUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterGroupUpdateRequestData
     */
    type: GameCenterGroupUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterGroupUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {GameCenterGroupAttributes}
     * @memberof GameCenterGroupUpdateRequestData
     */
    attributes?: GameCenterGroupAttributes;
}


/**
 * @export
 */
export const GameCenterGroupUpdateRequestDataTypeEnum = {
    GameCenterGroups: 'gameCenterGroups'
} as const;
export type GameCenterGroupUpdateRequestDataTypeEnum = typeof GameCenterGroupUpdateRequestDataTypeEnum[keyof typeof GameCenterGroupUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterGroupUpdateRequestData interface.
 */
export function instanceOfGameCenterGroupUpdateRequestData(value: object): value is GameCenterGroupUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterGroupUpdateRequestDataFromJSON(json: any): GameCenterGroupUpdateRequestData {
    return GameCenterGroupUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterGroupUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterGroupAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterGroupUpdateRequestDataToJSON(json: any): GameCenterGroupUpdateRequestData {
    return GameCenterGroupUpdateRequestDataToJSONTyped(json, false);
}

export function GameCenterGroupUpdateRequestDataToJSONTyped(value?: GameCenterGroupUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterGroupAttributesToJSON(value['attributes']),
    };
}
