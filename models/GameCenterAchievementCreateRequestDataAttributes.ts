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
 * @interface GameCenterAchievementCreateRequestDataAttributes
 */
export interface GameCenterAchievementCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    vendorIdentifier: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    points: number;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    showBeforeEarned: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    repeatable: boolean;
}

/**
 * Check if a given object implements the GameCenterAchievementCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterAchievementCreateRequestDataAttributes(value: object): value is GameCenterAchievementCreateRequestDataAttributes {
    if (!('referenceName' in value) || value['referenceName'] === undefined) return false;
    if (!('vendorIdentifier' in value) || value['vendorIdentifier'] === undefined) return false;
    if (!('points' in value) || value['points'] === undefined) return false;
    if (!('showBeforeEarned' in value) || value['showBeforeEarned'] === undefined) return false;
    if (!('repeatable' in value) || value['repeatable'] === undefined) return false;
    return true;
}

export function GameCenterAchievementCreateRequestDataAttributesFromJSON(json: any): GameCenterAchievementCreateRequestDataAttributes {
    return GameCenterAchievementCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterAchievementCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'],
        'vendorIdentifier': json['vendorIdentifier'],
        'points': json['points'],
        'showBeforeEarned': json['showBeforeEarned'],
        'repeatable': json['repeatable'],
    };
}

export function GameCenterAchievementCreateRequestDataAttributesToJSON(json: any): GameCenterAchievementCreateRequestDataAttributes {
    return GameCenterAchievementCreateRequestDataAttributesToJSONTyped(json, false);
}

export function GameCenterAchievementCreateRequestDataAttributesToJSONTyped(value?: GameCenterAchievementCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'referenceName': value['referenceName'],
        'vendorIdentifier': value['vendorIdentifier'],
        'points': value['points'],
        'showBeforeEarned': value['showBeforeEarned'],
        'repeatable': value['repeatable'],
    };
}

