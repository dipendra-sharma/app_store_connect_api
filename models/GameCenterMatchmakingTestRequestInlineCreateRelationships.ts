
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
import type { GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties } from './GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties';
import {
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSON,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSONTyped,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesToJSON,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesToJSONTyped,
} from './GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTestRequestInlineCreateRelationships
 */
export interface GameCenterMatchmakingTestRequestInlineCreateRelationships {
    /**
     * 
     * @type {GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateRelationships
     */
    matchmakingPlayerProperties?: GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTestRequestInlineCreateRelationships interface.
 */
export function instanceOfGameCenterMatchmakingTestRequestInlineCreateRelationships(value: object): value is GameCenterMatchmakingTestRequestInlineCreateRelationships {
    return true;
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSON(json: any): GameCenterMatchmakingTestRequestInlineCreateRelationships {
    return GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestRequestInlineCreateRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'matchmakingPlayerProperties': json['matchmakingPlayerProperties'] == null ? undefined : GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSON(json['matchmakingPlayerProperties']),
    };
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsToJSON(json: any): GameCenterMatchmakingTestRequestInlineCreateRelationships {
    return GameCenterMatchmakingTestRequestInlineCreateRelationshipsToJSONTyped(json, false);
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsToJSONTyped(value?: GameCenterMatchmakingTestRequestInlineCreateRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'matchmakingPlayerProperties': GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesToJSON(value['matchmakingPlayerProperties']),
    };
}

