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
import type { CustomerReview } from './CustomerReview';
import {
    CustomerReviewFromJSON,
    CustomerReviewFromJSONTyped,
    CustomerReviewToJSON,
    CustomerReviewToJSONTyped,
} from './CustomerReview';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
import type { CustomerReviewResponseV1 } from './CustomerReviewResponseV1';
import {
    CustomerReviewResponseV1FromJSON,
    CustomerReviewResponseV1FromJSONTyped,
    CustomerReviewResponseV1ToJSON,
    CustomerReviewResponseV1ToJSONTyped,
} from './CustomerReviewResponseV1';

/**
 * 
 * @export
 * @interface CustomerReviewResponse
 */
export interface CustomerReviewResponse {
    /**
     * 
     * @type {CustomerReview}
     * @memberof CustomerReviewResponse
     */
    data: CustomerReview;
    /**
     * 
     * @type {Array<CustomerReviewResponseV1>}
     * @memberof CustomerReviewResponse
     */
    included?: Array<CustomerReviewResponseV1>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CustomerReviewResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CustomerReviewResponse interface.
 */
export function instanceOfCustomerReviewResponse(value: object): value is CustomerReviewResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CustomerReviewResponseFromJSON(json: any): CustomerReviewResponse {
    return CustomerReviewResponseFromJSONTyped(json, false);
}

export function CustomerReviewResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CustomerReviewFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(CustomerReviewResponseV1FromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CustomerReviewResponseToJSON(json: any): CustomerReviewResponse {
    return CustomerReviewResponseToJSONTyped(json, false);
}

export function CustomerReviewResponseToJSONTyped(value?: CustomerReviewResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CustomerReviewToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(CustomerReviewResponseV1ToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

