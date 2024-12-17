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
import type { AppRelationshipsGameCenterEnabledVersionsDataInner } from './AppRelationshipsGameCenterEnabledVersionsDataInner';
import {
    AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSON,
    AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSONTyped,
    AppRelationshipsGameCenterEnabledVersionsDataInnerToJSON,
    AppRelationshipsGameCenterEnabledVersionsDataInnerToJSONTyped,
} from './AppRelationshipsGameCenterEnabledVersionsDataInner';
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

/**
 * 
 * @export
 * @interface AppRelationshipsGameCenterEnabledVersions
 */
export interface AppRelationshipsGameCenterEnabledVersions {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsGameCenterEnabledVersions
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppRelationshipsGameCenterEnabledVersions
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppRelationshipsGameCenterEnabledVersionsDataInner>}
     * @memberof AppRelationshipsGameCenterEnabledVersions
     */
    data?: Array<AppRelationshipsGameCenterEnabledVersionsDataInner>;
}

/**
 * Check if a given object implements the AppRelationshipsGameCenterEnabledVersions interface.
 */
export function instanceOfAppRelationshipsGameCenterEnabledVersions(value: object): value is AppRelationshipsGameCenterEnabledVersions {
    return true;
}

export function AppRelationshipsGameCenterEnabledVersionsFromJSON(json: any): AppRelationshipsGameCenterEnabledVersions {
    return AppRelationshipsGameCenterEnabledVersionsFromJSONTyped(json, false);
}

export function AppRelationshipsGameCenterEnabledVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsGameCenterEnabledVersions {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSON)),
    };
}

export function AppRelationshipsGameCenterEnabledVersionsToJSON(json: any): AppRelationshipsGameCenterEnabledVersions {
    return AppRelationshipsGameCenterEnabledVersionsToJSONTyped(json, false);
}

export function AppRelationshipsGameCenterEnabledVersionsToJSONTyped(value?: AppRelationshipsGameCenterEnabledVersions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppRelationshipsGameCenterEnabledVersionsDataInnerToJSON)),
    };
}

