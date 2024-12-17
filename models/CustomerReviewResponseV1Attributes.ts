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
 * @interface CustomerReviewResponseV1Attributes
 */
export interface CustomerReviewResponseV1Attributes {
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1Attributes
     */
    responseBody?: string;
    /**
     * 
     * @type {Date}
     * @memberof CustomerReviewResponseV1Attributes
     */
    lastModifiedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1Attributes
     */
    state?: CustomerReviewResponseV1AttributesStateEnum;
}


/**
 * @export
 */
export const CustomerReviewResponseV1AttributesStateEnum = {
    Published: 'PUBLISHED',
    PendingPublish: 'PENDING_PUBLISH'
} as const;
export type CustomerReviewResponseV1AttributesStateEnum = typeof CustomerReviewResponseV1AttributesStateEnum[keyof typeof CustomerReviewResponseV1AttributesStateEnum];


/**
 * Check if a given object implements the CustomerReviewResponseV1Attributes interface.
 */
export function instanceOfCustomerReviewResponseV1Attributes(value: object): value is CustomerReviewResponseV1Attributes {
    return true;
}

export function CustomerReviewResponseV1AttributesFromJSON(json: any): CustomerReviewResponseV1Attributes {
    return CustomerReviewResponseV1AttributesFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1AttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1Attributes {
    if (json == null) {
        return json;
    }
    return {
        
        'responseBody': json['responseBody'] == null ? undefined : json['responseBody'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'state': json['state'] == null ? undefined : json['state'],
    };
}

export function CustomerReviewResponseV1AttributesToJSON(json: any): CustomerReviewResponseV1Attributes {
    return CustomerReviewResponseV1AttributesToJSONTyped(json, false);
}

export function CustomerReviewResponseV1AttributesToJSONTyped(value?: CustomerReviewResponseV1Attributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'responseBody': value['responseBody'],
        'lastModifiedDate': value['lastModifiedDate'] == null ? undefined : ((value['lastModifiedDate']).toISOString()),
        'state': value['state'],
    };
}

