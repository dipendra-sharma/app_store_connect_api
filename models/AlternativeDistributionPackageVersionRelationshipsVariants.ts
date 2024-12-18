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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsDataInner } from './AlternativeDistributionPackageVersionRelationshipsVariantsDataInner';
import {
    AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSON,
    AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerToJSON,
    AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerToJSONTyped,
} from './AlternativeDistributionPackageVersionRelationshipsVariantsDataInner';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageVersionRelationshipsVariants
 */
export interface AlternativeDistributionPackageVersionRelationshipsVariants {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AlternativeDistributionPackageVersionRelationshipsVariants
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AlternativeDistributionPackageVersionRelationshipsVariants
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AlternativeDistributionPackageVersionRelationshipsVariantsDataInner>}
     * @memberof AlternativeDistributionPackageVersionRelationshipsVariants
     */
    data?: Array<AlternativeDistributionPackageVersionRelationshipsVariantsDataInner>;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageVersionRelationshipsVariants interface.
 */
export function instanceOfAlternativeDistributionPackageVersionRelationshipsVariants(value: object): value is AlternativeDistributionPackageVersionRelationshipsVariants {
    return true;
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsFromJSON(json: any): AlternativeDistributionPackageVersionRelationshipsVariants {
    return AlternativeDistributionPackageVersionRelationshipsVariantsFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVersionRelationshipsVariants {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSON)),
    };
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsToJSON(json: any): AlternativeDistributionPackageVersionRelationshipsVariants {
    return AlternativeDistributionPackageVersionRelationshipsVariantsToJSONTyped(json, false);
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsToJSONTyped(value?: AlternativeDistributionPackageVersionRelationshipsVariants | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerToJSON)),
    };
}

