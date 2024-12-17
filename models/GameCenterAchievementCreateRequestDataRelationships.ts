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
import type { GameCenterAchievementReleaseRelationshipsGameCenterDetail } from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import {
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSONTyped,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSONTyped,
} from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
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
 * @interface GameCenterAchievementCreateRequestDataRelationships
 */
export interface GameCenterAchievementCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterAchievementReleaseRelationshipsGameCenterDetail}
     * @memberof GameCenterAchievementCreateRequestDataRelationships
     */
    gameCenterDetail?: GameCenterAchievementReleaseRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterAchievementRelationshipsGameCenterGroup}
     * @memberof GameCenterAchievementCreateRequestDataRelationships
     */
    gameCenterGroup?: GameCenterAchievementRelationshipsGameCenterGroup;
}

/**
 * Check if a given object implements the GameCenterAchievementCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterAchievementCreateRequestDataRelationships(value: object): value is GameCenterAchievementCreateRequestDataRelationships {
    return true;
}

export function GameCenterAchievementCreateRequestDataRelationshipsFromJSON(json: any): GameCenterAchievementCreateRequestDataRelationships {
    return GameCenterAchievementCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterAchievementCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'gameCenterDetail': json['gameCenterDetail'] == null ? undefined : GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterGroup': json['gameCenterGroup'] == null ? undefined : GameCenterAchievementRelationshipsGameCenterGroupFromJSON(json['gameCenterGroup']),
    };
}

export function GameCenterAchievementCreateRequestDataRelationshipsToJSON(json: any): GameCenterAchievementCreateRequestDataRelationships {
    return GameCenterAchievementCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function GameCenterAchievementCreateRequestDataRelationshipsToJSONTyped(value?: GameCenterAchievementCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON(value['gameCenterDetail']),
        'gameCenterGroup': GameCenterAchievementRelationshipsGameCenterGroupToJSON(value['gameCenterGroup']),
    };
}

