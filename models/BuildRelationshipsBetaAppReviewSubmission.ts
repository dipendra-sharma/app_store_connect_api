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
import type { BuildRelationshipsBetaAppReviewSubmissionData } from './BuildRelationshipsBetaAppReviewSubmissionData';
import {
    BuildRelationshipsBetaAppReviewSubmissionDataFromJSON,
    BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped,
    BuildRelationshipsBetaAppReviewSubmissionDataToJSON,
    BuildRelationshipsBetaAppReviewSubmissionDataToJSONTyped,
} from './BuildRelationshipsBetaAppReviewSubmissionData';
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
 * @interface BuildRelationshipsBetaAppReviewSubmission
 */
export interface BuildRelationshipsBetaAppReviewSubmission {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof BuildRelationshipsBetaAppReviewSubmission
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {BuildRelationshipsBetaAppReviewSubmissionData}
     * @memberof BuildRelationshipsBetaAppReviewSubmission
     */
    data?: BuildRelationshipsBetaAppReviewSubmissionData;
}

/**
 * Check if a given object implements the BuildRelationshipsBetaAppReviewSubmission interface.
 */
export function instanceOfBuildRelationshipsBetaAppReviewSubmission(value: object): value is BuildRelationshipsBetaAppReviewSubmission {
    return true;
}

export function BuildRelationshipsBetaAppReviewSubmissionFromJSON(json: any): BuildRelationshipsBetaAppReviewSubmission {
    return BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped(json, false);
}

export function BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsBetaAppReviewSubmission {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : BuildRelationshipsBetaAppReviewSubmissionDataFromJSON(json['data']),
    };
}

export function BuildRelationshipsBetaAppReviewSubmissionToJSON(json: any): BuildRelationshipsBetaAppReviewSubmission {
    return BuildRelationshipsBetaAppReviewSubmissionToJSONTyped(json, false);
}

export function BuildRelationshipsBetaAppReviewSubmissionToJSONTyped(value?: BuildRelationshipsBetaAppReviewSubmission | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': BuildRelationshipsBetaAppReviewSubmissionDataToJSON(value['data']),
    };
}

