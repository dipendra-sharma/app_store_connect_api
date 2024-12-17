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
import type { AppEventScreenshotUpdateRequestData } from './AppEventScreenshotUpdateRequestData';
import {
    AppEventScreenshotUpdateRequestDataFromJSON,
    AppEventScreenshotUpdateRequestDataFromJSONTyped,
    AppEventScreenshotUpdateRequestDataToJSON,
    AppEventScreenshotUpdateRequestDataToJSONTyped,
} from './AppEventScreenshotUpdateRequestData';

/**
 * 
 * @export
 * @interface AppEventScreenshotUpdateRequest
 */
export interface AppEventScreenshotUpdateRequest {
    /**
     * 
     * @type {AppEventScreenshotUpdateRequestData}
     * @memberof AppEventScreenshotUpdateRequest
     */
    data: AppEventScreenshotUpdateRequestData;
}

/**
 * Check if a given object implements the AppEventScreenshotUpdateRequest interface.
 */
export function instanceOfAppEventScreenshotUpdateRequest(value: object): value is AppEventScreenshotUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppEventScreenshotUpdateRequestFromJSON(json: any): AppEventScreenshotUpdateRequest {
    return AppEventScreenshotUpdateRequestFromJSONTyped(json, false);
}

export function AppEventScreenshotUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppEventScreenshotUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppEventScreenshotUpdateRequestToJSON(json: any): AppEventScreenshotUpdateRequest {
    return AppEventScreenshotUpdateRequestToJSONTyped(json, false);
}

export function AppEventScreenshotUpdateRequestToJSONTyped(value?: AppEventScreenshotUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppEventScreenshotUpdateRequestDataToJSON(value['data']),
    };
}

