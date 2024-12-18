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
import type { AppScreenshotCreateRequestData } from './AppScreenshotCreateRequestData';
import {
    AppScreenshotCreateRequestDataFromJSON,
    AppScreenshotCreateRequestDataFromJSONTyped,
    AppScreenshotCreateRequestDataToJSON,
    AppScreenshotCreateRequestDataToJSONTyped,
} from './AppScreenshotCreateRequestData';

/**
 * 
 * @export
 * @interface AppScreenshotCreateRequest
 */
export interface AppScreenshotCreateRequest {
    /**
     * 
     * @type {AppScreenshotCreateRequestData}
     * @memberof AppScreenshotCreateRequest
     */
    data: AppScreenshotCreateRequestData;
}

/**
 * Check if a given object implements the AppScreenshotCreateRequest interface.
 */
export function instanceOfAppScreenshotCreateRequest(value: object): value is AppScreenshotCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppScreenshotCreateRequestFromJSON(json: any): AppScreenshotCreateRequest {
    return AppScreenshotCreateRequestFromJSONTyped(json, false);
}

export function AppScreenshotCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppScreenshotCreateRequestDataFromJSON(json['data']),
    };
}

export function AppScreenshotCreateRequestToJSON(json: any): AppScreenshotCreateRequest {
    return AppScreenshotCreateRequestToJSONTyped(json, false);
}

export function AppScreenshotCreateRequestToJSONTyped(value?: AppScreenshotCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppScreenshotCreateRequestDataToJSON(value['data']),
    };
}

