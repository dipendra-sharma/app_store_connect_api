
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

import type { GameCenterLeaderboard } from './GameCenterLeaderboard';
import {
    instanceOfGameCenterLeaderboard,
    GameCenterLeaderboardFromJSON,
    GameCenterLeaderboardFromJSONTyped,
    GameCenterLeaderboardToJSON,
} from './GameCenterLeaderboard';
import type { GameCenterLeaderboardSet } from './GameCenterLeaderboardSet';
import {
    instanceOfGameCenterLeaderboardSet,
    GameCenterLeaderboardSetFromJSON,
    GameCenterLeaderboardSetFromJSONTyped,
    GameCenterLeaderboardSetToJSON,
} from './GameCenterLeaderboardSet';

/**
 * @type GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner
 * 
 * @export
 */
export type GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner = GameCenterLeaderboard | GameCenterLeaderboardSet;

export function GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner {
    return GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfGameCenterLeaderboard(json)) {
        return GameCenterLeaderboardFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterLeaderboardSet(json)) {
        return GameCenterLeaderboardSetFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerToJSON(json: any): any {
    return GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInnerToJSONTyped(value?: GameCenterLeaderboardSetMemberLocalizationsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfGameCenterLeaderboard(value)) {
        return GameCenterLeaderboardToJSON(value as GameCenterLeaderboard);
    }
    if (instanceOfGameCenterLeaderboardSet(value)) {
        return GameCenterLeaderboardSetToJSON(value as GameCenterLeaderboardSet);
    }

    return {};
}

