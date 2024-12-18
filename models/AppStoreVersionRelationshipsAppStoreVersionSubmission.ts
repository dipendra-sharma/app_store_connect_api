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
import type { AppStoreVersionRelationshipsAppStoreVersionSubmissionData } from './AppStoreVersionRelationshipsAppStoreVersionSubmissionData';
import {
    AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFromJSON,
    AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFromJSONTyped,
    AppStoreVersionRelationshipsAppStoreVersionSubmissionDataToJSON,
    AppStoreVersionRelationshipsAppStoreVersionSubmissionDataToJSONTyped,
} from './AppStoreVersionRelationshipsAppStoreVersionSubmissionData';
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
 * @interface AppStoreVersionRelationshipsAppStoreVersionSubmission
 */
export interface AppStoreVersionRelationshipsAppStoreVersionSubmission {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionSubmission
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreVersionSubmissionData}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionSubmission
     */
    data?: AppStoreVersionRelationshipsAppStoreVersionSubmissionData;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppStoreVersionSubmission interface.
 */
export function instanceOfAppStoreVersionRelationshipsAppStoreVersionSubmission(value: object): value is AppStoreVersionRelationshipsAppStoreVersionSubmission {
    return true;
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionFromJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionSubmission {
    return AppStoreVersionRelationshipsAppStoreVersionSubmissionFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAppStoreVersionSubmission {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionToJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionSubmission {
    return AppStoreVersionRelationshipsAppStoreVersionSubmissionToJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionToJSONTyped(value?: AppStoreVersionRelationshipsAppStoreVersionSubmission | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': AppStoreVersionRelationshipsAppStoreVersionSubmissionDataToJSON(value['data']),
    };
}

