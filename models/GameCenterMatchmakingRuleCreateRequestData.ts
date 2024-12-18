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
import type { GameCenterMatchmakingRuleCreateRequestDataRelationships } from './GameCenterMatchmakingRuleCreateRequestDataRelationships';
import {
    GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON,
    GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON,
    GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSONTyped,
} from './GameCenterMatchmakingRuleCreateRequestDataRelationships';
import type { GameCenterMatchmakingRuleCreateRequestDataAttributes } from './GameCenterMatchmakingRuleCreateRequestDataAttributes';
import {
    GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSON,
    GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSONTyped,
    GameCenterMatchmakingRuleCreateRequestDataAttributesToJSON,
    GameCenterMatchmakingRuleCreateRequestDataAttributesToJSONTyped,
} from './GameCenterMatchmakingRuleCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleCreateRequestData
 */
export interface GameCenterMatchmakingRuleCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleCreateRequestData
     */
    type: GameCenterMatchmakingRuleCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterMatchmakingRuleCreateRequestDataAttributes}
     * @memberof GameCenterMatchmakingRuleCreateRequestData
     */
    attributes: GameCenterMatchmakingRuleCreateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterMatchmakingRuleCreateRequestDataRelationships}
     * @memberof GameCenterMatchmakingRuleCreateRequestData
     */
    relationships: GameCenterMatchmakingRuleCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleCreateRequestDataTypeEnum = {
    GameCenterMatchmakingRules: 'gameCenterMatchmakingRules'
} as const;
export type GameCenterMatchmakingRuleCreateRequestDataTypeEnum = typeof GameCenterMatchmakingRuleCreateRequestDataTypeEnum[keyof typeof GameCenterMatchmakingRuleCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleCreateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingRuleCreateRequestData(value: object): value is GameCenterMatchmakingRuleCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingRuleCreateRequestDataFromJSON(json: any): GameCenterMatchmakingRuleCreateRequestData {
    return GameCenterMatchmakingRuleCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterMatchmakingRuleCreateRequestDataToJSON(json: any): GameCenterMatchmakingRuleCreateRequestData {
    return GameCenterMatchmakingRuleCreateRequestDataToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleCreateRequestDataToJSONTyped(value?: GameCenterMatchmakingRuleCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': GameCenterMatchmakingRuleCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

