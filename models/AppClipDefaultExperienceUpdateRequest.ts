
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
import type { AppClipDefaultExperienceUpdateRequestData } from './AppClipDefaultExperienceUpdateRequestData';
import {
    AppClipDefaultExperienceUpdateRequestDataFromJSON,
    AppClipDefaultExperienceUpdateRequestDataFromJSONTyped,
    AppClipDefaultExperienceUpdateRequestDataToJSON,
    AppClipDefaultExperienceUpdateRequestDataToJSONTyped,
} from './AppClipDefaultExperienceUpdateRequestData';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceUpdateRequest
 */
export interface AppClipDefaultExperienceUpdateRequest {
    /**
     * 
     * @type {AppClipDefaultExperienceUpdateRequestData}
     * @memberof AppClipDefaultExperienceUpdateRequest
     */
    data: AppClipDefaultExperienceUpdateRequestData;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceUpdateRequest interface.
 */
export function instanceOfAppClipDefaultExperienceUpdateRequest(value: object): value is AppClipDefaultExperienceUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppClipDefaultExperienceUpdateRequestFromJSON(json: any): AppClipDefaultExperienceUpdateRequest {
    return AppClipDefaultExperienceUpdateRequestFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppClipDefaultExperienceUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppClipDefaultExperienceUpdateRequestToJSON(json: any): AppClipDefaultExperienceUpdateRequest {
    return AppClipDefaultExperienceUpdateRequestToJSONTyped(json, false);
}

export function AppClipDefaultExperienceUpdateRequestToJSONTyped(value?: AppClipDefaultExperienceUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipDefaultExperienceUpdateRequestDataToJSON(value['data']),
    };
}

