
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
import type { GameCenterLeaderboardLocalizationUpdateRequestDataAttributes } from './GameCenterLeaderboardLocalizationUpdateRequestDataAttributes';
import {
    GameCenterLeaderboardLocalizationUpdateRequestDataAttributesFromJSON,
    GameCenterLeaderboardLocalizationUpdateRequestDataAttributesFromJSONTyped,
    GameCenterLeaderboardLocalizationUpdateRequestDataAttributesToJSON,
    GameCenterLeaderboardLocalizationUpdateRequestDataAttributesToJSONTyped,
} from './GameCenterLeaderboardLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardLocalizationUpdateRequestData
 */
export interface GameCenterLeaderboardLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationUpdateRequestData
     */
    type: GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {GameCenterLeaderboardLocalizationUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardLocalizationUpdateRequestData
     */
    attributes?: GameCenterLeaderboardLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum = {
    GameCenterLeaderboardLocalizations: 'gameCenterLeaderboardLocalizations'
} as const;
export type GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum = typeof GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationUpdateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationUpdateRequestData(value: object): value is GameCenterLeaderboardLocalizationUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardLocalizationUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardLocalizationUpdateRequestData {
    return GameCenterLeaderboardLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterLeaderboardLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterLeaderboardLocalizationUpdateRequestDataToJSON(json: any): GameCenterLeaderboardLocalizationUpdateRequestData {
    return GameCenterLeaderboardLocalizationUpdateRequestDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationUpdateRequestDataToJSONTyped(value?: GameCenterLeaderboardLocalizationUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterLeaderboardLocalizationUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}
