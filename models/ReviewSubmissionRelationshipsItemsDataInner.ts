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
 * @interface ReviewSubmissionRelationshipsItemsDataInner
 */
export interface ReviewSubmissionRelationshipsItemsDataInner {
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionRelationshipsItemsDataInner
     */
    type: ReviewSubmissionRelationshipsItemsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionRelationshipsItemsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const ReviewSubmissionRelationshipsItemsDataInnerTypeEnum = {
    ReviewSubmissionItems: 'reviewSubmissionItems'
} as const;
export type ReviewSubmissionRelationshipsItemsDataInnerTypeEnum = typeof ReviewSubmissionRelationshipsItemsDataInnerTypeEnum[keyof typeof ReviewSubmissionRelationshipsItemsDataInnerTypeEnum];


/**
 * Check if a given object implements the ReviewSubmissionRelationshipsItemsDataInner interface.
 */
export function instanceOfReviewSubmissionRelationshipsItemsDataInner(value: object): value is ReviewSubmissionRelationshipsItemsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ReviewSubmissionRelationshipsItemsDataInnerFromJSON(json: any): ReviewSubmissionRelationshipsItemsDataInner {
    return ReviewSubmissionRelationshipsItemsDataInnerFromJSONTyped(json, false);
}

export function ReviewSubmissionRelationshipsItemsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionRelationshipsItemsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function ReviewSubmissionRelationshipsItemsDataInnerToJSON(json: any): ReviewSubmissionRelationshipsItemsDataInner {
    return ReviewSubmissionRelationshipsItemsDataInnerToJSONTyped(json, false);
}

export function ReviewSubmissionRelationshipsItemsDataInnerToJSONTyped(value?: ReviewSubmissionRelationshipsItemsDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

