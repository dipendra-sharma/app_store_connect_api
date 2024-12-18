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
import type { AppStoreVersionPhasedReleaseUpdateRequestData } from './AppStoreVersionPhasedReleaseUpdateRequestData';
import {
    AppStoreVersionPhasedReleaseUpdateRequestDataFromJSON,
    AppStoreVersionPhasedReleaseUpdateRequestDataFromJSONTyped,
    AppStoreVersionPhasedReleaseUpdateRequestDataToJSON,
    AppStoreVersionPhasedReleaseUpdateRequestDataToJSONTyped,
} from './AppStoreVersionPhasedReleaseUpdateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionPhasedReleaseUpdateRequest
 */
export interface AppStoreVersionPhasedReleaseUpdateRequest {
    /**
     * 
     * @type {AppStoreVersionPhasedReleaseUpdateRequestData}
     * @memberof AppStoreVersionPhasedReleaseUpdateRequest
     */
    data: AppStoreVersionPhasedReleaseUpdateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseUpdateRequest interface.
 */
export function instanceOfAppStoreVersionPhasedReleaseUpdateRequest(value: object): value is AppStoreVersionPhasedReleaseUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppStoreVersionPhasedReleaseUpdateRequestFromJSON(json: any): AppStoreVersionPhasedReleaseUpdateRequest {
    return AppStoreVersionPhasedReleaseUpdateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionPhasedReleaseUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedReleaseUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionPhasedReleaseUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionPhasedReleaseUpdateRequestToJSON(json: any): AppStoreVersionPhasedReleaseUpdateRequest {
    return AppStoreVersionPhasedReleaseUpdateRequestToJSONTyped(json, false);
}

export function AppStoreVersionPhasedReleaseUpdateRequestToJSONTyped(value?: AppStoreVersionPhasedReleaseUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionPhasedReleaseUpdateRequestDataToJSON(value['data']),
    };
}

