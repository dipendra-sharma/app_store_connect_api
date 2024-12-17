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
import type { AppStoreVersionExperimentCreateRequestData } from './AppStoreVersionExperimentCreateRequestData';
import {
    AppStoreVersionExperimentCreateRequestDataFromJSON,
    AppStoreVersionExperimentCreateRequestDataFromJSONTyped,
    AppStoreVersionExperimentCreateRequestDataToJSON,
    AppStoreVersionExperimentCreateRequestDataToJSONTyped,
} from './AppStoreVersionExperimentCreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentCreateRequest
 */
export interface AppStoreVersionExperimentCreateRequest {
    /**
     * 
     * @type {AppStoreVersionExperimentCreateRequestData}
     * @memberof AppStoreVersionExperimentCreateRequest
     */
    data: AppStoreVersionExperimentCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentCreateRequest interface.
 */
export function instanceOfAppStoreVersionExperimentCreateRequest(value: object): value is AppStoreVersionExperimentCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentCreateRequestFromJSON(json: any): AppStoreVersionExperimentCreateRequest {
    return AppStoreVersionExperimentCreateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionExperimentCreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionExperimentCreateRequestToJSON(json: any): AppStoreVersionExperimentCreateRequest {
    return AppStoreVersionExperimentCreateRequestToJSONTyped(json, false);
}

export function AppStoreVersionExperimentCreateRequestToJSONTyped(value?: AppStoreVersionExperimentCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionExperimentCreateRequestDataToJSON(value['data']),
    };
}

