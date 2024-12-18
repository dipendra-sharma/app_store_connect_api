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
/**
 * 
 * @export
 * @interface BuildRelationshipsBetaAppReviewSubmissionData
 */
export interface BuildRelationshipsBetaAppReviewSubmissionData {
    /**
     * 
     * @type {string}
     * @memberof BuildRelationshipsBetaAppReviewSubmissionData
     */
    type: BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildRelationshipsBetaAppReviewSubmissionData
     */
    id: string;
}


/**
 * @export
 */
export const BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum = {
    BetaAppReviewSubmissions: 'betaAppReviewSubmissions'
} as const;
export type BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum = typeof BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum[keyof typeof BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum];


/**
 * Check if a given object implements the BuildRelationshipsBetaAppReviewSubmissionData interface.
 */
export function instanceOfBuildRelationshipsBetaAppReviewSubmissionData(value: object): value is BuildRelationshipsBetaAppReviewSubmissionData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BuildRelationshipsBetaAppReviewSubmissionDataFromJSON(json: any): BuildRelationshipsBetaAppReviewSubmissionData {
    return BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped(json, false);
}

export function BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsBetaAppReviewSubmissionData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BuildRelationshipsBetaAppReviewSubmissionDataToJSON(json: any): BuildRelationshipsBetaAppReviewSubmissionData {
    return BuildRelationshipsBetaAppReviewSubmissionDataToJSONTyped(json, false);
}

export function BuildRelationshipsBetaAppReviewSubmissionDataToJSONTyped(value?: BuildRelationshipsBetaAppReviewSubmissionData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

