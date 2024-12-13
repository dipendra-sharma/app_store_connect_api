
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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner } from './GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSONTyped,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards
 */
export interface GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards {
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>}
     * @memberof GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards
     */
    data?: Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards interface.
 */
export function instanceOfGameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards(value: object): value is GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards {
    return true;
}

export function GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsFromJSON(json: any): GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards {
    return GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)),
    };
}

export function GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsToJSON(json: any): GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards {
    return GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsToJSONTyped(value?: GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON)),
    };
}
