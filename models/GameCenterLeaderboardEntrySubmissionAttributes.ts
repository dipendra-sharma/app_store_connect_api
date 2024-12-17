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
 * @interface GameCenterLeaderboardEntrySubmissionAttributes
 */
export interface GameCenterLeaderboardEntrySubmissionAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionAttributes
     */
    bundleId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GameCenterLeaderboardEntrySubmissionAttributes
     */
    challengeIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionAttributes
     */
    context?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionAttributes
     */
    scopedPlayerId?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionAttributes
     */
    score?: string;
    /**
     * 
     * @type {Date}
     * @memberof GameCenterLeaderboardEntrySubmissionAttributes
     */
    submittedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionAttributes
     */
    vendorIdentifier?: string;
}

/**
 * Check if a given object implements the GameCenterLeaderboardEntrySubmissionAttributes interface.
 */
export function instanceOfGameCenterLeaderboardEntrySubmissionAttributes(value: object): value is GameCenterLeaderboardEntrySubmissionAttributes {
    return true;
}

export function GameCenterLeaderboardEntrySubmissionAttributesFromJSON(json: any): GameCenterLeaderboardEntrySubmissionAttributes {
    return GameCenterLeaderboardEntrySubmissionAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardEntrySubmissionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardEntrySubmissionAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'bundleId': json['bundleId'] == null ? undefined : json['bundleId'],
        'challengeIds': json['challengeIds'] == null ? undefined : json['challengeIds'],
        'context': json['context'] == null ? undefined : json['context'],
        'scopedPlayerId': json['scopedPlayerId'] == null ? undefined : json['scopedPlayerId'],
        'score': json['score'] == null ? undefined : json['score'],
        'submittedDate': json['submittedDate'] == null ? undefined : (new Date(json['submittedDate'])),
        'vendorIdentifier': json['vendorIdentifier'] == null ? undefined : json['vendorIdentifier'],
    };
}

export function GameCenterLeaderboardEntrySubmissionAttributesToJSON(json: any): GameCenterLeaderboardEntrySubmissionAttributes {
    return GameCenterLeaderboardEntrySubmissionAttributesToJSONTyped(json, false);
}

export function GameCenterLeaderboardEntrySubmissionAttributesToJSONTyped(value?: GameCenterLeaderboardEntrySubmissionAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bundleId': value['bundleId'],
        'challengeIds': value['challengeIds'],
        'context': value['context'],
        'scopedPlayerId': value['scopedPlayerId'],
        'score': value['score'],
        'submittedDate': value['submittedDate'] == null ? undefined : ((value['submittedDate']).toISOString()),
        'vendorIdentifier': value['vendorIdentifier'],
    };
}

