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
 * @interface AppStoreVersionRelationshipsGameCenterAppVersion
 */
export interface AppStoreVersionRelationshipsGameCenterAppVersion {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppStoreVersionRelationshipsGameCenterAppVersion
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppStoreVersionRelationshipsGameCenterAppVersionData}
     * @memberof AppStoreVersionRelationshipsGameCenterAppVersion
     */
    data?: AppStoreVersionRelationshipsGameCenterAppVersionData;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsGameCenterAppVersion interface.
 */
export function instanceOfAppStoreVersionRelationshipsGameCenterAppVersion(value: object): value is AppStoreVersionRelationshipsGameCenterAppVersion {
    return true;
}

export function AppStoreVersionRelationshipsGameCenterAppVersionFromJSON(json: any): AppStoreVersionRelationshipsGameCenterAppVersion {
    return AppStoreVersionRelationshipsGameCenterAppVersionFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsGameCenterAppVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsGameCenterAppVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsGameCenterAppVersionToJSON(json: any): AppStoreVersionRelationshipsGameCenterAppVersion {
    return AppStoreVersionRelationshipsGameCenterAppVersionToJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsGameCenterAppVersionToJSONTyped(value?: AppStoreVersionRelationshipsGameCenterAppVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON(value['data']),
    };
}

