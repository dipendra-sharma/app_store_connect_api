
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
import type { AppEventScreenshotUpdateRequestDataAttributes } from './AppEventScreenshotUpdateRequestDataAttributes';
import {
    AppEventScreenshotUpdateRequestDataAttributesFromJSON,
    AppEventScreenshotUpdateRequestDataAttributesFromJSONTyped,
    AppEventScreenshotUpdateRequestDataAttributesToJSON,
    AppEventScreenshotUpdateRequestDataAttributesToJSONTyped,
} from './AppEventScreenshotUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterAchievementImageUpdateRequestData
 */
export interface GameCenterAchievementImageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementImageUpdateRequestData
     */
    type: GameCenterAchievementImageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementImageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppEventScreenshotUpdateRequestDataAttributes}
     * @memberof GameCenterAchievementImageUpdateRequestData
     */
    attributes?: AppEventScreenshotUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterAchievementImageUpdateRequestDataTypeEnum = {
    GameCenterAchievementImages: 'gameCenterAchievementImages'
} as const;
export type GameCenterAchievementImageUpdateRequestDataTypeEnum = typeof GameCenterAchievementImageUpdateRequestDataTypeEnum[keyof typeof GameCenterAchievementImageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementImageUpdateRequestData interface.
 */
export function instanceOfGameCenterAchievementImageUpdateRequestData(value: object): value is GameCenterAchievementImageUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterAchievementImageUpdateRequestDataFromJSON(json: any): GameCenterAchievementImageUpdateRequestData {
    return GameCenterAchievementImageUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAchievementImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementImageUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppEventScreenshotUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterAchievementImageUpdateRequestDataToJSON(json: any): GameCenterAchievementImageUpdateRequestData {
    return GameCenterAchievementImageUpdateRequestDataToJSONTyped(json, false);
}

export function GameCenterAchievementImageUpdateRequestDataToJSONTyped(value?: GameCenterAchievementImageUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppEventScreenshotUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

