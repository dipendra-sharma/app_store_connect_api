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
 * @interface GameCenterMatchmakingTeamAttributes
 */
export interface GameCenterMatchmakingTeamAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTeamAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingTeamAttributes
     */
    minPlayers?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingTeamAttributes
     */
    maxPlayers?: number;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTeamAttributes interface.
 */
export function instanceOfGameCenterMatchmakingTeamAttributes(value: object): value is GameCenterMatchmakingTeamAttributes {
    return true;
}

export function GameCenterMatchmakingTeamAttributesFromJSON(json: any): GameCenterMatchmakingTeamAttributes {
    return GameCenterMatchmakingTeamAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'] == null ? undefined : json['referenceName'],
        'minPlayers': json['minPlayers'] == null ? undefined : json['minPlayers'],
        'maxPlayers': json['maxPlayers'] == null ? undefined : json['maxPlayers'],
    };
}

export function GameCenterMatchmakingTeamAttributesToJSON(json: any): GameCenterMatchmakingTeamAttributes {
    return GameCenterMatchmakingTeamAttributesToJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamAttributesToJSONTyped(value?: GameCenterMatchmakingTeamAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'referenceName': value['referenceName'],
        'minPlayers': value['minPlayers'],
        'maxPlayers': value['maxPlayers'],
    };
}

