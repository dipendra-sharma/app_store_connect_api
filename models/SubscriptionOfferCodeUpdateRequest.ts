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
import type { SubscriptionOfferCodeUpdateRequestData } from './SubscriptionOfferCodeUpdateRequestData';
import {
    SubscriptionOfferCodeUpdateRequestDataFromJSON,
    SubscriptionOfferCodeUpdateRequestDataFromJSONTyped,
    SubscriptionOfferCodeUpdateRequestDataToJSON,
    SubscriptionOfferCodeUpdateRequestDataToJSONTyped,
} from './SubscriptionOfferCodeUpdateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeUpdateRequest
 */
export interface SubscriptionOfferCodeUpdateRequest {
    /**
     * 
     * @type {SubscriptionOfferCodeUpdateRequestData}
     * @memberof SubscriptionOfferCodeUpdateRequest
     */
    data: SubscriptionOfferCodeUpdateRequestData;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeUpdateRequest interface.
 */
export function instanceOfSubscriptionOfferCodeUpdateRequest(value: object): value is SubscriptionOfferCodeUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodeUpdateRequestFromJSON(json: any): SubscriptionOfferCodeUpdateRequest {
    return SubscriptionOfferCodeUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeUpdateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionOfferCodeUpdateRequestToJSON(json: any): SubscriptionOfferCodeUpdateRequest {
    return SubscriptionOfferCodeUpdateRequestToJSONTyped(json, false);
}

export function SubscriptionOfferCodeUpdateRequestToJSONTyped(value?: SubscriptionOfferCodeUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SubscriptionOfferCodeUpdateRequestDataToJSON(value['data']),
    };
}

