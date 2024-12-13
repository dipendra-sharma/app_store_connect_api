
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
import type { GameCenterAchievementLocalizationUpdateRequestDataAttributes } from './GameCenterAchievementLocalizationUpdateRequestDataAttributes';
import {
    GameCenterAchievementLocalizationUpdateRequestDataAttributesFromJSON,
    GameCenterAchievementLocalizationUpdateRequestDataAttributesFromJSONTyped,
    GameCenterAchievementLocalizationUpdateRequestDataAttributesToJSON,
    GameCenterAchievementLocalizationUpdateRequestDataAttributesToJSONTyped,
} from './GameCenterAchievementLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationUpdateRequestData
 */
export interface GameCenterAchievementLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalizationUpdateRequestData
     */
    type: GameCenterAchievementLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementLocalizationUpdateRequestDataAttributes}
     * @memberof GameCenterAchievementLocalizationUpdateRequestData
     */
    attributes?: GameCenterAchievementLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterAchievementLocalizationUpdateRequestDataTypeEnum = {
    GameCenterAchievementLocalizations: 'gameCenterAchievementLocalizations'
} as const;
export type GameCenterAchievementLocalizationUpdateRequestDataTypeEnum = typeof GameCenterAchievementLocalizationUpdateRequestDataTypeEnum[keyof typeof GameCenterAchievementLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementLocalizationUpdateRequestData interface.
 */
export function instanceOfGameCenterAchievementLocalizationUpdateRequestData(value: object): value is GameCenterAchievementLocalizationUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterAchievementLocalizationUpdateRequestDataFromJSON(json: any): GameCenterAchievementLocalizationUpdateRequestData {
    return GameCenterAchievementLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterAchievementLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterAchievementLocalizationUpdateRequestDataToJSON(json: any): GameCenterAchievementLocalizationUpdateRequestData {
    return GameCenterAchievementLocalizationUpdateRequestDataToJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationUpdateRequestDataToJSONTyped(value?: GameCenterAchievementLocalizationUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterAchievementLocalizationUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}
