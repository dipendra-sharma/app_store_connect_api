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
import type { BuildBundleRelationshipsBuildBundleFileSizesDataInner } from './BuildBundleRelationshipsBuildBundleFileSizesDataInner';
import {
    BuildBundleRelationshipsBuildBundleFileSizesDataInnerFromJSON,
    BuildBundleRelationshipsBuildBundleFileSizesDataInnerFromJSONTyped,
    BuildBundleRelationshipsBuildBundleFileSizesDataInnerToJSON,
    BuildBundleRelationshipsBuildBundleFileSizesDataInnerToJSONTyped,
} from './BuildBundleRelationshipsBuildBundleFileSizesDataInner';
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
 * @interface BuildBundleRelationshipsBuildBundleFileSizes
 */
export interface BuildBundleRelationshipsBuildBundleFileSizes {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof BuildBundleRelationshipsBuildBundleFileSizes
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildBundleRelationshipsBuildBundleFileSizes
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<BuildBundleRelationshipsBuildBundleFileSizesDataInner>}
     * @memberof BuildBundleRelationshipsBuildBundleFileSizes
     */
    data?: Array<BuildBundleRelationshipsBuildBundleFileSizesDataInner>;
}

/**
 * Check if a given object implements the BuildBundleRelationshipsBuildBundleFileSizes interface.
 */
export function instanceOfBuildBundleRelationshipsBuildBundleFileSizes(value: object): value is BuildBundleRelationshipsBuildBundleFileSizes {
    return true;
}

export function BuildBundleRelationshipsBuildBundleFileSizesFromJSON(json: any): BuildBundleRelationshipsBuildBundleFileSizes {
    return BuildBundleRelationshipsBuildBundleFileSizesFromJSONTyped(json, false);
}

export function BuildBundleRelationshipsBuildBundleFileSizesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleRelationshipsBuildBundleFileSizes {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(BuildBundleRelationshipsBuildBundleFileSizesDataInnerFromJSON)),
    };
}

export function BuildBundleRelationshipsBuildBundleFileSizesToJSON(json: any): BuildBundleRelationshipsBuildBundleFileSizes {
    return BuildBundleRelationshipsBuildBundleFileSizesToJSONTyped(json, false);
}

export function BuildBundleRelationshipsBuildBundleFileSizesToJSONTyped(value?: BuildBundleRelationshipsBuildBundleFileSizes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(BuildBundleRelationshipsBuildBundleFileSizesDataInnerToJSON)),
    };
}

