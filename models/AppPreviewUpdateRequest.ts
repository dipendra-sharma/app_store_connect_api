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
import type { AppPreviewUpdateRequestData } from './AppPreviewUpdateRequestData';
import {
    AppPreviewUpdateRequestDataFromJSON,
    AppPreviewUpdateRequestDataFromJSONTyped,
    AppPreviewUpdateRequestDataToJSON,
    AppPreviewUpdateRequestDataToJSONTyped,
} from './AppPreviewUpdateRequestData';

/**
 * 
 * @export
 * @interface AppPreviewUpdateRequest
 */
export interface AppPreviewUpdateRequest {
    /**
     * 
     * @type {AppPreviewUpdateRequestData}
     * @memberof AppPreviewUpdateRequest
     */
    data: AppPreviewUpdateRequestData;
}

/**
 * Check if a given object implements the AppPreviewUpdateRequest interface.
 */
export function instanceOfAppPreviewUpdateRequest(value: object): value is AppPreviewUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppPreviewUpdateRequestFromJSON(json: any): AppPreviewUpdateRequest {
    return AppPreviewUpdateRequestFromJSONTyped(json, false);
}

export function AppPreviewUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppPreviewUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppPreviewUpdateRequestToJSON(json: any): AppPreviewUpdateRequest {
    return AppPreviewUpdateRequestToJSONTyped(json, false);
}

export function AppPreviewUpdateRequestToJSONTyped(value?: AppPreviewUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppPreviewUpdateRequestDataToJSON(value['data']),
    };
}

