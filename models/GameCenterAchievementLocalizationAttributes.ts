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
 * @interface GameCenterAchievementLocalizationAttributes
 */
export interface GameCenterAchievementLocalizationAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalizationAttributes
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalizationAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalizationAttributes
     */
    beforeEarnedDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalizationAttributes
     */
    afterEarnedDescription?: string;
}

/**
 * Check if a given object implements the GameCenterAchievementLocalizationAttributes interface.
 */
export function instanceOfGameCenterAchievementLocalizationAttributes(value: object): value is GameCenterAchievementLocalizationAttributes {
    return true;
}

export function GameCenterAchievementLocalizationAttributesFromJSON(json: any): GameCenterAchievementLocalizationAttributes {
    return GameCenterAchievementLocalizationAttributesFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'locale': json['locale'] == null ? undefined : json['locale'],
        'name': json['name'] == null ? undefined : json['name'],
        'beforeEarnedDescription': json['beforeEarnedDescription'] == null ? undefined : json['beforeEarnedDescription'],
        'afterEarnedDescription': json['afterEarnedDescription'] == null ? undefined : json['afterEarnedDescription'],
    };
}

export function GameCenterAchievementLocalizationAttributesToJSON(json: any): GameCenterAchievementLocalizationAttributes {
    return GameCenterAchievementLocalizationAttributesToJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationAttributesToJSONTyped(value?: GameCenterAchievementLocalizationAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'locale': value['locale'],
        'name': value['name'],
        'beforeEarnedDescription': value['beforeEarnedDescription'],
        'afterEarnedDescription': value['afterEarnedDescription'],
    };
}

