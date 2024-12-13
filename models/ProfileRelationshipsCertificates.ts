
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
import type { ProfileRelationshipsCertificatesDataInner } from './ProfileRelationshipsCertificatesDataInner';
import {
    ProfileRelationshipsCertificatesDataInnerFromJSON,
    ProfileRelationshipsCertificatesDataInnerFromJSONTyped,
    ProfileRelationshipsCertificatesDataInnerToJSON,
    ProfileRelationshipsCertificatesDataInnerToJSONTyped,
} from './ProfileRelationshipsCertificatesDataInner';

/**
 * 
 * @export
 * @interface ProfileRelationshipsCertificates
 */
export interface ProfileRelationshipsCertificates {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof ProfileRelationshipsCertificates
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ProfileRelationshipsCertificates
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<ProfileRelationshipsCertificatesDataInner>}
     * @memberof ProfileRelationshipsCertificates
     */
    data?: Array<ProfileRelationshipsCertificatesDataInner>;
}

/**
 * Check if a given object implements the ProfileRelationshipsCertificates interface.
 */
export function instanceOfProfileRelationshipsCertificates(value: object): value is ProfileRelationshipsCertificates {
    return true;
}

export function ProfileRelationshipsCertificatesFromJSON(json: any): ProfileRelationshipsCertificates {
    return ProfileRelationshipsCertificatesFromJSONTyped(json, false);
}

export function ProfileRelationshipsCertificatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileRelationshipsCertificates {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ProfileRelationshipsCertificatesDataInnerFromJSON)),
    };
}

export function ProfileRelationshipsCertificatesToJSON(json: any): ProfileRelationshipsCertificates {
    return ProfileRelationshipsCertificatesToJSONTyped(json, false);
}

export function ProfileRelationshipsCertificatesToJSONTyped(value?: ProfileRelationshipsCertificates | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(ProfileRelationshipsCertificatesDataInnerToJSON)),
    };
}

