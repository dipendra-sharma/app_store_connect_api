
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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
import type { GameCenterAchievementLocalization } from './GameCenterAchievementLocalization';
import {
    GameCenterAchievementLocalizationFromJSON,
    GameCenterAchievementLocalizationFromJSONTyped,
    GameCenterAchievementLocalizationToJSON,
    GameCenterAchievementLocalizationToJSONTyped,
} from './GameCenterAchievementLocalization';
import type { GameCenterAchievementLocalizationsResponseIncludedInner } from './GameCenterAchievementLocalizationsResponseIncludedInner';
import {
    GameCenterAchievementLocalizationsResponseIncludedInnerFromJSON,
    GameCenterAchievementLocalizationsResponseIncludedInnerFromJSONTyped,
    GameCenterAchievementLocalizationsResponseIncludedInnerToJSON,
    GameCenterAchievementLocalizationsResponseIncludedInnerToJSONTyped,
} from './GameCenterAchievementLocalizationsResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationsResponse
 */
export interface GameCenterAchievementLocalizationsResponse {
    /**
     * 
     * @type {Array<GameCenterAchievementLocalization>}
     * @memberof GameCenterAchievementLocalizationsResponse
     */
    data: Array<GameCenterAchievementLocalization>;
    /**
     * 
     * @type {Array<GameCenterAchievementLocalizationsResponseIncludedInner>}
     * @memberof GameCenterAchievementLocalizationsResponse
     */
    included?: Array<GameCenterAchievementLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterAchievementLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterAchievementLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterAchievementLocalizationsResponse interface.
 */
export function instanceOfGameCenterAchievementLocalizationsResponse(value: object): value is GameCenterAchievementLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function GameCenterAchievementLocalizationsResponseFromJSON(json: any): GameCenterAchievementLocalizationsResponse {
    return GameCenterAchievementLocalizationsResponseFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterAchievementLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(GameCenterAchievementLocalizationsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterAchievementLocalizationsResponseToJSON(json: any): GameCenterAchievementLocalizationsResponse {
    return GameCenterAchievementLocalizationsResponseToJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationsResponseToJSONTyped(value?: GameCenterAchievementLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(GameCenterAchievementLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(GameCenterAchievementLocalizationsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

