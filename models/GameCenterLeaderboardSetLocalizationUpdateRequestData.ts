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
import type { BundleIdUpdateRequestDataAttributes } from './BundleIdUpdateRequestDataAttributes';
import {
    BundleIdUpdateRequestDataAttributesFromJSON,
    BundleIdUpdateRequestDataAttributesFromJSONTyped,
    BundleIdUpdateRequestDataAttributesToJSON,
    BundleIdUpdateRequestDataAttributesToJSONTyped,
} from './BundleIdUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetLocalizationUpdateRequestData
 */
export interface GameCenterLeaderboardSetLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationUpdateRequestData
     */
    type: GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BundleIdUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardSetLocalizationUpdateRequestData
     */
    attributes?: BundleIdUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum = {
    GameCenterLeaderboardSetLocalizations: 'gameCenterLeaderboardSetLocalizations'
} as const;
export type GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum = typeof GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationUpdateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationUpdateRequestData(value: object): value is GameCenterLeaderboardSetLocalizationUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardSetLocalizationUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardSetLocalizationUpdateRequestData {
    return GameCenterLeaderboardSetLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BundleIdUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterLeaderboardSetLocalizationUpdateRequestDataToJSON(json: any): GameCenterLeaderboardSetLocalizationUpdateRequestData {
    return GameCenterLeaderboardSetLocalizationUpdateRequestDataToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationUpdateRequestDataToJSONTyped(value?: GameCenterLeaderboardSetLocalizationUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BundleIdUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

