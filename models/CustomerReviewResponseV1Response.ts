
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
 * @interface CustomerReviewResponseV1Response
 */
export interface CustomerReviewResponseV1Response {
    /**
     * 
     * @type {CustomerReviewResponseV1}
     * @memberof CustomerReviewResponseV1Response
     */
    data: CustomerReviewResponseV1;
    /**
     * 
     * @type {Array<CustomerReview>}
     * @memberof CustomerReviewResponseV1Response
     */
    included?: Array<CustomerReview>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CustomerReviewResponseV1Response
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1Response interface.
 */
export function instanceOfCustomerReviewResponseV1Response(value: object): value is CustomerReviewResponseV1Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CustomerReviewResponseV1ResponseFromJSON(json: any): CustomerReviewResponseV1Response {
    return CustomerReviewResponseV1ResponseFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CustomerReviewResponseV1FromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(CustomerReviewFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CustomerReviewResponseV1ResponseToJSON(json: any): CustomerReviewResponseV1Response {
    return CustomerReviewResponseV1ResponseToJSONTyped(json, false);
}

export function CustomerReviewResponseV1ResponseToJSONTyped(value?: CustomerReviewResponseV1Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CustomerReviewResponseV1ToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(CustomerReviewToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}
