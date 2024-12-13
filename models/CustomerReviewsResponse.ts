
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
import type { CustomerReview } from './CustomerReview';
import {
    CustomerReviewFromJSON,
    CustomerReviewFromJSONTyped,
    CustomerReviewToJSON,
    CustomerReviewToJSONTyped,
} from './CustomerReview';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
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
 * @interface CustomerReviewsResponse
 */
export interface CustomerReviewsResponse {
    /**
     * 
     * @type {Array<CustomerReview>}
     * @memberof CustomerReviewsResponse
     */
    data: Array<CustomerReview>;
    /**
     * 
     * @type {Array<CustomerReviewResponseV1>}
     * @memberof CustomerReviewsResponse
     */
    included?: Array<CustomerReviewResponseV1>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CustomerReviewsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CustomerReviewsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CustomerReviewsResponse interface.
 */
export function instanceOfCustomerReviewsResponse(value: object): value is CustomerReviewsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CustomerReviewsResponseFromJSON(json: any): CustomerReviewsResponse {
    return CustomerReviewsResponseFromJSONTyped(json, false);
}

export function CustomerReviewsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CustomerReviewFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(CustomerReviewResponseV1FromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CustomerReviewsResponseToJSON(json: any): CustomerReviewsResponse {
    return CustomerReviewsResponseToJSONTyped(json, false);
}

export function CustomerReviewsResponseToJSONTyped(value?: CustomerReviewsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(CustomerReviewToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(CustomerReviewResponseV1ToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

