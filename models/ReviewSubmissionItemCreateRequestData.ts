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
import type { ReviewSubmissionItemCreateRequestDataRelationships } from './ReviewSubmissionItemCreateRequestDataRelationships';
import {
    ReviewSubmissionItemCreateRequestDataRelationshipsFromJSON,
    ReviewSubmissionItemCreateRequestDataRelationshipsFromJSONTyped,
    ReviewSubmissionItemCreateRequestDataRelationshipsToJSON,
    ReviewSubmissionItemCreateRequestDataRelationshipsToJSONTyped,
} from './ReviewSubmissionItemCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface ReviewSubmissionItemCreateRequestData
 */
export interface ReviewSubmissionItemCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionItemCreateRequestData
     */
    type: ReviewSubmissionItemCreateRequestDataTypeEnum;
    /**
     * 
     * @type {ReviewSubmissionItemCreateRequestDataRelationships}
     * @memberof ReviewSubmissionItemCreateRequestData
     */
    relationships: ReviewSubmissionItemCreateRequestDataRelationships;
}


/**
 * @export
 */
export const ReviewSubmissionItemCreateRequestDataTypeEnum = {
    ReviewSubmissionItems: 'reviewSubmissionItems'
} as const;
export type ReviewSubmissionItemCreateRequestDataTypeEnum = typeof ReviewSubmissionItemCreateRequestDataTypeEnum[keyof typeof ReviewSubmissionItemCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the ReviewSubmissionItemCreateRequestData interface.
 */
export function instanceOfReviewSubmissionItemCreateRequestData(value: object): value is ReviewSubmissionItemCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function ReviewSubmissionItemCreateRequestDataFromJSON(json: any): ReviewSubmissionItemCreateRequestData {
    return ReviewSubmissionItemCreateRequestDataFromJSONTyped(json, false);
}

export function ReviewSubmissionItemCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': ReviewSubmissionItemCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function ReviewSubmissionItemCreateRequestDataToJSON(json: any): ReviewSubmissionItemCreateRequestData {
    return ReviewSubmissionItemCreateRequestDataToJSONTyped(json, false);
}

export function ReviewSubmissionItemCreateRequestDataToJSONTyped(value?: ReviewSubmissionItemCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'relationships': ReviewSubmissionItemCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

