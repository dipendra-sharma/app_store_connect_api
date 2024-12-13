
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
import type { AppRelationshipsGameCenterDetailData } from './AppRelationshipsGameCenterDetailData';
import {
    AppRelationshipsGameCenterDetailDataFromJSON,
    AppRelationshipsGameCenterDetailDataFromJSONTyped,
    AppRelationshipsGameCenterDetailDataToJSON,
    AppRelationshipsGameCenterDetailDataToJSONTyped,
} from './AppRelationshipsGameCenterDetailData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface GameCenterGroupRelationshipsGameCenterDetails
 */
export interface GameCenterGroupRelationshipsGameCenterDetails {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterGroupRelationshipsGameCenterDetails
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterGroupRelationshipsGameCenterDetails
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppRelationshipsGameCenterDetailData>}
     * @memberof GameCenterGroupRelationshipsGameCenterDetails
     */
    data?: Array<AppRelationshipsGameCenterDetailData>;
}

/**
 * Check if a given object implements the GameCenterGroupRelationshipsGameCenterDetails interface.
 */
export function instanceOfGameCenterGroupRelationshipsGameCenterDetails(value: object): value is GameCenterGroupRelationshipsGameCenterDetails {
    return true;
}

export function GameCenterGroupRelationshipsGameCenterDetailsFromJSON(json: any): GameCenterGroupRelationshipsGameCenterDetails {
    return GameCenterGroupRelationshipsGameCenterDetailsFromJSONTyped(json, false);
}

export function GameCenterGroupRelationshipsGameCenterDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupRelationshipsGameCenterDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppRelationshipsGameCenterDetailDataFromJSON)),
    };
}

export function GameCenterGroupRelationshipsGameCenterDetailsToJSON(json: any): GameCenterGroupRelationshipsGameCenterDetails {
    return GameCenterGroupRelationshipsGameCenterDetailsToJSONTyped(json, false);
}

export function GameCenterGroupRelationshipsGameCenterDetailsToJSONTyped(value?: GameCenterGroupRelationshipsGameCenterDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppRelationshipsGameCenterDetailDataToJSON)),
    };
}

