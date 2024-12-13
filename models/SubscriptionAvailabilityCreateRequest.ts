
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
import type { SubscriptionAvailabilityCreateRequestData } from './SubscriptionAvailabilityCreateRequestData';
import {
    SubscriptionAvailabilityCreateRequestDataFromJSON,
    SubscriptionAvailabilityCreateRequestDataFromJSONTyped,
    SubscriptionAvailabilityCreateRequestDataToJSON,
    SubscriptionAvailabilityCreateRequestDataToJSONTyped,
} from './SubscriptionAvailabilityCreateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionAvailabilityCreateRequest
 */
export interface SubscriptionAvailabilityCreateRequest {
    /**
     * 
     * @type {SubscriptionAvailabilityCreateRequestData}
     * @memberof SubscriptionAvailabilityCreateRequest
     */
    data: SubscriptionAvailabilityCreateRequestData;
}

/**
 * Check if a given object implements the SubscriptionAvailabilityCreateRequest interface.
 */
export function instanceOfSubscriptionAvailabilityCreateRequest(value: object): value is SubscriptionAvailabilityCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SubscriptionAvailabilityCreateRequestFromJSON(json: any): SubscriptionAvailabilityCreateRequest {
    return SubscriptionAvailabilityCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionAvailabilityCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SubscriptionAvailabilityCreateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionAvailabilityCreateRequestToJSON(json: any): SubscriptionAvailabilityCreateRequest {
    return SubscriptionAvailabilityCreateRequestToJSONTyped(json, false);
}

export function SubscriptionAvailabilityCreateRequestToJSONTyped(value?: SubscriptionAvailabilityCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SubscriptionAvailabilityCreateRequestDataToJSON(value['data']),
    };
}
