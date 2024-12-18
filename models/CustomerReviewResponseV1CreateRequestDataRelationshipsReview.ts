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
import type { CustomerReviewResponseV1RelationshipsReviewData } from './CustomerReviewResponseV1RelationshipsReviewData';
import {
    CustomerReviewResponseV1RelationshipsReviewDataFromJSON,
    CustomerReviewResponseV1RelationshipsReviewDataFromJSONTyped,
    CustomerReviewResponseV1RelationshipsReviewDataToJSON,
    CustomerReviewResponseV1RelationshipsReviewDataToJSONTyped,
} from './CustomerReviewResponseV1RelationshipsReviewData';

/**
 * 
 * @export
 * @interface CustomerReviewResponseV1CreateRequestDataRelationshipsReview
 */
export interface CustomerReviewResponseV1CreateRequestDataRelationshipsReview {
    /**
     * 
     * @type {CustomerReviewResponseV1RelationshipsReviewData}
     * @memberof CustomerReviewResponseV1CreateRequestDataRelationshipsReview
     */
    data: CustomerReviewResponseV1RelationshipsReviewData;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequestDataRelationshipsReview interface.
 */
export function instanceOfCustomerReviewResponseV1CreateRequestDataRelationshipsReview(value: object): value is CustomerReviewResponseV1CreateRequestDataRelationshipsReview {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsReviewFromJSON(json: any): CustomerReviewResponseV1CreateRequestDataRelationshipsReview {
    return CustomerReviewResponseV1CreateRequestDataRelationshipsReviewFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1CreateRequestDataRelationshipsReview {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CustomerReviewResponseV1RelationshipsReviewDataFromJSON(json['data']),
    };
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsReviewToJSON(json: any): CustomerReviewResponseV1CreateRequestDataRelationshipsReview {
    return CustomerReviewResponseV1CreateRequestDataRelationshipsReviewToJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsReviewToJSONTyped(value?: CustomerReviewResponseV1CreateRequestDataRelationshipsReview | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CustomerReviewResponseV1RelationshipsReviewDataToJSON(value['data']),
    };
}

