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
import type { ReviewSubmissionRelationships } from './ReviewSubmissionRelationships';
import {
    ReviewSubmissionRelationshipsFromJSON,
    ReviewSubmissionRelationshipsFromJSONTyped,
    ReviewSubmissionRelationshipsToJSON,
    ReviewSubmissionRelationshipsToJSONTyped,
} from './ReviewSubmissionRelationships';
import type { ReviewSubmissionAttributes } from './ReviewSubmissionAttributes';
import {
    ReviewSubmissionAttributesFromJSON,
    ReviewSubmissionAttributesFromJSONTyped,
    ReviewSubmissionAttributesToJSON,
    ReviewSubmissionAttributesToJSONTyped,
} from './ReviewSubmissionAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface ReviewSubmission
 */
export interface ReviewSubmission {
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmission
     */
    type: ReviewSubmissionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmission
     */
    id: string;
    /**
     * 
     * @type {ReviewSubmissionAttributes}
     * @memberof ReviewSubmission
     */
    attributes?: ReviewSubmissionAttributes;
    /**
     * 
     * @type {ReviewSubmissionRelationships}
     * @memberof ReviewSubmission
     */
    relationships?: ReviewSubmissionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof ReviewSubmission
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const ReviewSubmissionTypeEnum = {
    ReviewSubmissions: 'reviewSubmissions'
} as const;
export type ReviewSubmissionTypeEnum = typeof ReviewSubmissionTypeEnum[keyof typeof ReviewSubmissionTypeEnum];


/**
 * Check if a given object implements the ReviewSubmission interface.
 */
export function instanceOfReviewSubmission(value: object): value is ReviewSubmission {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ReviewSubmissionFromJSON(json: any): ReviewSubmission {
    return ReviewSubmissionFromJSONTyped(json, false);
}

export function ReviewSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmission {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : ReviewSubmissionAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : ReviewSubmissionRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function ReviewSubmissionToJSON(json: any): ReviewSubmission {
    return ReviewSubmissionToJSONTyped(json, false);
}

export function ReviewSubmissionToJSONTyped(value?: ReviewSubmission | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': ReviewSubmissionAttributesToJSON(value['attributes']),
        'relationships': ReviewSubmissionRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

