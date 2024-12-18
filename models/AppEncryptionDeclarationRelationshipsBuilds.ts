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
import type { AppEncryptionDeclarationRelationshipsBuildsDataInner } from './AppEncryptionDeclarationRelationshipsBuildsDataInner';
import {
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSONTyped,
} from './AppEncryptionDeclarationRelationshipsBuildsDataInner';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationRelationshipsBuilds
 */
export interface AppEncryptionDeclarationRelationshipsBuilds {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppEncryptionDeclarationRelationshipsBuilds
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppEncryptionDeclarationRelationshipsBuilds
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof AppEncryptionDeclarationRelationshipsBuilds
     */
    data?: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationRelationshipsBuilds interface.
 */
export function instanceOfAppEncryptionDeclarationRelationshipsBuilds(value: object): value is AppEncryptionDeclarationRelationshipsBuilds {
    return true;
}

export function AppEncryptionDeclarationRelationshipsBuildsFromJSON(json: any): AppEncryptionDeclarationRelationshipsBuilds {
    return AppEncryptionDeclarationRelationshipsBuildsFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationRelationshipsBuildsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationRelationshipsBuilds {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)),
    };
}

export function AppEncryptionDeclarationRelationshipsBuildsToJSON(json: any): AppEncryptionDeclarationRelationshipsBuilds {
    return AppEncryptionDeclarationRelationshipsBuildsToJSONTyped(json, false);
}

export function AppEncryptionDeclarationRelationshipsBuildsToJSONTyped(value?: AppEncryptionDeclarationRelationshipsBuilds | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)),
    };
}

