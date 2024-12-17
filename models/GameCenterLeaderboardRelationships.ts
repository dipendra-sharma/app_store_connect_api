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
import type { GameCenterLeaderboardRelationshipsGroupLeaderboard } from './GameCenterLeaderboardRelationshipsGroupLeaderboard';
import {
    GameCenterLeaderboardRelationshipsGroupLeaderboardFromJSON,
    GameCenterLeaderboardRelationshipsGroupLeaderboardFromJSONTyped,
    GameCenterLeaderboardRelationshipsGroupLeaderboardToJSON,
    GameCenterLeaderboardRelationshipsGroupLeaderboardToJSONTyped,
} from './GameCenterLeaderboardRelationshipsGroupLeaderboard';
import type { GameCenterAchievementReleaseRelationshipsGameCenterDetail } from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import {
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSONTyped,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSONTyped,
} from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import type { GameCenterLeaderboardRelationshipsLocalizations } from './GameCenterLeaderboardRelationshipsLocalizations';
import {
    GameCenterLeaderboardRelationshipsLocalizationsFromJSON,
    GameCenterLeaderboardRelationshipsLocalizationsFromJSONTyped,
    GameCenterLeaderboardRelationshipsLocalizationsToJSON,
    GameCenterLeaderboardRelationshipsLocalizationsToJSONTyped,
} from './GameCenterLeaderboardRelationshipsLocalizations';
import type { GameCenterDetailRelationshipsLeaderboardReleases } from './GameCenterDetailRelationshipsLeaderboardReleases';
import {
    GameCenterDetailRelationshipsLeaderboardReleasesFromJSON,
    GameCenterDetailRelationshipsLeaderboardReleasesFromJSONTyped,
    GameCenterDetailRelationshipsLeaderboardReleasesToJSON,
    GameCenterDetailRelationshipsLeaderboardReleasesToJSONTyped,
} from './GameCenterDetailRelationshipsLeaderboardReleases';
import type { GameCenterAchievementRelationshipsGameCenterGroup } from './GameCenterAchievementRelationshipsGameCenterGroup';
import {
    GameCenterAchievementRelationshipsGameCenterGroupFromJSON,
    GameCenterAchievementRelationshipsGameCenterGroupFromJSONTyped,
    GameCenterAchievementRelationshipsGameCenterGroupToJSON,
    GameCenterAchievementRelationshipsGameCenterGroupToJSONTyped,
} from './GameCenterAchievementRelationshipsGameCenterGroup';
import type { GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets } from './GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets';
import {
    GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsFromJSON,
    GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsFromJSONTyped,
    GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsToJSON,
    GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsToJSONTyped,
} from './GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardRelationships
 */
export interface GameCenterLeaderboardRelationships {
    /**
     * 
     * @type {GameCenterAchievementReleaseRelationshipsGameCenterDetail}
     * @memberof GameCenterLeaderboardRelationships
     */
    gameCenterDetail?: GameCenterAchievementReleaseRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterAchievementRelationshipsGameCenterGroup}
     * @memberof GameCenterLeaderboardRelationships
     */
    gameCenterGroup?: GameCenterAchievementRelationshipsGameCenterGroup;
    /**
     * 
     * @type {GameCenterLeaderboardRelationshipsGroupLeaderboard}
     * @memberof GameCenterLeaderboardRelationships
     * @deprecated
     */
    groupLeaderboard?: GameCenterLeaderboardRelationshipsGroupLeaderboard;
    /**
     * 
     * @type {GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets}
     * @memberof GameCenterLeaderboardRelationships
     */
    gameCenterLeaderboardSets?: GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets;
    /**
     * 
     * @type {GameCenterLeaderboardRelationshipsLocalizations}
     * @memberof GameCenterLeaderboardRelationships
     */
    localizations?: GameCenterLeaderboardRelationshipsLocalizations;
    /**
     * 
     * @type {GameCenterDetailRelationshipsLeaderboardReleases}
     * @memberof GameCenterLeaderboardRelationships
     */
    releases?: GameCenterDetailRelationshipsLeaderboardReleases;
}

/**
 * Check if a given object implements the GameCenterLeaderboardRelationships interface.
 */
export function instanceOfGameCenterLeaderboardRelationships(value: object): value is GameCenterLeaderboardRelationships {
    return true;
}

export function GameCenterLeaderboardRelationshipsFromJSON(json: any): GameCenterLeaderboardRelationships {
    return GameCenterLeaderboardRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterDetail': json['gameCenterDetail'] == null ? undefined : GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterGroup': json['gameCenterGroup'] == null ? undefined : GameCenterAchievementRelationshipsGameCenterGroupFromJSON(json['gameCenterGroup']),
        'groupLeaderboard': json['groupLeaderboard'] == null ? undefined : GameCenterLeaderboardRelationshipsGroupLeaderboardFromJSON(json['groupLeaderboard']),
        'gameCenterLeaderboardSets': json['gameCenterLeaderboardSets'] == null ? undefined : GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsFromJSON(json['gameCenterLeaderboardSets']),
        'localizations': json['localizations'] == null ? undefined : GameCenterLeaderboardRelationshipsLocalizationsFromJSON(json['localizations']),
        'releases': json['releases'] == null ? undefined : GameCenterDetailRelationshipsLeaderboardReleasesFromJSON(json['releases']),
    };
}

export function GameCenterLeaderboardRelationshipsToJSON(json: any): GameCenterLeaderboardRelationships {
    return GameCenterLeaderboardRelationshipsToJSONTyped(json, false);
}

export function GameCenterLeaderboardRelationshipsToJSONTyped(value?: GameCenterLeaderboardRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON(value['gameCenterDetail']),
        'gameCenterGroup': GameCenterAchievementRelationshipsGameCenterGroupToJSON(value['gameCenterGroup']),
        'groupLeaderboard': GameCenterLeaderboardRelationshipsGroupLeaderboardToJSON(value['groupLeaderboard']),
        'gameCenterLeaderboardSets': GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsToJSON(value['gameCenterLeaderboardSets']),
        'localizations': GameCenterLeaderboardRelationshipsLocalizationsToJSON(value['localizations']),
        'releases': GameCenterDetailRelationshipsLeaderboardReleasesToJSON(value['releases']),
    };
}

