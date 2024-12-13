
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
import type { AppClipAdvancedExperienceLocalizationInlineCreate } from './AppClipAdvancedExperienceLocalizationInlineCreate';
import {
    AppClipAdvancedExperienceLocalizationInlineCreateFromJSON,
    AppClipAdvancedExperienceLocalizationInlineCreateFromJSONTyped,
    AppClipAdvancedExperienceLocalizationInlineCreateToJSON,
    AppClipAdvancedExperienceLocalizationInlineCreateToJSONTyped,
} from './AppClipAdvancedExperienceLocalizationInlineCreate';
import type { AppClipAdvancedExperienceCreateRequestData } from './AppClipAdvancedExperienceCreateRequestData';
import {
    AppClipAdvancedExperienceCreateRequestDataFromJSON,
    AppClipAdvancedExperienceCreateRequestDataFromJSONTyped,
    AppClipAdvancedExperienceCreateRequestDataToJSON,
    AppClipAdvancedExperienceCreateRequestDataToJSONTyped,
} from './AppClipAdvancedExperienceCreateRequestData';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceCreateRequest
 */
export interface AppClipAdvancedExperienceCreateRequest {
    /**
     * 
     * @type {AppClipAdvancedExperienceCreateRequestData}
     * @memberof AppClipAdvancedExperienceCreateRequest
     */
    data: AppClipAdvancedExperienceCreateRequestData;
    /**
     * 
     * @type {Array<AppClipAdvancedExperienceLocalizationInlineCreate>}
     * @memberof AppClipAdvancedExperienceCreateRequest
     */
    included?: Array<AppClipAdvancedExperienceLocalizationInlineCreate>;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceCreateRequest interface.
 */
export function instanceOfAppClipAdvancedExperienceCreateRequest(value: object): value is AppClipAdvancedExperienceCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceCreateRequestFromJSON(json: any): AppClipAdvancedExperienceCreateRequest {
    return AppClipAdvancedExperienceCreateRequestFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppClipAdvancedExperienceCreateRequestDataFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppClipAdvancedExperienceLocalizationInlineCreateFromJSON)),
    };
}

export function AppClipAdvancedExperienceCreateRequestToJSON(json: any): AppClipAdvancedExperienceCreateRequest {
    return AppClipAdvancedExperienceCreateRequestToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceCreateRequestToJSONTyped(value?: AppClipAdvancedExperienceCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipAdvancedExperienceCreateRequestDataToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppClipAdvancedExperienceLocalizationInlineCreateToJSON)),
    };
}

