
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
/**
 * 
 * @export
 * @interface GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner
 */
export interface GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner {
    /**
     * 
     * @type {string}
     * @memberof GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner
     */
    type: GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum = {
    GameCenterLeaderboards: 'gameCenterLeaderboards'
} as const;
export type GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum = typeof GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum[keyof typeof GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum];


/**
 * Check if a given object implements the GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner interface.
 */
export function instanceOfGameCenterDetailRelationshipsGameCenterLeaderboardsDataInner(value: object): value is GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON(json: any): GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner {
    return GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSONTyped(json, false);
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON(json: any): GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner {
    return GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSONTyped(json, false);
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSONTyped(value?: GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

