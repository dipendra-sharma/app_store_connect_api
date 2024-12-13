
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
import type { AppInfoLocalizationCreateRequestData } from './AppInfoLocalizationCreateRequestData';
import {
    AppInfoLocalizationCreateRequestDataFromJSON,
    AppInfoLocalizationCreateRequestDataFromJSONTyped,
    AppInfoLocalizationCreateRequestDataToJSON,
    AppInfoLocalizationCreateRequestDataToJSONTyped,
} from './AppInfoLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface AppInfoLocalizationCreateRequest
 */
export interface AppInfoLocalizationCreateRequest {
    /**
     * 
     * @type {AppInfoLocalizationCreateRequestData}
     * @memberof AppInfoLocalizationCreateRequest
     */
    data: AppInfoLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the AppInfoLocalizationCreateRequest interface.
 */
export function instanceOfAppInfoLocalizationCreateRequest(value: object): value is AppInfoLocalizationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppInfoLocalizationCreateRequestFromJSON(json: any): AppInfoLocalizationCreateRequest {
    return AppInfoLocalizationCreateRequestFromJSONTyped(json, false);
}

export function AppInfoLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppInfoLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function AppInfoLocalizationCreateRequestToJSON(json: any): AppInfoLocalizationCreateRequest {
    return AppInfoLocalizationCreateRequestToJSONTyped(json, false);
}

export function AppInfoLocalizationCreateRequestToJSONTyped(value?: AppInfoLocalizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppInfoLocalizationCreateRequestDataToJSON(value['data']),
    };
}
