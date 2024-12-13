
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
import type { GameCenterLeaderboardFormatter } from './GameCenterLeaderboardFormatter';
import {
    GameCenterLeaderboardFormatterFromJSON,
    GameCenterLeaderboardFormatterFromJSONTyped,
    GameCenterLeaderboardFormatterToJSON,
    GameCenterLeaderboardFormatterToJSONTyped,
} from './GameCenterLeaderboardFormatter';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardLocalizationCreateRequestDataAttributes
 */
export interface GameCenterLeaderboardLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {GameCenterLeaderboardFormatter}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    formatterOverride?: GameCenterLeaderboardFormatter;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    formatterSuffix?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    formatterSuffixSingular?: string;
}



/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationCreateRequestDataAttributes(value: object): value is GameCenterLeaderboardLocalizationCreateRequestDataAttributes {
    if (!('locale' in value) || value['locale'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardLocalizationCreateRequestDataAttributesFromJSON(json: any): GameCenterLeaderboardLocalizationCreateRequestDataAttributes {
    return GameCenterLeaderboardLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'locale': json['locale'],
        'name': json['name'],
        'formatterOverride': json['formatterOverride'] == null ? undefined : GameCenterLeaderboardFormatterFromJSON(json['formatterOverride']),
        'formatterSuffix': json['formatterSuffix'] == null ? undefined : json['formatterSuffix'],
        'formatterSuffixSingular': json['formatterSuffixSingular'] == null ? undefined : json['formatterSuffixSingular'],
    };
}

export function GameCenterLeaderboardLocalizationCreateRequestDataAttributesToJSON(json: any): GameCenterLeaderboardLocalizationCreateRequestDataAttributes {
    return GameCenterLeaderboardLocalizationCreateRequestDataAttributesToJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationCreateRequestDataAttributesToJSONTyped(value?: GameCenterLeaderboardLocalizationCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'locale': value['locale'],
        'name': value['name'],
        'formatterOverride': GameCenterLeaderboardFormatterToJSON(value['formatterOverride']),
        'formatterSuffix': value['formatterSuffix'],
        'formatterSuffixSingular': value['formatterSuffixSingular'],
    };
}

