
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
import type { AppStoreVersionExperimentTreatmentLocalizationCreateRequestData } from './AppStoreVersionExperimentTreatmentLocalizationCreateRequestData';
import {
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataToJSON,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataToJSONTyped,
} from './AppStoreVersionExperimentTreatmentLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentLocalizationCreateRequest
 */
export interface AppStoreVersionExperimentTreatmentLocalizationCreateRequest {
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentLocalizationCreateRequestData}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationCreateRequest
     */
    data: AppStoreVersionExperimentTreatmentLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalizationCreateRequest interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentLocalizationCreateRequest(value: object): value is AppStoreVersionExperimentTreatmentLocalizationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestFromJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationCreateRequest {
    return AppStoreVersionExperimentTreatmentLocalizationCreateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentLocalizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestToJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationCreateRequest {
    return AppStoreVersionExperimentTreatmentLocalizationCreateRequestToJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestToJSONTyped(value?: AppStoreVersionExperimentTreatmentLocalizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataToJSON(value['data']),
    };
}

