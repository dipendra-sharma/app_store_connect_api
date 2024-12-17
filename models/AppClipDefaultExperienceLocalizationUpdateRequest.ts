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
import type { AppClipDefaultExperienceLocalizationUpdateRequestData } from './AppClipDefaultExperienceLocalizationUpdateRequestData';
import {
    AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSON,
    AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSONTyped,
    AppClipDefaultExperienceLocalizationUpdateRequestDataToJSON,
    AppClipDefaultExperienceLocalizationUpdateRequestDataToJSONTyped,
} from './AppClipDefaultExperienceLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationUpdateRequest
 */
export interface AppClipDefaultExperienceLocalizationUpdateRequest {
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationUpdateRequestData}
     * @memberof AppClipDefaultExperienceLocalizationUpdateRequest
     */
    data: AppClipDefaultExperienceLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationUpdateRequest interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationUpdateRequest(value: object): value is AppClipDefaultExperienceLocalizationUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppClipDefaultExperienceLocalizationUpdateRequestFromJSON(json: any): AppClipDefaultExperienceLocalizationUpdateRequest {
    return AppClipDefaultExperienceLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppClipDefaultExperienceLocalizationUpdateRequestToJSON(json: any): AppClipDefaultExperienceLocalizationUpdateRequest {
    return AppClipDefaultExperienceLocalizationUpdateRequestToJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationUpdateRequestToJSONTyped(value?: AppClipDefaultExperienceLocalizationUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipDefaultExperienceLocalizationUpdateRequestDataToJSON(value['data']),
    };
}

