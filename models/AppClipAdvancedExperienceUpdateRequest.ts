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
import type { AppClipAdvancedExperienceUpdateRequestData } from './AppClipAdvancedExperienceUpdateRequestData';
import {
    AppClipAdvancedExperienceUpdateRequestDataFromJSON,
    AppClipAdvancedExperienceUpdateRequestDataFromJSONTyped,
    AppClipAdvancedExperienceUpdateRequestDataToJSON,
    AppClipAdvancedExperienceUpdateRequestDataToJSONTyped,
} from './AppClipAdvancedExperienceUpdateRequestData';
import type { AppClipAdvancedExperienceLocalizationInlineCreate } from './AppClipAdvancedExperienceLocalizationInlineCreate';
import {
    AppClipAdvancedExperienceLocalizationInlineCreateFromJSON,
    AppClipAdvancedExperienceLocalizationInlineCreateFromJSONTyped,
    AppClipAdvancedExperienceLocalizationInlineCreateToJSON,
    AppClipAdvancedExperienceLocalizationInlineCreateToJSONTyped,
} from './AppClipAdvancedExperienceLocalizationInlineCreate';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceUpdateRequest
 */
export interface AppClipAdvancedExperienceUpdateRequest {
    /**
     * 
     * @type {AppClipAdvancedExperienceUpdateRequestData}
     * @memberof AppClipAdvancedExperienceUpdateRequest
     */
    data: AppClipAdvancedExperienceUpdateRequestData;
    /**
     * 
     * @type {Array<AppClipAdvancedExperienceLocalizationInlineCreate>}
     * @memberof AppClipAdvancedExperienceUpdateRequest
     */
    included?: Array<AppClipAdvancedExperienceLocalizationInlineCreate>;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceUpdateRequest interface.
 */
export function instanceOfAppClipAdvancedExperienceUpdateRequest(value: object): value is AppClipAdvancedExperienceUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceUpdateRequestFromJSON(json: any): AppClipAdvancedExperienceUpdateRequest {
    return AppClipAdvancedExperienceUpdateRequestFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppClipAdvancedExperienceUpdateRequestDataFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppClipAdvancedExperienceLocalizationInlineCreateFromJSON)),
    };
}

export function AppClipAdvancedExperienceUpdateRequestToJSON(json: any): AppClipAdvancedExperienceUpdateRequest {
    return AppClipAdvancedExperienceUpdateRequestToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceUpdateRequestToJSONTyped(value?: AppClipAdvancedExperienceUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipAdvancedExperienceUpdateRequestDataToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppClipAdvancedExperienceLocalizationInlineCreateToJSON)),
    };
}

