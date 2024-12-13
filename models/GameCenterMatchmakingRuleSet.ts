
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
import type { GameCenterMatchmakingRuleSetRelationships } from './GameCenterMatchmakingRuleSetRelationships';
import {
    GameCenterMatchmakingRuleSetRelationshipsFromJSON,
    GameCenterMatchmakingRuleSetRelationshipsFromJSONTyped,
    GameCenterMatchmakingRuleSetRelationshipsToJSON,
    GameCenterMatchmakingRuleSetRelationshipsToJSONTyped,
} from './GameCenterMatchmakingRuleSetRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { GameCenterMatchmakingRuleSetAttributes } from './GameCenterMatchmakingRuleSetAttributes';
import {
    GameCenterMatchmakingRuleSetAttributesFromJSON,
    GameCenterMatchmakingRuleSetAttributesFromJSONTyped,
    GameCenterMatchmakingRuleSetAttributesToJSON,
    GameCenterMatchmakingRuleSetAttributesToJSONTyped,
} from './GameCenterMatchmakingRuleSetAttributes';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSet
 */
export interface GameCenterMatchmakingRuleSet {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSet
     */
    type: GameCenterMatchmakingRuleSetTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSet
     */
    id: string;
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetAttributes}
     * @memberof GameCenterMatchmakingRuleSet
     */
    attributes?: GameCenterMatchmakingRuleSetAttributes;
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetRelationships}
     * @memberof GameCenterMatchmakingRuleSet
     */
    relationships?: GameCenterMatchmakingRuleSetRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterMatchmakingRuleSet
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleSetTypeEnum = {
    GameCenterMatchmakingRuleSets: 'gameCenterMatchmakingRuleSets'
} as const;
export type GameCenterMatchmakingRuleSetTypeEnum = typeof GameCenterMatchmakingRuleSetTypeEnum[keyof typeof GameCenterMatchmakingRuleSetTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleSet interface.
 */
export function instanceOfGameCenterMatchmakingRuleSet(value: object): value is GameCenterMatchmakingRuleSet {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingRuleSetFromJSON(json: any): GameCenterMatchmakingRuleSet {
    return GameCenterMatchmakingRuleSetFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSet {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterMatchmakingRuleSetAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterMatchmakingRuleSetRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingRuleSetToJSON(json: any): GameCenterMatchmakingRuleSet {
    return GameCenterMatchmakingRuleSetToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetToJSONTyped(value?: GameCenterMatchmakingRuleSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterMatchmakingRuleSetAttributesToJSON(value['attributes']),
        'relationships': GameCenterMatchmakingRuleSetRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
