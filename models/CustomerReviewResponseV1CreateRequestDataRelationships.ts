
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
import type { CustomerReviewResponseV1CreateRequestDataRelationshipsReview } from './CustomerReviewResponseV1CreateRequestDataRelationshipsReview';
import {
    CustomerReviewResponseV1CreateRequestDataRelationshipsReviewFromJSON,
    CustomerReviewResponseV1CreateRequestDataRelationshipsReviewFromJSONTyped,
    CustomerReviewResponseV1CreateRequestDataRelationshipsReviewToJSON,
    CustomerReviewResponseV1CreateRequestDataRelationshipsReviewToJSONTyped,
} from './CustomerReviewResponseV1CreateRequestDataRelationshipsReview';

/**
 * 
 * @export
 * @interface CustomerReviewResponseV1CreateRequestDataRelationships
 */
export interface CustomerReviewResponseV1CreateRequestDataRelationships {
    /**
     * 
     * @type {CustomerReviewResponseV1CreateRequestDataRelationshipsReview}
     * @memberof CustomerReviewResponseV1CreateRequestDataRelationships
     */
    review: CustomerReviewResponseV1CreateRequestDataRelationshipsReview;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequestDataRelationships interface.
 */
export function instanceOfCustomerReviewResponseV1CreateRequestDataRelationships(value: object): value is CustomerReviewResponseV1CreateRequestDataRelationships {
    if (!('review' in value) || value['review'] === undefined) return false;
    return true;
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSON(json: any): CustomerReviewResponseV1CreateRequestDataRelationships {
    return CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1CreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'review': CustomerReviewResponseV1CreateRequestDataRelationshipsReviewFromJSON(json['review']),
    };
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsToJSON(json: any): CustomerReviewResponseV1CreateRequestDataRelationships {
    return CustomerReviewResponseV1CreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsToJSONTyped(value?: CustomerReviewResponseV1CreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'review': CustomerReviewResponseV1CreateRequestDataRelationshipsReviewToJSON(value['review']),
    };
}
