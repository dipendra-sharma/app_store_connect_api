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
import type { SubscriptionGroupLocalizationUpdateRequestData } from './SubscriptionGroupLocalizationUpdateRequestData';
import {
    SubscriptionGroupLocalizationUpdateRequestDataFromJSON,
    SubscriptionGroupLocalizationUpdateRequestDataFromJSONTyped,
    SubscriptionGroupLocalizationUpdateRequestDataToJSON,
    SubscriptionGroupLocalizationUpdateRequestDataToJSONTyped,
} from './SubscriptionGroupLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalizationUpdateRequest
 */
export interface SubscriptionGroupLocalizationUpdateRequest {
    /**
     * 
     * @type {SubscriptionGroupLocalizationUpdateRequestData}
     * @memberof SubscriptionGroupLocalizationUpdateRequest
     */
    data: SubscriptionGroupLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationUpdateRequest interface.
 */
export function instanceOfSubscriptionGroupLocalizationUpdateRequest(value: object): value is SubscriptionGroupLocalizationUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SubscriptionGroupLocalizationUpdateRequestFromJSON(json: any): SubscriptionGroupLocalizationUpdateRequest {
    return SubscriptionGroupLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SubscriptionGroupLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionGroupLocalizationUpdateRequestToJSON(json: any): SubscriptionGroupLocalizationUpdateRequest {
    return SubscriptionGroupLocalizationUpdateRequestToJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationUpdateRequestToJSONTyped(value?: SubscriptionGroupLocalizationUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SubscriptionGroupLocalizationUpdateRequestDataToJSON(value['data']),
    };
}

