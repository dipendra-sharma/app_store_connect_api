
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
import type { AgeRatingDeclarationUpdateRequestData } from './AgeRatingDeclarationUpdateRequestData';
import {
    AgeRatingDeclarationUpdateRequestDataFromJSON,
    AgeRatingDeclarationUpdateRequestDataFromJSONTyped,
    AgeRatingDeclarationUpdateRequestDataToJSON,
    AgeRatingDeclarationUpdateRequestDataToJSONTyped,
} from './AgeRatingDeclarationUpdateRequestData';

/**
 * 
 * @export
 * @interface AgeRatingDeclarationUpdateRequest
 */
export interface AgeRatingDeclarationUpdateRequest {
    /**
     * 
     * @type {AgeRatingDeclarationUpdateRequestData}
     * @memberof AgeRatingDeclarationUpdateRequest
     */
    data: AgeRatingDeclarationUpdateRequestData;
}

/**
 * Check if a given object implements the AgeRatingDeclarationUpdateRequest interface.
 */
export function instanceOfAgeRatingDeclarationUpdateRequest(value: object): value is AgeRatingDeclarationUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AgeRatingDeclarationUpdateRequestFromJSON(json: any): AgeRatingDeclarationUpdateRequest {
    return AgeRatingDeclarationUpdateRequestFromJSONTyped(json, false);
}

export function AgeRatingDeclarationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgeRatingDeclarationUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AgeRatingDeclarationUpdateRequestDataFromJSON(json['data']),
    };
}

export function AgeRatingDeclarationUpdateRequestToJSON(json: any): AgeRatingDeclarationUpdateRequest {
    return AgeRatingDeclarationUpdateRequestToJSONTyped(json, false);
}

export function AgeRatingDeclarationUpdateRequestToJSONTyped(value?: AgeRatingDeclarationUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AgeRatingDeclarationUpdateRequestDataToJSON(value['data']),
    };
}
