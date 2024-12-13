
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
import type { AppEventUpdateRequestData } from './AppEventUpdateRequestData';
import {
    AppEventUpdateRequestDataFromJSON,
    AppEventUpdateRequestDataFromJSONTyped,
    AppEventUpdateRequestDataToJSON,
    AppEventUpdateRequestDataToJSONTyped,
} from './AppEventUpdateRequestData';

/**
 * 
 * @export
 * @interface AppEventUpdateRequest
 */
export interface AppEventUpdateRequest {
    /**
     * 
     * @type {AppEventUpdateRequestData}
     * @memberof AppEventUpdateRequest
     */
    data: AppEventUpdateRequestData;
}

/**
 * Check if a given object implements the AppEventUpdateRequest interface.
 */
export function instanceOfAppEventUpdateRequest(value: object): value is AppEventUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppEventUpdateRequestFromJSON(json: any): AppEventUpdateRequest {
    return AppEventUpdateRequestFromJSONTyped(json, false);
}

export function AppEventUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppEventUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppEventUpdateRequestToJSON(json: any): AppEventUpdateRequest {
    return AppEventUpdateRequestToJSONTyped(json, false);
}

export function AppEventUpdateRequestToJSONTyped(value?: AppEventUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppEventUpdateRequestDataToJSON(value['data']),
    };
}

