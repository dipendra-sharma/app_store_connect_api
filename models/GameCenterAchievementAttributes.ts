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
 * @interface GameCenterAchievementAttributes
 */
export interface GameCenterAchievementAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementAttributes
     */
    vendorIdentifier?: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterAchievementAttributes
     */
    points?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementAttributes
     */
    showBeforeEarned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementAttributes
     */
    repeatable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementAttributes
     */
    archived?: boolean;
}

/**
 * Check if a given object implements the GameCenterAchievementAttributes interface.
 */
export function instanceOfGameCenterAchievementAttributes(value: object): value is GameCenterAchievementAttributes {
    return true;
}

export function GameCenterAchievementAttributesFromJSON(json: any): GameCenterAchievementAttributes {
    return GameCenterAchievementAttributesFromJSONTyped(json, false);
}

export function GameCenterAchievementAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'] == null ? undefined : json['referenceName'],
        'vendorIdentifier': json['vendorIdentifier'] == null ? undefined : json['vendorIdentifier'],
        'points': json['points'] == null ? undefined : json['points'],
        'showBeforeEarned': json['showBeforeEarned'] == null ? undefined : json['showBeforeEarned'],
        'repeatable': json['repeatable'] == null ? undefined : json['repeatable'],
        'archived': json['archived'] == null ? undefined : json['archived'],
    };
}

export function GameCenterAchievementAttributesToJSON(json: any): GameCenterAchievementAttributes {
    return GameCenterAchievementAttributesToJSONTyped(json, false);
}

export function GameCenterAchievementAttributesToJSONTyped(value?: GameCenterAchievementAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'referenceName': value['referenceName'],
        'vendorIdentifier': value['vendorIdentifier'],
        'points': value['points'],
        'showBeforeEarned': value['showBeforeEarned'],
        'repeatable': value['repeatable'],
        'archived': value['archived'],
    };
}

