
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
import type { BetaAppReviewSubmission } from './BetaAppReviewSubmission';
import {
    BetaAppReviewSubmissionFromJSON,
    BetaAppReviewSubmissionFromJSONTyped,
    BetaAppReviewSubmissionToJSON,
    BetaAppReviewSubmissionToJSONTyped,
} from './BetaAppReviewSubmission';
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
 * @interface BetaAppReviewSubmissionWithoutIncludesResponse
 */
export interface BetaAppReviewSubmissionWithoutIncludesResponse {
    /**
     * 
     * @type {BetaAppReviewSubmission}
     * @memberof BetaAppReviewSubmissionWithoutIncludesResponse
     */
    data: BetaAppReviewSubmission;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BetaAppReviewSubmissionWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaAppReviewSubmissionWithoutIncludesResponse interface.
 */
export function instanceOfBetaAppReviewSubmissionWithoutIncludesResponse(value: object): value is BetaAppReviewSubmissionWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaAppReviewSubmissionWithoutIncludesResponseFromJSON(json: any): BetaAppReviewSubmissionWithoutIncludesResponse {
    return BetaAppReviewSubmissionWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BetaAppReviewSubmissionWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewSubmissionWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaAppReviewSubmissionFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BetaAppReviewSubmissionWithoutIncludesResponseToJSON(json: any): BetaAppReviewSubmissionWithoutIncludesResponse {
    return BetaAppReviewSubmissionWithoutIncludesResponseToJSONTyped(json, false);
}

export function BetaAppReviewSubmissionWithoutIncludesResponseToJSONTyped(value?: BetaAppReviewSubmissionWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaAppReviewSubmissionToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

