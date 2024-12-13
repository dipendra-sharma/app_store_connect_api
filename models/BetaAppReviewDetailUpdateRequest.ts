
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
import type { BetaAppReviewDetailUpdateRequestData } from './BetaAppReviewDetailUpdateRequestData';
import {
    BetaAppReviewDetailUpdateRequestDataFromJSON,
    BetaAppReviewDetailUpdateRequestDataFromJSONTyped,
    BetaAppReviewDetailUpdateRequestDataToJSON,
    BetaAppReviewDetailUpdateRequestDataToJSONTyped,
} from './BetaAppReviewDetailUpdateRequestData';

/**
 * 
 * @export
 * @interface BetaAppReviewDetailUpdateRequest
 */
export interface BetaAppReviewDetailUpdateRequest {
    /**
     * 
     * @type {BetaAppReviewDetailUpdateRequestData}
     * @memberof BetaAppReviewDetailUpdateRequest
     */
    data: BetaAppReviewDetailUpdateRequestData;
}

/**
 * Check if a given object implements the BetaAppReviewDetailUpdateRequest interface.
 */
export function instanceOfBetaAppReviewDetailUpdateRequest(value: object): value is BetaAppReviewDetailUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaAppReviewDetailUpdateRequestFromJSON(json: any): BetaAppReviewDetailUpdateRequest {
    return BetaAppReviewDetailUpdateRequestFromJSONTyped(json, false);
}

export function BetaAppReviewDetailUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewDetailUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaAppReviewDetailUpdateRequestDataFromJSON(json['data']),
    };
}

export function BetaAppReviewDetailUpdateRequestToJSON(json: any): BetaAppReviewDetailUpdateRequest {
    return BetaAppReviewDetailUpdateRequestToJSONTyped(json, false);
}

export function BetaAppReviewDetailUpdateRequestToJSONTyped(value?: BetaAppReviewDetailUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaAppReviewDetailUpdateRequestDataToJSON(value['data']),
    };
}
