
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
import type { ErrorResponseErrorsInner } from './ErrorResponseErrorsInner';
import {
    ErrorResponseErrorsInnerFromJSON,
    ErrorResponseErrorsInnerFromJSONTyped,
    ErrorResponseErrorsInnerToJSON,
    ErrorResponseErrorsInnerToJSONTyped,
} from './ErrorResponseErrorsInner';

/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {Array<ErrorResponseErrorsInner>}
     * @memberof ErrorResponse
     */
    errors?: Array<ErrorResponseErrorsInner>;
}

/**
 * Check if a given object implements the ErrorResponse interface.
 */
export function instanceOfErrorResponse(value: object): value is ErrorResponse {
    return true;
}

export function ErrorResponseFromJSON(json: any): ErrorResponse {
    return ErrorResponseFromJSONTyped(json, false);
}

export function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'errors': json['errors'] == null ? undefined : ((json['errors'] as Array<any>).map(ErrorResponseErrorsInnerFromJSON)),
    };
}

export function ErrorResponseToJSON(json: any): ErrorResponse {
    return ErrorResponseToJSONTyped(json, false);
}

export function ErrorResponseToJSONTyped(value?: ErrorResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errors': value['errors'] == null ? undefined : ((value['errors'] as Array<any>).map(ErrorResponseErrorsInnerToJSON)),
    };
}

