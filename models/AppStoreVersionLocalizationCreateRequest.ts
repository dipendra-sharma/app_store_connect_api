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
import type { AppStoreVersionLocalizationCreateRequestData } from './AppStoreVersionLocalizationCreateRequestData';
import {
    AppStoreVersionLocalizationCreateRequestDataFromJSON,
    AppStoreVersionLocalizationCreateRequestDataFromJSONTyped,
    AppStoreVersionLocalizationCreateRequestDataToJSON,
    AppStoreVersionLocalizationCreateRequestDataToJSONTyped,
} from './AppStoreVersionLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionLocalizationCreateRequest
 */
export interface AppStoreVersionLocalizationCreateRequest {
    /**
     * 
     * @type {AppStoreVersionLocalizationCreateRequestData}
     * @memberof AppStoreVersionLocalizationCreateRequest
     */
    data: AppStoreVersionLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequest interface.
 */
export function instanceOfAppStoreVersionLocalizationCreateRequest(value: object): value is AppStoreVersionLocalizationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppStoreVersionLocalizationCreateRequestFromJSON(json: any): AppStoreVersionLocalizationCreateRequest {
    return AppStoreVersionLocalizationCreateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionLocalizationCreateRequestToJSON(json: any): AppStoreVersionLocalizationCreateRequest {
    return AppStoreVersionLocalizationCreateRequestToJSONTyped(json, false);
}

export function AppStoreVersionLocalizationCreateRequestToJSONTyped(value?: AppStoreVersionLocalizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionLocalizationCreateRequestDataToJSON(value['data']),
    };
}

