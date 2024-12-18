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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface ReviewSubmissionsResponse
 */
export interface ReviewSubmissionsResponse {
    /**
     * 
     * @type {Array<ReviewSubmission>}
     * @memberof ReviewSubmissionsResponse
     */
    data: Array<ReviewSubmission>;
    /**
     * 
     * @type {Array<ReviewSubmissionsResponseIncludedInner>}
     * @memberof ReviewSubmissionsResponse
     */
    included?: Array<ReviewSubmissionsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ReviewSubmissionsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ReviewSubmissionsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ReviewSubmissionsResponse interface.
 */
export function instanceOfReviewSubmissionsResponse(value: object): value is ReviewSubmissionsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function ReviewSubmissionsResponseFromJSON(json: any): ReviewSubmissionsResponse {
    return ReviewSubmissionsResponseFromJSONTyped(json, false);
}

export function ReviewSubmissionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ReviewSubmissionFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(ReviewSubmissionsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ReviewSubmissionsResponseToJSON(json: any): ReviewSubmissionsResponse {
    return ReviewSubmissionsResponseToJSONTyped(json, false);
}

export function ReviewSubmissionsResponseToJSONTyped(value?: ReviewSubmissionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(ReviewSubmissionToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(ReviewSubmissionsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

