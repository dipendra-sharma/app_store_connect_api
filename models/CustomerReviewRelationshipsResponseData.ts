
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
 * @interface CustomerReviewRelationshipsResponseData
 */
export interface CustomerReviewRelationshipsResponseData {
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewRelationshipsResponseData
     */
    type: CustomerReviewRelationshipsResponseDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewRelationshipsResponseData
     */
    id: string;
}


/**
 * @export
 */
export const CustomerReviewRelationshipsResponseDataTypeEnum = {
    CustomerReviewResponses: 'customerReviewResponses'
} as const;
export type CustomerReviewRelationshipsResponseDataTypeEnum = typeof CustomerReviewRelationshipsResponseDataTypeEnum[keyof typeof CustomerReviewRelationshipsResponseDataTypeEnum];


/**
 * Check if a given object implements the CustomerReviewRelationshipsResponseData interface.
 */
export function instanceOfCustomerReviewRelationshipsResponseData(value: object): value is CustomerReviewRelationshipsResponseData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function CustomerReviewRelationshipsResponseDataFromJSON(json: any): CustomerReviewRelationshipsResponseData {
    return CustomerReviewRelationshipsResponseDataFromJSONTyped(json, false);
}

export function CustomerReviewRelationshipsResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewRelationshipsResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CustomerReviewRelationshipsResponseDataToJSON(json: any): CustomerReviewRelationshipsResponseData {
    return CustomerReviewRelationshipsResponseDataToJSONTyped(json, false);
}

export function CustomerReviewRelationshipsResponseDataToJSONTyped(value?: CustomerReviewRelationshipsResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

