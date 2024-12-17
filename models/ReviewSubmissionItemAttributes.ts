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
 * @interface ReviewSubmissionItemAttributes
 */
export interface ReviewSubmissionItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionItemAttributes
     */
    state?: ReviewSubmissionItemAttributesStateEnum;
}


/**
 * @export
 */
export const ReviewSubmissionItemAttributesStateEnum = {
    ReadyForReview: 'READY_FOR_REVIEW',
    Accepted: 'ACCEPTED',
    Approved: 'APPROVED',
    Rejected: 'REJECTED',
    Removed: 'REMOVED'
} as const;
export type ReviewSubmissionItemAttributesStateEnum = typeof ReviewSubmissionItemAttributesStateEnum[keyof typeof ReviewSubmissionItemAttributesStateEnum];


/**
 * Check if a given object implements the ReviewSubmissionItemAttributes interface.
 */
export function instanceOfReviewSubmissionItemAttributes(value: object): value is ReviewSubmissionItemAttributes {
    return true;
}

export function ReviewSubmissionItemAttributesFromJSON(json: any): ReviewSubmissionItemAttributes {
    return ReviewSubmissionItemAttributesFromJSONTyped(json, false);
}

export function ReviewSubmissionItemAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'state': json['state'] == null ? undefined : json['state'],
    };
}

export function ReviewSubmissionItemAttributesToJSON(json: any): ReviewSubmissionItemAttributes {
    return ReviewSubmissionItemAttributesToJSONTyped(json, false);
}

export function ReviewSubmissionItemAttributesToJSONTyped(value?: ReviewSubmissionItemAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': value['state'],
    };
}

