
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
import type { ReviewSubmissionItemsResponseIncludedInner } from './ReviewSubmissionItemsResponseIncludedInner';
import {
    ReviewSubmissionItemsResponseIncludedInnerFromJSON,
    ReviewSubmissionItemsResponseIncludedInnerFromJSONTyped,
    ReviewSubmissionItemsResponseIncludedInnerToJSON,
    ReviewSubmissionItemsResponseIncludedInnerToJSONTyped,
} from './ReviewSubmissionItemsResponseIncludedInner';
import type { ReviewSubmissionItem } from './ReviewSubmissionItem';
import {
    ReviewSubmissionItemFromJSON,
    ReviewSubmissionItemFromJSONTyped,
    ReviewSubmissionItemToJSON,
    ReviewSubmissionItemToJSONTyped,
} from './ReviewSubmissionItem';
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
 * @interface ReviewSubmissionItemResponse
 */
export interface ReviewSubmissionItemResponse {
    /**
     * 
     * @type {ReviewSubmissionItem}
     * @memberof ReviewSubmissionItemResponse
     */
    data: ReviewSubmissionItem;
    /**
     * 
     * @type {Array<ReviewSubmissionItemsResponseIncludedInner>}
     * @memberof ReviewSubmissionItemResponse
     */
    included?: Array<ReviewSubmissionItemsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof ReviewSubmissionItemResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ReviewSubmissionItemResponse interface.
 */
export function instanceOfReviewSubmissionItemResponse(value: object): value is ReviewSubmissionItemResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function ReviewSubmissionItemResponseFromJSON(json: any): ReviewSubmissionItemResponse {
    return ReviewSubmissionItemResponseFromJSONTyped(json, false);
}

export function ReviewSubmissionItemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ReviewSubmissionItemFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(ReviewSubmissionItemsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function ReviewSubmissionItemResponseToJSON(json: any): ReviewSubmissionItemResponse {
    return ReviewSubmissionItemResponseToJSONTyped(json, false);
}

export function ReviewSubmissionItemResponseToJSONTyped(value?: ReviewSubmissionItemResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ReviewSubmissionItemToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(ReviewSubmissionItemsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

