
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
import type { AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData } from './AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData';
import {
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataFromJSON,
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataToJSON,
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataToJSONTyped,
} from './AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData';

/**
 * 
 * @export
 * @interface AppStoreVersionRelationshipsAlternativeDistributionPackage
 */
export interface AppStoreVersionRelationshipsAlternativeDistributionPackage {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppStoreVersionRelationshipsAlternativeDistributionPackage
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData}
     * @memberof AppStoreVersionRelationshipsAlternativeDistributionPackage
     */
    data?: AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAlternativeDistributionPackage interface.
 */
export function instanceOfAppStoreVersionRelationshipsAlternativeDistributionPackage(value: object): value is AppStoreVersionRelationshipsAlternativeDistributionPackage {
    return true;
}

export function AppStoreVersionRelationshipsAlternativeDistributionPackageFromJSON(json: any): AppStoreVersionRelationshipsAlternativeDistributionPackage {
    return AppStoreVersionRelationshipsAlternativeDistributionPackageFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAlternativeDistributionPackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAlternativeDistributionPackage {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsAlternativeDistributionPackageToJSON(json: any): AppStoreVersionRelationshipsAlternativeDistributionPackage {
    return AppStoreVersionRelationshipsAlternativeDistributionPackageToJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAlternativeDistributionPackageToJSONTyped(value?: AppStoreVersionRelationshipsAlternativeDistributionPackage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataToJSON(value['data']),
    };
}
