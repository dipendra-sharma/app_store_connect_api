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
 * @interface GameCenterLeaderboardUpdateRequestDataAttributes
 */
export interface GameCenterLeaderboardUpdateRequestDataAttributes {
    /**
     * 
     * @type {GameCenterLeaderboardFormatter}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    defaultFormatter?: GameCenterLeaderboardFormatter;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    submissionType?: GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    scoreSortType?: GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    scoreRangeStart?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    scoreRangeEnd?: string;
    /**
     * 
     * @type {Date}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    recurrenceStartDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    recurrenceDuration?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    recurrenceRule?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    archived?: boolean;
}


/**
 * @export
 */
export const GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum = {
    BestScore: 'BEST_SCORE',
    MostRecentScore: 'MOST_RECENT_SCORE'
} as const;
export type GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum = typeof GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum[keyof typeof GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum];

/**
 * @export
 */
export const GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum = typeof GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum[keyof typeof GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardUpdateRequestDataAttributes interface.
 */
export function instanceOfGameCenterLeaderboardUpdateRequestDataAttributes(value: object): value is GameCenterLeaderboardUpdateRequestDataAttributes {
    return true;
}

export function GameCenterLeaderboardUpdateRequestDataAttributesFromJSON(json: any): GameCenterLeaderboardUpdateRequestDataAttributes {
    return GameCenterLeaderboardUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'defaultFormatter': json['defaultFormatter'] == null ? undefined : GameCenterLeaderboardFormatterFromJSON(json['defaultFormatter']),
        'referenceName': json['referenceName'] == null ? undefined : json['referenceName'],
        'submissionType': json['submissionType'] == null ? undefined : json['submissionType'],
        'scoreSortType': json['scoreSortType'] == null ? undefined : json['scoreSortType'],
        'scoreRangeStart': json['scoreRangeStart'] == null ? undefined : json['scoreRangeStart'],
        'scoreRangeEnd': json['scoreRangeEnd'] == null ? undefined : json['scoreRangeEnd'],
        'recurrenceStartDate': json['recurrenceStartDate'] == null ? undefined : (new Date(json['recurrenceStartDate'])),
        'recurrenceDuration': json['recurrenceDuration'] == null ? undefined : json['recurrenceDuration'],
        'recurrenceRule': json['recurrenceRule'] == null ? undefined : json['recurrenceRule'],
        'archived': json['archived'] == null ? undefined : json['archived'],
    };
}

export function GameCenterLeaderboardUpdateRequestDataAttributesToJSON(json: any): GameCenterLeaderboardUpdateRequestDataAttributes {
    return GameCenterLeaderboardUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function GameCenterLeaderboardUpdateRequestDataAttributesToJSONTyped(value?: GameCenterLeaderboardUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'defaultFormatter': GameCenterLeaderboardFormatterToJSON(value['defaultFormatter']),
        'referenceName': value['referenceName'],
        'submissionType': value['submissionType'],
        'scoreSortType': value['scoreSortType'],
        'scoreRangeStart': value['scoreRangeStart'],
        'scoreRangeEnd': value['scoreRangeEnd'],
        'recurrenceStartDate': value['recurrenceStartDate'] == null ? undefined : ((value['recurrenceStartDate']).toISOString()),
        'recurrenceDuration': value['recurrenceDuration'],
        'recurrenceRule': value['recurrenceRule'],
        'archived': value['archived'],
    };
}

