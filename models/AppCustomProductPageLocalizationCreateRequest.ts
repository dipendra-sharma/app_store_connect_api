
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
import type { AppCustomProductPageLocalizationCreateRequestData } from './AppCustomProductPageLocalizationCreateRequestData';
import {
    AppCustomProductPageLocalizationCreateRequestDataFromJSON,
    AppCustomProductPageLocalizationCreateRequestDataFromJSONTyped,
    AppCustomProductPageLocalizationCreateRequestDataToJSON,
    AppCustomProductPageLocalizationCreateRequestDataToJSONTyped,
} from './AppCustomProductPageLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationCreateRequest
 */
export interface AppCustomProductPageLocalizationCreateRequest {
    /**
     * 
     * @type {AppCustomProductPageLocalizationCreateRequestData}
     * @memberof AppCustomProductPageLocalizationCreateRequest
     */
    data: AppCustomProductPageLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationCreateRequest interface.
 */
export function instanceOfAppCustomProductPageLocalizationCreateRequest(value: object): value is AppCustomProductPageLocalizationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppCustomProductPageLocalizationCreateRequestFromJSON(json: any): AppCustomProductPageLocalizationCreateRequest {
    return AppCustomProductPageLocalizationCreateRequestFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageLocalizationCreateRequestToJSON(json: any): AppCustomProductPageLocalizationCreateRequest {
    return AppCustomProductPageLocalizationCreateRequestToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestToJSONTyped(value?: AppCustomProductPageLocalizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageLocalizationCreateRequestDataToJSON(value['data']),
    };
}

