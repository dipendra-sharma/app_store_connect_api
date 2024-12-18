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
import type { GameCenterAppVersionAttributes } from './GameCenterAppVersionAttributes';
import {
    GameCenterAppVersionAttributesFromJSON,
    GameCenterAppVersionAttributesFromJSONTyped,
    GameCenterAppVersionAttributesToJSON,
    GameCenterAppVersionAttributesToJSONTyped,
} from './GameCenterAppVersionAttributes';

/**
 * 
 * @export
 * @interface GameCenterAppVersionUpdateRequestData
 */
export interface GameCenterAppVersionUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAppVersionUpdateRequestData
     */
    type: GameCenterAppVersionUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAppVersionUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {GameCenterAppVersionAttributes}
     * @memberof GameCenterAppVersionUpdateRequestData
     */
    attributes?: GameCenterAppVersionAttributes;
}


/**
 * @export
 */
export const GameCenterAppVersionUpdateRequestDataTypeEnum = {
    GameCenterAppVersions: 'gameCenterAppVersions'
} as const;
export type GameCenterAppVersionUpdateRequestDataTypeEnum = typeof GameCenterAppVersionUpdateRequestDataTypeEnum[keyof typeof GameCenterAppVersionUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAppVersionUpdateRequestData interface.
 */
export function instanceOfGameCenterAppVersionUpdateRequestData(value: object): value is GameCenterAppVersionUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterAppVersionUpdateRequestDataFromJSON(json: any): GameCenterAppVersionUpdateRequestData {
    return GameCenterAppVersionUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAppVersionUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersionUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterAppVersionAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterAppVersionUpdateRequestDataToJSON(json: any): GameCenterAppVersionUpdateRequestData {
    return GameCenterAppVersionUpdateRequestDataToJSONTyped(json, false);
}

export function GameCenterAppVersionUpdateRequestDataToJSONTyped(value?: GameCenterAppVersionUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterAppVersionAttributesToJSON(value['attributes']),
    };
}

