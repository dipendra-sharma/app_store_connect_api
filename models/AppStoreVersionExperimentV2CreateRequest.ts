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
import type { AppStoreVersionExperimentV2CreateRequestData } from './AppStoreVersionExperimentV2CreateRequestData';
import {
    AppStoreVersionExperimentV2CreateRequestDataFromJSON,
    AppStoreVersionExperimentV2CreateRequestDataFromJSONTyped,
    AppStoreVersionExperimentV2CreateRequestDataToJSON,
    AppStoreVersionExperimentV2CreateRequestDataToJSONTyped,
} from './AppStoreVersionExperimentV2CreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentV2CreateRequest
 */
export interface AppStoreVersionExperimentV2CreateRequest {
    /**
     * 
     * @type {AppStoreVersionExperimentV2CreateRequestData}
     * @memberof AppStoreVersionExperimentV2CreateRequest
     */
    data: AppStoreVersionExperimentV2CreateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentV2CreateRequest interface.
 */
export function instanceOfAppStoreVersionExperimentV2CreateRequest(value: object): value is AppStoreVersionExperimentV2CreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentV2CreateRequestFromJSON(json: any): AppStoreVersionExperimentV2CreateRequest {
    return AppStoreVersionExperimentV2CreateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2CreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2CreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionExperimentV2CreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionExperimentV2CreateRequestToJSON(json: any): AppStoreVersionExperimentV2CreateRequest {
    return AppStoreVersionExperimentV2CreateRequestToJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2CreateRequestToJSONTyped(value?: AppStoreVersionExperimentV2CreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionExperimentV2CreateRequestDataToJSON(value['data']),
    };
}

