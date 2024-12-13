
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
import type { AppRelationshipsPreReleaseVersionsDataInner } from './AppRelationshipsPreReleaseVersionsDataInner';
import {
    AppRelationshipsPreReleaseVersionsDataInnerFromJSON,
    AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped,
    AppRelationshipsPreReleaseVersionsDataInnerToJSON,
    AppRelationshipsPreReleaseVersionsDataInnerToJSONTyped,
} from './AppRelationshipsPreReleaseVersionsDataInner';
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
 * @interface AppRelationshipsPreReleaseVersions
 */
export interface AppRelationshipsPreReleaseVersions {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsPreReleaseVersions
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppRelationshipsPreReleaseVersions
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppRelationshipsPreReleaseVersionsDataInner>}
     * @memberof AppRelationshipsPreReleaseVersions
     */
    data?: Array<AppRelationshipsPreReleaseVersionsDataInner>;
}

/**
 * Check if a given object implements the AppRelationshipsPreReleaseVersions interface.
 */
export function instanceOfAppRelationshipsPreReleaseVersions(value: object): value is AppRelationshipsPreReleaseVersions {
    return true;
}

export function AppRelationshipsPreReleaseVersionsFromJSON(json: any): AppRelationshipsPreReleaseVersions {
    return AppRelationshipsPreReleaseVersionsFromJSONTyped(json, false);
}

export function AppRelationshipsPreReleaseVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsPreReleaseVersions {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppRelationshipsPreReleaseVersionsDataInnerFromJSON)),
    };
}

export function AppRelationshipsPreReleaseVersionsToJSON(json: any): AppRelationshipsPreReleaseVersions {
    return AppRelationshipsPreReleaseVersionsToJSONTyped(json, false);
}

export function AppRelationshipsPreReleaseVersionsToJSONTyped(value?: AppRelationshipsPreReleaseVersions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppRelationshipsPreReleaseVersionsDataInnerToJSON)),
    };
}
