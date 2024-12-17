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
import type { ReviewSubmission } from './ReviewSubmission';
import {
    ReviewSubmissionFromJSON,
    ReviewSubmissionFromJSONTyped,
    ReviewSubmissionToJSON,
    ReviewSubmissionToJSONTyped,
} from './ReviewSubmission';
import type { ReviewSubmissionsResponseIncludedInner } from './ReviewSubmissionsResponseIncludedInner';
import {
    ReviewSubmissionsResponseIncludedInnerFromJSON,
    ReviewSubmissionsResponseIncludedInnerFromJSONTyped,
    ReviewSubmissionsResponseIncludedInnerToJSON,
    ReviewSubmissionsResponseIncludedInnerToJSONTyped,
} from './ReviewSubmissionsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface ReviewSubmissionResponse
 */
export interface ReviewSubmissionResponse {
    /**
     * 
     * @type {ReviewSubmission}
     * @memberof ReviewSubmissionResponse
     */
    data: ReviewSubmission;
    /**
     * 
     * @type {Array<ReviewSubmissionsResponseIncludedInner>}
     * @memberof ReviewSubmissionResponse
     */
    included?: Array<ReviewSubmissionsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof ReviewSubmissionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ReviewSubmissionResponse interface.
 */
export function instanceOfReviewSubmissionResponse(value: object): value is ReviewSubmissionResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function ReviewSubmissionResponseFromJSON(json: any): ReviewSubmissionResponse {
    return ReviewSubmissionResponseFromJSONTyped(json, false);
}

export function ReviewSubmissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ReviewSubmissionFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(ReviewSubmissionsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function ReviewSubmissionResponseToJSON(json: any): ReviewSubmissionResponse {
    return ReviewSubmissionResponseToJSONTyped(json, false);
}

export function ReviewSubmissionResponseToJSONTyped(value?: ReviewSubmissionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ReviewSubmissionToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(ReviewSubmissionsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

