
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
import type { CustomerReviewRelationshipsResponseData } from './CustomerReviewRelationshipsResponseData';
import {
    CustomerReviewRelationshipsResponseDataFromJSON,
    CustomerReviewRelationshipsResponseDataFromJSONTyped,
    CustomerReviewRelationshipsResponseDataToJSON,
    CustomerReviewRelationshipsResponseDataToJSONTyped,
} from './CustomerReviewRelationshipsResponseData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface CustomerReviewRelationshipsResponse
 */
export interface CustomerReviewRelationshipsResponse {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof CustomerReviewRelationshipsResponse
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {CustomerReviewRelationshipsResponseData}
     * @memberof CustomerReviewRelationshipsResponse
     */
    data?: CustomerReviewRelationshipsResponseData;
}

/**
 * Check if a given object implements the CustomerReviewRelationshipsResponse interface.
 */
export function instanceOfCustomerReviewRelationshipsResponse(value: object): value is CustomerReviewRelationshipsResponse {
    return true;
}

export function CustomerReviewRelationshipsResponseFromJSON(json: any): CustomerReviewRelationshipsResponse {
    return CustomerReviewRelationshipsResponseFromJSONTyped(json, false);
}

export function CustomerReviewRelationshipsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewRelationshipsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : CustomerReviewRelationshipsResponseDataFromJSON(json['data']),
    };
}

export function CustomerReviewRelationshipsResponseToJSON(json: any): CustomerReviewRelationshipsResponse {
    return CustomerReviewRelationshipsResponseToJSONTyped(json, false);
}

export function CustomerReviewRelationshipsResponseToJSONTyped(value?: CustomerReviewRelationshipsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': CustomerReviewRelationshipsResponseDataToJSON(value['data']),
    };
}

