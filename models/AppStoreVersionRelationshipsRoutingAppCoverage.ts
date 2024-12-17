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
import type { AppStoreVersionRelationshipsRoutingAppCoverageData } from './AppStoreVersionRelationshipsRoutingAppCoverageData';
import {
    AppStoreVersionRelationshipsRoutingAppCoverageDataFromJSON,
    AppStoreVersionRelationshipsRoutingAppCoverageDataFromJSONTyped,
    AppStoreVersionRelationshipsRoutingAppCoverageDataToJSON,
    AppStoreVersionRelationshipsRoutingAppCoverageDataToJSONTyped,
} from './AppStoreVersionRelationshipsRoutingAppCoverageData';
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
 * @interface AppStoreVersionRelationshipsRoutingAppCoverage
 */
export interface AppStoreVersionRelationshipsRoutingAppCoverage {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppStoreVersionRelationshipsRoutingAppCoverage
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppStoreVersionRelationshipsRoutingAppCoverageData}
     * @memberof AppStoreVersionRelationshipsRoutingAppCoverage
     */
    data?: AppStoreVersionRelationshipsRoutingAppCoverageData;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsRoutingAppCoverage interface.
 */
export function instanceOfAppStoreVersionRelationshipsRoutingAppCoverage(value: object): value is AppStoreVersionRelationshipsRoutingAppCoverage {
    return true;
}

export function AppStoreVersionRelationshipsRoutingAppCoverageFromJSON(json: any): AppStoreVersionRelationshipsRoutingAppCoverage {
    return AppStoreVersionRelationshipsRoutingAppCoverageFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsRoutingAppCoverageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsRoutingAppCoverage {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : AppStoreVersionRelationshipsRoutingAppCoverageDataFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsRoutingAppCoverageToJSON(json: any): AppStoreVersionRelationshipsRoutingAppCoverage {
    return AppStoreVersionRelationshipsRoutingAppCoverageToJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsRoutingAppCoverageToJSONTyped(value?: AppStoreVersionRelationshipsRoutingAppCoverage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': AppStoreVersionRelationshipsRoutingAppCoverageDataToJSON(value['data']),
    };
}

