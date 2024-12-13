
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
 * @interface GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes
 */
export interface GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes
     */
    bundleId: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes
     */
    challengeIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes
     */
    context?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes
     */
    scopedPlayerId: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes
     */
    score: string;
    /**
     * 
     * @type {Date}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes
     */
    submittedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes
     */
    vendorIdentifier: string;
}

/**
 * Check if a given object implements the GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes(value: object): value is GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes {
    if (!('bundleId' in value) || value['bundleId'] === undefined) return false;
    if (!('scopedPlayerId' in value) || value['scopedPlayerId'] === undefined) return false;
    if (!('score' in value) || value['score'] === undefined) return false;
    if (!('vendorIdentifier' in value) || value['vendorIdentifier'] === undefined) return false;
    return true;
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSON(json: any): GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes {
    return GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'bundleId': json['bundleId'],
        'challengeIds': json['challengeIds'] == null ? undefined : json['challengeIds'],
        'context': json['context'] == null ? undefined : json['context'],
        'scopedPlayerId': json['scopedPlayerId'],
        'score': json['score'],
        'submittedDate': json['submittedDate'] == null ? undefined : (new Date(json['submittedDate'])),
        'vendorIdentifier': json['vendorIdentifier'],
    };
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesToJSON(json: any): GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes {
    return GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesToJSONTyped(json, false);
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesToJSONTyped(value?: GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
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

