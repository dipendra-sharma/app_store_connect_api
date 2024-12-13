
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
import type { AppCustomProductPageLocalizationUpdateRequestData } from './AppCustomProductPageLocalizationUpdateRequestData';
import {
    AppCustomProductPageLocalizationUpdateRequestDataFromJSON,
    AppCustomProductPageLocalizationUpdateRequestDataFromJSONTyped,
    AppCustomProductPageLocalizationUpdateRequestDataToJSON,
    AppCustomProductPageLocalizationUpdateRequestDataToJSONTyped,
} from './AppCustomProductPageLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationUpdateRequest
 */
export interface AppCustomProductPageLocalizationUpdateRequest {
    /**
     * 
     * @type {AppCustomProductPageLocalizationUpdateRequestData}
     * @memberof AppCustomProductPageLocalizationUpdateRequest
     */
    data: AppCustomProductPageLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationUpdateRequest interface.
 */
export function instanceOfAppCustomProductPageLocalizationUpdateRequest(value: object): value is AppCustomProductPageLocalizationUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppCustomProductPageLocalizationUpdateRequestFromJSON(json: any): AppCustomProductPageLocalizationUpdateRequest {
    return AppCustomProductPageLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageLocalizationUpdateRequestToJSON(json: any): AppCustomProductPageLocalizationUpdateRequest {
    return AppCustomProductPageLocalizationUpdateRequestToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationUpdateRequestToJSONTyped(value?: AppCustomProductPageLocalizationUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageLocalizationUpdateRequestDataToJSON(value['data']),
    };
}
