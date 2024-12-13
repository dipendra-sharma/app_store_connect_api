
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
import type { GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner } from './GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner';
import {
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerFromJSON,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerFromJSONTyped,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerToJSON,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerToJSONTyped,
} from './GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties
 */
export interface GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties {
    /**
     * 
     * @type {Array<GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner>}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties
     */
    data?: Array<GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner>;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties interface.
 */
export function instanceOfGameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties(value: object): value is GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties {
    return true;
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSON(json: any): GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties {
    return GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerFromJSON)),
    };
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesToJSON(json: any): GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties {
    return GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesToJSONTyped(json, false);
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesToJSONTyped(value?: GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerToJSON)),
    };
}
