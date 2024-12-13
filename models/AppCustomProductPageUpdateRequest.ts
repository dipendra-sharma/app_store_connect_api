
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
import type { AppCustomProductPageUpdateRequestData } from './AppCustomProductPageUpdateRequestData';
import {
    AppCustomProductPageUpdateRequestDataFromJSON,
    AppCustomProductPageUpdateRequestDataFromJSONTyped,
    AppCustomProductPageUpdateRequestDataToJSON,
    AppCustomProductPageUpdateRequestDataToJSONTyped,
} from './AppCustomProductPageUpdateRequestData';

/**
 * 
 * @export
 * @interface AppCustomProductPageUpdateRequest
 */
export interface AppCustomProductPageUpdateRequest {
    /**
     * 
     * @type {AppCustomProductPageUpdateRequestData}
     * @memberof AppCustomProductPageUpdateRequest
     */
    data: AppCustomProductPageUpdateRequestData;
}

/**
 * Check if a given object implements the AppCustomProductPageUpdateRequest interface.
 */
export function instanceOfAppCustomProductPageUpdateRequest(value: object): value is AppCustomProductPageUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppCustomProductPageUpdateRequestFromJSON(json: any): AppCustomProductPageUpdateRequest {
    return AppCustomProductPageUpdateRequestFromJSONTyped(json, false);
}

export function AppCustomProductPageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageUpdateRequestToJSON(json: any): AppCustomProductPageUpdateRequest {
    return AppCustomProductPageUpdateRequestToJSONTyped(json, false);
}

export function AppCustomProductPageUpdateRequestToJSONTyped(value?: AppCustomProductPageUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageUpdateRequestDataToJSON(value['data']),
    };
}
