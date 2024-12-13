
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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { AppStoreVersionRelationshipsGameCenterAppVersionData } from './AppStoreVersionRelationshipsGameCenterAppVersionData';
import {
    AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON,
    AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSONTyped,
    AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON,
    AppStoreVersionRelationshipsGameCenterAppVersionDataToJSONTyped,
} from './AppStoreVersionRelationshipsGameCenterAppVersionData';

/**
 * 
 * @export
 * @interface GameCenterAppVersionRelationshipsCompatibilityVersions
 */
export interface GameCenterAppVersionRelationshipsCompatibilityVersions {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterAppVersionRelationshipsCompatibilityVersions
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterAppVersionRelationshipsCompatibilityVersions
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppStoreVersionRelationshipsGameCenterAppVersionData>}
     * @memberof GameCenterAppVersionRelationshipsCompatibilityVersions
     */
    data?: Array<AppStoreVersionRelationshipsGameCenterAppVersionData>;
}

/**
 * Check if a given object implements the GameCenterAppVersionRelationshipsCompatibilityVersions interface.
 */
export function instanceOfGameCenterAppVersionRelationshipsCompatibilityVersions(value: object): value is GameCenterAppVersionRelationshipsCompatibilityVersions {
    return true;
}

export function GameCenterAppVersionRelationshipsCompatibilityVersionsFromJSON(json: any): GameCenterAppVersionRelationshipsCompatibilityVersions {
    return GameCenterAppVersionRelationshipsCompatibilityVersionsFromJSONTyped(json, false);
}

export function GameCenterAppVersionRelationshipsCompatibilityVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersionRelationshipsCompatibilityVersions {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON)),
    };
}

export function GameCenterAppVersionRelationshipsCompatibilityVersionsToJSON(json: any): GameCenterAppVersionRelationshipsCompatibilityVersions {
    return GameCenterAppVersionRelationshipsCompatibilityVersionsToJSONTyped(json, false);
}

export function GameCenterAppVersionRelationshipsCompatibilityVersionsToJSONTyped(value?: GameCenterAppVersionRelationshipsCompatibilityVersions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON)),
    };
}
