
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
 * @interface GameCenterMatchmakingRuleCreateRequestDataAttributes
 */
export interface GameCenterMatchmakingRuleCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleCreateRequestDataAttributes
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleCreateRequestDataAttributes
     */
    type: GameCenterMatchmakingRuleCreateRequestDataAttributesTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleCreateRequestDataAttributes
     */
    expression: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingRuleCreateRequestDataAttributes
     */
    weight?: number;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleCreateRequestDataAttributesTypeEnum = {
    Compatible: 'COMPATIBLE',
    Distance: 'DISTANCE',
    Match: 'MATCH',
    Team: 'TEAM'
} as const;
export type GameCenterMatchmakingRuleCreateRequestDataAttributesTypeEnum = typeof GameCenterMatchmakingRuleCreateRequestDataAttributesTypeEnum[keyof typeof GameCenterMatchmakingRuleCreateRequestDataAttributesTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterMatchmakingRuleCreateRequestDataAttributes(value: object): value is GameCenterMatchmakingRuleCreateRequestDataAttributes {
    if (!('referenceName' in value) || value['referenceName'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('expression' in value) || value['expression'] === undefined) return false;
    return true;
}

export function GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSON(json: any): GameCenterMatchmakingRuleCreateRequestDataAttributes {
    return GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'],
        'description': json['description'],
        'type': json['type'],
        'expression': json['expression'],
        'weight': json['weight'] == null ? undefined : json['weight'],
    };
}

export function GameCenterMatchmakingRuleCreateRequestDataAttributesToJSON(json: any): GameCenterMatchmakingRuleCreateRequestDataAttributes {
    return GameCenterMatchmakingRuleCreateRequestDataAttributesToJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleCreateRequestDataAttributesToJSONTyped(value?: GameCenterMatchmakingRuleCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
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

