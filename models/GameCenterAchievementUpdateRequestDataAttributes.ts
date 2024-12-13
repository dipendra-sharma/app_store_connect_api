
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
 * @interface GameCenterAchievementUpdateRequestDataAttributes
 */
export interface GameCenterAchievementUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    points?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    showBeforeEarned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    repeatable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    archived?: boolean;
}

/**
 * Check if a given object implements the GameCenterAchievementUpdateRequestDataAttributes interface.
 */
export function instanceOfGameCenterAchievementUpdateRequestDataAttributes(value: object): value is GameCenterAchievementUpdateRequestDataAttributes {
    return true;
}

export function GameCenterAchievementUpdateRequestDataAttributesFromJSON(json: any): GameCenterAchievementUpdateRequestDataAttributes {
    return GameCenterAchievementUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterAchievementUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'] == null ? undefined : json['referenceName'],
        'points': json['points'] == null ? undefined : json['points'],
        'showBeforeEarned': json['showBeforeEarned'] == null ? undefined : json['showBeforeEarned'],
        'repeatable': json['repeatable'] == null ? undefined : json['repeatable'],
        'archived': json['archived'] == null ? undefined : json['archived'],
    };
}

export function GameCenterAchievementUpdateRequestDataAttributesToJSON(json: any): GameCenterAchievementUpdateRequestDataAttributes {
    return GameCenterAchievementUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function GameCenterAchievementUpdateRequestDataAttributesToJSONTyped(value?: GameCenterAchievementUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'referenceName': value['referenceName'],
        'points': value['points'],
        'showBeforeEarned': value['showBeforeEarned'],
        'repeatable': value['repeatable'],
        'archived': value['archived'],
    };
}

