
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
 * @interface GameCenterLeaderboardCreateRequestDataAttributes
 */
export interface GameCenterLeaderboardCreateRequestDataAttributes {
    /**
     * 
     * @type {GameCenterLeaderboardFormatter}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    defaultFormatter: GameCenterLeaderboardFormatter;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    vendorIdentifier: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    submissionType: GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    scoreSortType: GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    scoreRangeStart?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    scoreRangeEnd?: string;
    /**
     * 
     * @type {Date}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    recurrenceStartDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    recurrenceDuration?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    recurrenceRule?: string;
}


/**
 * @export
 */
export const GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum = {
    BestScore: 'BEST_SCORE',
    MostRecentScore: 'MOST_RECENT_SCORE'
} as const;
export type GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum = typeof GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum[keyof typeof GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum];

/**
 * @export
 */
export const GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum = typeof GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum[keyof typeof GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterLeaderboardCreateRequestDataAttributes(value: object): value is GameCenterLeaderboardCreateRequestDataAttributes {
    if (!('defaultFormatter' in value) || value['defaultFormatter'] === undefined) return false;
    if (!('referenceName' in value) || value['referenceName'] === undefined) return false;
    if (!('vendorIdentifier' in value) || value['vendorIdentifier'] === undefined) return false;
    if (!('submissionType' in value) || value['submissionType'] === undefined) return false;
    if (!('scoreSortType' in value) || value['scoreSortType'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardCreateRequestDataAttributesFromJSON(json: any): GameCenterLeaderboardCreateRequestDataAttributes {
    return GameCenterLeaderboardCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'defaultFormatter': GameCenterLeaderboardFormatterFromJSON(json['defaultFormatter']),
        'referenceName': json['referenceName'],
        'vendorIdentifier': json['vendorIdentifier'],
        'submissionType': json['submissionType'],
        'scoreSortType': json['scoreSortType'],
        'scoreRangeStart': json['scoreRangeStart'] == null ? undefined : json['scoreRangeStart'],
        'scoreRangeEnd': json['scoreRangeEnd'] == null ? undefined : json['scoreRangeEnd'],
        'recurrenceStartDate': json['recurrenceStartDate'] == null ? undefined : (new Date(json['recurrenceStartDate'])),
        'recurrenceDuration': json['recurrenceDuration'] == null ? undefined : json['recurrenceDuration'],
        'recurrenceRule': json['recurrenceRule'] == null ? undefined : json['recurrenceRule'],
    };
}

export function GameCenterLeaderboardCreateRequestDataAttributesToJSON(json: any): GameCenterLeaderboardCreateRequestDataAttributes {
    return GameCenterLeaderboardCreateRequestDataAttributesToJSONTyped(json, false);
}

export function GameCenterLeaderboardCreateRequestDataAttributesToJSONTyped(value?: GameCenterLeaderboardCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'defaultFormatter': GameCenterLeaderboardFormatterToJSON(value['defaultFormatter']),
        'referenceName': value['referenceName'],
        'vendorIdentifier': value['vendorIdentifier'],
        'submissionType': value['submissionType'],
        'scoreSortType': value['scoreSortType'],
        'scoreRangeStart': value['scoreRangeStart'],
        'scoreRangeEnd': value['scoreRangeEnd'],
        'recurrenceStartDate': value['recurrenceStartDate'] == null ? undefined : ((value['recurrenceStartDate']).toISOString()),
        'recurrenceDuration': value['recurrenceDuration'],
        'recurrenceRule': value['recurrenceRule'],
    };
}

