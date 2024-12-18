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
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
    PlatformToJSONTyped,
} from './Platform';

/**
 * 
 * @export
 * @interface ReviewSubmissionCreateRequestDataAttributes
 */
export interface ReviewSubmissionCreateRequestDataAttributes {
    /**
     * 
     * @type {Platform}
     * @memberof ReviewSubmissionCreateRequestDataAttributes
     */
    platform: Platform;
}



/**
 * Check if a given object implements the ReviewSubmissionCreateRequestDataAttributes interface.
 */
export function instanceOfReviewSubmissionCreateRequestDataAttributes(value: object): value is ReviewSubmissionCreateRequestDataAttributes {
    if (!('platform' in value) || value['platform'] === undefined) return false;
    return true;
}

export function ReviewSubmissionCreateRequestDataAttributesFromJSON(json: any): ReviewSubmissionCreateRequestDataAttributes {
    return ReviewSubmissionCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function ReviewSubmissionCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'platform': PlatformFromJSON(json['platform']),
    };
}

export function ReviewSubmissionCreateRequestDataAttributesToJSON(json: any): ReviewSubmissionCreateRequestDataAttributes {
    return ReviewSubmissionCreateRequestDataAttributesToJSONTyped(json, false);
}

export function ReviewSubmissionCreateRequestDataAttributesToJSONTyped(value?: ReviewSubmissionCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'platform': PlatformToJSON(value['platform']),
    };
}

