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
 * @interface GameCenterLeaderboardImageUpdateRequestData
 */
export interface GameCenterLeaderboardImageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardImageUpdateRequestData
     */
    type: GameCenterLeaderboardImageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardImageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppEventScreenshotUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardImageUpdateRequestData
     */
    attributes?: AppEventScreenshotUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterLeaderboardImageUpdateRequestDataTypeEnum = {
    GameCenterLeaderboardImages: 'gameCenterLeaderboardImages'
} as const;
export type GameCenterLeaderboardImageUpdateRequestDataTypeEnum = typeof GameCenterLeaderboardImageUpdateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardImageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardImageUpdateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardImageUpdateRequestData(value: object): value is GameCenterLeaderboardImageUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardImageUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardImageUpdateRequestData {
    return GameCenterLeaderboardImageUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppEventScreenshotUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterLeaderboardImageUpdateRequestDataToJSON(json: any): GameCenterLeaderboardImageUpdateRequestData {
    return GameCenterLeaderboardImageUpdateRequestDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardImageUpdateRequestDataToJSONTyped(value?: GameCenterLeaderboardImageUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppEventScreenshotUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

