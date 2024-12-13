
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
/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleAttributes
 */
export interface GameCenterMatchmakingRuleAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleAttributes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleAttributes
     */
    type?: GameCenterMatchmakingRuleAttributesTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleAttributes
     */
    expression?: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingRuleAttributes
     */
    weight?: number;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleAttributesTypeEnum = {
    Compatible: 'COMPATIBLE',
    Distance: 'DISTANCE',
    Match: 'MATCH',
    Team: 'TEAM'
} as const;
export type GameCenterMatchmakingRuleAttributesTypeEnum = typeof GameCenterMatchmakingRuleAttributesTypeEnum[keyof typeof GameCenterMatchmakingRuleAttributesTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleAttributes interface.
 */
export function instanceOfGameCenterMatchmakingRuleAttributes(value: object): value is GameCenterMatchmakingRuleAttributes {
    return true;
}

export function GameCenterMatchmakingRuleAttributesFromJSON(json: any): GameCenterMatchmakingRuleAttributes {
    return GameCenterMatchmakingRuleAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'] == null ? undefined : json['referenceName'],
        'description': json['description'] == null ? undefined : json['description'],
        'type': json['type'] == null ? undefined : json['type'],
        'expression': json['expression'] == null ? undefined : json['expression'],
        'weight': json['weight'] == null ? undefined : json['weight'],
    };
}

export function GameCenterMatchmakingRuleAttributesToJSON(json: any): GameCenterMatchmakingRuleAttributes {
    return GameCenterMatchmakingRuleAttributesToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleAttributesToJSONTyped(value?: GameCenterMatchmakingRuleAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'referenceName': value['referenceName'],
        'description': value['description'],
        'type': value['type'],
        'expression': value['expression'],
        'weight': value['weight'],
    };
}
