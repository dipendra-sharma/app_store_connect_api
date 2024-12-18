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
import type { BuildBetaNotificationCreateRequestData } from './BuildBetaNotificationCreateRequestData';
import {
    BuildBetaNotificationCreateRequestDataFromJSON,
    BuildBetaNotificationCreateRequestDataFromJSONTyped,
    BuildBetaNotificationCreateRequestDataToJSON,
    BuildBetaNotificationCreateRequestDataToJSONTyped,
} from './BuildBetaNotificationCreateRequestData';

/**
 * 
 * @export
 * @interface BuildBetaNotificationCreateRequest
 */
export interface BuildBetaNotificationCreateRequest {
    /**
     * 
     * @type {BuildBetaNotificationCreateRequestData}
     * @memberof BuildBetaNotificationCreateRequest
     */
    data: BuildBetaNotificationCreateRequestData;
}

/**
 * Check if a given object implements the BuildBetaNotificationCreateRequest interface.
 */
export function instanceOfBuildBetaNotificationCreateRequest(value: object): value is BuildBetaNotificationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BuildBetaNotificationCreateRequestFromJSON(json: any): BuildBetaNotificationCreateRequest {
    return BuildBetaNotificationCreateRequestFromJSONTyped(json, false);
}

export function BuildBetaNotificationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaNotificationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BuildBetaNotificationCreateRequestDataFromJSON(json['data']),
    };
}

export function BuildBetaNotificationCreateRequestToJSON(json: any): BuildBetaNotificationCreateRequest {
    return BuildBetaNotificationCreateRequestToJSONTyped(json, false);
}

export function BuildBetaNotificationCreateRequestToJSONTyped(value?: BuildBetaNotificationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BuildBetaNotificationCreateRequestDataToJSON(value['data']),
    };
}

