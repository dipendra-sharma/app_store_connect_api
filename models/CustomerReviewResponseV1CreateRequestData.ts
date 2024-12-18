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
import type { CustomerReviewResponseV1CreateRequestDataRelationships } from './CustomerReviewResponseV1CreateRequestDataRelationships';
import {
    CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSON,
    CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSONTyped,
    CustomerReviewResponseV1CreateRequestDataRelationshipsToJSON,
    CustomerReviewResponseV1CreateRequestDataRelationshipsToJSONTyped,
} from './CustomerReviewResponseV1CreateRequestDataRelationships';
import type { CustomerReviewResponseV1CreateRequestDataAttributes } from './CustomerReviewResponseV1CreateRequestDataAttributes';
import {
    CustomerReviewResponseV1CreateRequestDataAttributesFromJSON,
    CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped,
    CustomerReviewResponseV1CreateRequestDataAttributesToJSON,
    CustomerReviewResponseV1CreateRequestDataAttributesToJSONTyped,
} from './CustomerReviewResponseV1CreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface CustomerReviewResponseV1CreateRequestData
 */
export interface CustomerReviewResponseV1CreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1CreateRequestData
     */
    type: CustomerReviewResponseV1CreateRequestDataTypeEnum;
    /**
     * 
     * @type {CustomerReviewResponseV1CreateRequestDataAttributes}
     * @memberof CustomerReviewResponseV1CreateRequestData
     */
    attributes: CustomerReviewResponseV1CreateRequestDataAttributes;
    /**
     * 
     * @type {CustomerReviewResponseV1CreateRequestDataRelationships}
     * @memberof CustomerReviewResponseV1CreateRequestData
     */
    relationships: CustomerReviewResponseV1CreateRequestDataRelationships;
}


/**
 * @export
 */
export const CustomerReviewResponseV1CreateRequestDataTypeEnum = {
    CustomerReviewResponses: 'customerReviewResponses'
} as const;
export type CustomerReviewResponseV1CreateRequestDataTypeEnum = typeof CustomerReviewResponseV1CreateRequestDataTypeEnum[keyof typeof CustomerReviewResponseV1CreateRequestDataTypeEnum];


/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequestData interface.
 */
export function instanceOfCustomerReviewResponseV1CreateRequestData(value: object): value is CustomerReviewResponseV1CreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function CustomerReviewResponseV1CreateRequestDataFromJSON(json: any): CustomerReviewResponseV1CreateRequestData {
    return CustomerReviewResponseV1CreateRequestDataFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1CreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': CustomerReviewResponseV1CreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function CustomerReviewResponseV1CreateRequestDataToJSON(json: any): CustomerReviewResponseV1CreateRequestData {
    return CustomerReviewResponseV1CreateRequestDataToJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataToJSONTyped(value?: CustomerReviewResponseV1CreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': CustomerReviewResponseV1CreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': CustomerReviewResponseV1CreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

