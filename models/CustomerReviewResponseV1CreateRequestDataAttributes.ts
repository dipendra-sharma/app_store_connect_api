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
/**
 * 
 * @export
 * @interface CustomerReviewResponseV1CreateRequestDataAttributes
 */
export interface CustomerReviewResponseV1CreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1CreateRequestDataAttributes
     */
    responseBody: string;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequestDataAttributes interface.
 */
export function instanceOfCustomerReviewResponseV1CreateRequestDataAttributes(value: object): value is CustomerReviewResponseV1CreateRequestDataAttributes {
    if (!('responseBody' in value) || value['responseBody'] === undefined) return false;
    return true;
}

export function CustomerReviewResponseV1CreateRequestDataAttributesFromJSON(json: any): CustomerReviewResponseV1CreateRequestDataAttributes {
    return CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1CreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'responseBody': json['responseBody'],
    };
}

export function CustomerReviewResponseV1CreateRequestDataAttributesToJSON(json: any): CustomerReviewResponseV1CreateRequestDataAttributes {
    return CustomerReviewResponseV1CreateRequestDataAttributesToJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataAttributesToJSONTyped(value?: CustomerReviewResponseV1CreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'responseBody': value['responseBody'],
    };
}

