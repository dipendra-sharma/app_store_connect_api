
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
import type { CiMacOsVersionRelationshipsXcodeVersionsDataInner } from './CiMacOsVersionRelationshipsXcodeVersionsDataInner';
import {
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSONTyped,
} from './CiMacOsVersionRelationshipsXcodeVersionsDataInner';

/**
 * 
 * @export
 * @interface CiMacOsVersionRelationshipsXcodeVersions
 */
export interface CiMacOsVersionRelationshipsXcodeVersions {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof CiMacOsVersionRelationshipsXcodeVersions
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiMacOsVersionRelationshipsXcodeVersions
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<CiMacOsVersionRelationshipsXcodeVersionsDataInner>}
     * @memberof CiMacOsVersionRelationshipsXcodeVersions
     */
    data?: Array<CiMacOsVersionRelationshipsXcodeVersionsDataInner>;
}

/**
 * Check if a given object implements the CiMacOsVersionRelationshipsXcodeVersions interface.
 */
export function instanceOfCiMacOsVersionRelationshipsXcodeVersions(value: object): value is CiMacOsVersionRelationshipsXcodeVersions {
    return true;
}

export function CiMacOsVersionRelationshipsXcodeVersionsFromJSON(json: any): CiMacOsVersionRelationshipsXcodeVersions {
    return CiMacOsVersionRelationshipsXcodeVersionsFromJSONTyped(json, false);
}

export function CiMacOsVersionRelationshipsXcodeVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiMacOsVersionRelationshipsXcodeVersions {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON)),
    };
}

export function CiMacOsVersionRelationshipsXcodeVersionsToJSON(json: any): CiMacOsVersionRelationshipsXcodeVersions {
    return CiMacOsVersionRelationshipsXcodeVersionsToJSONTyped(json, false);
}

export function CiMacOsVersionRelationshipsXcodeVersionsToJSONTyped(value?: CiMacOsVersionRelationshipsXcodeVersions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON)),
    };
}

