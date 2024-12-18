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
import type { ReviewSubmissionItemUpdateRequestData } from './ReviewSubmissionItemUpdateRequestData';
import {
    ReviewSubmissionItemUpdateRequestDataFromJSON,
    ReviewSubmissionItemUpdateRequestDataFromJSONTyped,
    ReviewSubmissionItemUpdateRequestDataToJSON,
    ReviewSubmissionItemUpdateRequestDataToJSONTyped,
} from './ReviewSubmissionItemUpdateRequestData';

/**
 * 
 * @export
 * @interface ReviewSubmissionItemUpdateRequest
 */
export interface ReviewSubmissionItemUpdateRequest {
    /**
     * 
     * @type {ReviewSubmissionItemUpdateRequestData}
     * @memberof ReviewSubmissionItemUpdateRequest
     */
    data: ReviewSubmissionItemUpdateRequestData;
}

/**
 * Check if a given object implements the ReviewSubmissionItemUpdateRequest interface.
 */
export function instanceOfReviewSubmissionItemUpdateRequest(value: object): value is ReviewSubmissionItemUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ReviewSubmissionItemUpdateRequestFromJSON(json: any): ReviewSubmissionItemUpdateRequest {
    return ReviewSubmissionItemUpdateRequestFromJSONTyped(json, false);
}

export function ReviewSubmissionItemUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ReviewSubmissionItemUpdateRequestDataFromJSON(json['data']),
    };
}

export function ReviewSubmissionItemUpdateRequestToJSON(json: any): ReviewSubmissionItemUpdateRequest {
    return ReviewSubmissionItemUpdateRequestToJSONTyped(json, false);
}

export function ReviewSubmissionItemUpdateRequestToJSONTyped(value?: ReviewSubmissionItemUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ReviewSubmissionItemUpdateRequestDataToJSON(value['data']),
    };
}

