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

import type { GameCenterDetail } from './GameCenterDetail';
import {
    instanceOfGameCenterDetail,
    GameCenterDetailFromJSON,
    GameCenterDetailFromJSONTyped,
    GameCenterDetailToJSON,
} from './GameCenterDetail';
import type { GameCenterGroup } from './GameCenterGroup';
import {
    instanceOfGameCenterGroup,
    GameCenterGroupFromJSON,
    GameCenterGroupFromJSONTyped,
    GameCenterGroupToJSON,
} from './GameCenterGroup';
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
import type { GameCenterLeaderboardSetLocalization } from './GameCenterLeaderboardSetLocalization';
import {
    instanceOfGameCenterLeaderboardSetLocalization,
    GameCenterLeaderboardSetLocalizationFromJSON,
    GameCenterLeaderboardSetLocalizationFromJSONTyped,
    GameCenterLeaderboardSetLocalizationToJSON,
} from './GameCenterLeaderboardSetLocalization';
import type { GameCenterLeaderboardSetRelease } from './GameCenterLeaderboardSetRelease';
import {
    instanceOfGameCenterLeaderboardSetRelease,
    GameCenterLeaderboardSetReleaseFromJSON,
    GameCenterLeaderboardSetReleaseFromJSONTyped,
    GameCenterLeaderboardSetReleaseToJSON,
} from './GameCenterLeaderboardSetRelease';

/**
 * @type GameCenterLeaderboardSetsResponseIncludedInner
 * 
 * @export
 */
export type GameCenterLeaderboardSetsResponseIncludedInner = GameCenterDetail | GameCenterGroup | GameCenterLeaderboard | GameCenterLeaderboardSet | GameCenterLeaderboardSetLocalization | GameCenterLeaderboardSetRelease;

export function GameCenterLeaderboardSetsResponseIncludedInnerFromJSON(json: any): GameCenterLeaderboardSetsResponseIncludedInner {
    return GameCenterLeaderboardSetsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfGameCenterDetail(json)) {
        return GameCenterDetailFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterGroup(json)) {
        return GameCenterGroupFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterLeaderboard(json)) {
        return GameCenterLeaderboardFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterLeaderboardSet(json)) {
        return GameCenterLeaderboardSetFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterLeaderboardSetLocalization(json)) {
        return GameCenterLeaderboardSetLocalizationFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterLeaderboardSetRelease(json)) {
        return GameCenterLeaderboardSetReleaseFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GameCenterLeaderboardSetsResponseIncludedInnerToJSON(json: any): any {
    return GameCenterLeaderboardSetsResponseIncludedInnerToJSONTyped(json, false);
}

export function GameCenterLeaderboardSetsResponseIncludedInnerToJSONTyped(value?: GameCenterLeaderboardSetsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfGameCenterDetail(value)) {
        return GameCenterDetailToJSON(value as GameCenterDetail);
    }
    if (instanceOfGameCenterGroup(value)) {
        return GameCenterGroupToJSON(value as GameCenterGroup);
    }
    if (instanceOfGameCenterLeaderboard(value)) {
        return GameCenterLeaderboardToJSON(value as GameCenterLeaderboard);
    }
    if (instanceOfGameCenterLeaderboardSet(value)) {
        return GameCenterLeaderboardSetToJSON(value as GameCenterLeaderboardSet);
    }
    if (instanceOfGameCenterLeaderboardSetLocalization(value)) {
        return GameCenterLeaderboardSetLocalizationToJSON(value as GameCenterLeaderboardSetLocalization);
    }
    if (instanceOfGameCenterLeaderboardSetRelease(value)) {
        return GameCenterLeaderboardSetReleaseToJSON(value as GameCenterLeaderboardSetRelease);
    }

    return {};
}

