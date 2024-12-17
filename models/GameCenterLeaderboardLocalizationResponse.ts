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
import type { GameCenterLeaderboardLocalizationsResponseIncludedInner } from './GameCenterLeaderboardLocalizationsResponseIncludedInner';
import {
    GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSON,
    GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSON,
    GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSONTyped,
} from './GameCenterLeaderboardLocalizationsResponseIncludedInner';
import type { GameCenterLeaderboardLocalization } from './GameCenterLeaderboardLocalization';
import {
    GameCenterLeaderboardLocalizationFromJSON,
    GameCenterLeaderboardLocalizationFromJSONTyped,
    GameCenterLeaderboardLocalizationToJSON,
    GameCenterLeaderboardLocalizationToJSONTyped,
} from './GameCenterLeaderboardLocalization';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardLocalizationResponse
 */
export interface GameCenterLeaderboardLocalizationResponse {
    /**
     * 
     * @type {GameCenterLeaderboardLocalization}
     * @memberof GameCenterLeaderboardLocalizationResponse
     */
    data: GameCenterLeaderboardLocalization;
    /**
     * 
     * @type {Array<GameCenterLeaderboardLocalizationsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardLocalizationResponse
     */
    included?: Array<GameCenterLeaderboardLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationResponse interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationResponse(value: object): value is GameCenterLeaderboardLocalizationResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardLocalizationResponseFromJSON(json: any): GameCenterLeaderboardLocalizationResponse {
    return GameCenterLeaderboardLocalizationResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardLocalizationFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardLocalizationResponseToJSON(json: any): GameCenterLeaderboardLocalizationResponse {
    return GameCenterLeaderboardLocalizationResponseToJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationResponseToJSONTyped(value?: GameCenterLeaderboardLocalizationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GameCenterLeaderboardLocalizationToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

