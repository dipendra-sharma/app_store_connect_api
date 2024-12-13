
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
import type { GameCenterAchievementRelationshipsReleases } from './GameCenterAchievementRelationshipsReleases';
import {
    GameCenterAchievementRelationshipsReleasesFromJSON,
    GameCenterAchievementRelationshipsReleasesFromJSONTyped,
    GameCenterAchievementRelationshipsReleasesToJSON,
    GameCenterAchievementRelationshipsReleasesToJSONTyped,
} from './GameCenterAchievementRelationshipsReleases';
import type { GameCenterAchievementRelationshipsLocalizations } from './GameCenterAchievementRelationshipsLocalizations';
import {
    GameCenterAchievementRelationshipsLocalizationsFromJSON,
    GameCenterAchievementRelationshipsLocalizationsFromJSONTyped,
    GameCenterAchievementRelationshipsLocalizationsToJSON,
    GameCenterAchievementRelationshipsLocalizationsToJSONTyped,
} from './GameCenterAchievementRelationshipsLocalizations';
import type { GameCenterAchievementReleaseRelationshipsGameCenterDetail } from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import {
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSONTyped,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSONTyped,
} from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import type { GameCenterAchievementRelationshipsGroupAchievement } from './GameCenterAchievementRelationshipsGroupAchievement';
import {
    GameCenterAchievementRelationshipsGroupAchievementFromJSON,
    GameCenterAchievementRelationshipsGroupAchievementFromJSONTyped,
    GameCenterAchievementRelationshipsGroupAchievementToJSON,
    GameCenterAchievementRelationshipsGroupAchievementToJSONTyped,
} from './GameCenterAchievementRelationshipsGroupAchievement';
import type { GameCenterAchievementRelationshipsGameCenterGroup } from './GameCenterAchievementRelationshipsGameCenterGroup';
import {
    GameCenterAchievementRelationshipsGameCenterGroupFromJSON,
    GameCenterAchievementRelationshipsGameCenterGroupFromJSONTyped,
    GameCenterAchievementRelationshipsGameCenterGroupToJSON,
    GameCenterAchievementRelationshipsGameCenterGroupToJSONTyped,
} from './GameCenterAchievementRelationshipsGameCenterGroup';

/**
 * 
 * @export
 * @interface GameCenterAchievementRelationships
 */
export interface GameCenterAchievementRelationships {
    /**
     * 
     * @type {GameCenterAchievementReleaseRelationshipsGameCenterDetail}
     * @memberof GameCenterAchievementRelationships
     */
    gameCenterDetail?: GameCenterAchievementReleaseRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterAchievementRelationshipsGameCenterGroup}
     * @memberof GameCenterAchievementRelationships
     */
    gameCenterGroup?: GameCenterAchievementRelationshipsGameCenterGroup;
    /**
     * 
     * @type {GameCenterAchievementRelationshipsGroupAchievement}
     * @memberof GameCenterAchievementRelationships
     * @deprecated
     */
    groupAchievement?: GameCenterAchievementRelationshipsGroupAchievement;
    /**
     * 
     * @type {GameCenterAchievementRelationshipsLocalizations}
     * @memberof GameCenterAchievementRelationships
     */
    localizations?: GameCenterAchievementRelationshipsLocalizations;
    /**
     * 
     * @type {GameCenterAchievementRelationshipsReleases}
     * @memberof GameCenterAchievementRelationships
     */
    releases?: GameCenterAchievementRelationshipsReleases;
}

/**
 * Check if a given object implements the GameCenterAchievementRelationships interface.
 */
export function instanceOfGameCenterAchievementRelationships(value: object): value is GameCenterAchievementRelationships {
    return true;
}

export function GameCenterAchievementRelationshipsFromJSON(json: any): GameCenterAchievementRelationships {
    return GameCenterAchievementRelationshipsFromJSONTyped(json, false);
}

export function GameCenterAchievementRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterDetail': json['gameCenterDetail'] == null ? undefined : GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterGroup': json['gameCenterGroup'] == null ? undefined : GameCenterAchievementRelationshipsGameCenterGroupFromJSON(json['gameCenterGroup']),
        'groupAchievement': json['groupAchievement'] == null ? undefined : GameCenterAchievementRelationshipsGroupAchievementFromJSON(json['groupAchievement']),
        'localizations': json['localizations'] == null ? undefined : GameCenterAchievementRelationshipsLocalizationsFromJSON(json['localizations']),
        'releases': json['releases'] == null ? undefined : GameCenterAchievementRelationshipsReleasesFromJSON(json['releases']),
    };
}

export function GameCenterAchievementRelationshipsToJSON(json: any): GameCenterAchievementRelationships {
    return GameCenterAchievementRelationshipsToJSONTyped(json, false);
}

export function GameCenterAchievementRelationshipsToJSONTyped(value?: GameCenterAchievementRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON(value['gameCenterDetail']),
        'gameCenterGroup': GameCenterAchievementRelationshipsGameCenterGroupToJSON(value['gameCenterGroup']),
        'groupAchievement': GameCenterAchievementRelationshipsGroupAchievementToJSON(value['groupAchievement']),
        'localizations': GameCenterAchievementRelationshipsLocalizationsToJSON(value['localizations']),
        'releases': GameCenterAchievementRelationshipsReleasesToJSON(value['releases']),
    };
}
