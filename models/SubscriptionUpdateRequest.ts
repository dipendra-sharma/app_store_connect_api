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
import type { SubscriptionUpdateRequestIncludedInner } from './SubscriptionUpdateRequestIncludedInner';
import {
    SubscriptionUpdateRequestIncludedInnerFromJSON,
    SubscriptionUpdateRequestIncludedInnerFromJSONTyped,
    SubscriptionUpdateRequestIncludedInnerToJSON,
    SubscriptionUpdateRequestIncludedInnerToJSONTyped,
} from './SubscriptionUpdateRequestIncludedInner';
import type { SubscriptionUpdateRequestData } from './SubscriptionUpdateRequestData';
import {
    SubscriptionUpdateRequestDataFromJSON,
    SubscriptionUpdateRequestDataFromJSONTyped,
    SubscriptionUpdateRequestDataToJSON,
    SubscriptionUpdateRequestDataToJSONTyped,
} from './SubscriptionUpdateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionUpdateRequest
 */
export interface SubscriptionUpdateRequest {
    /**
     * 
     * @type {SubscriptionUpdateRequestData}
     * @memberof SubscriptionUpdateRequest
     */
    data: SubscriptionUpdateRequestData;
    /**
     * 
     * @type {Array<SubscriptionUpdateRequestIncludedInner>}
     * @memberof SubscriptionUpdateRequest
     */
    included?: Array<SubscriptionUpdateRequestIncludedInner>;
}

/**
 * Check if a given object implements the SubscriptionUpdateRequest interface.
 */
export function instanceOfSubscriptionUpdateRequest(value: object): value is SubscriptionUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SubscriptionUpdateRequestFromJSON(json: any): SubscriptionUpdateRequest {
    return SubscriptionUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SubscriptionUpdateRequestDataFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionUpdateRequestIncludedInnerFromJSON)),
    };
}

export function SubscriptionUpdateRequestToJSON(json: any): SubscriptionUpdateRequest {
    return SubscriptionUpdateRequestToJSONTyped(json, false);
}

export function SubscriptionUpdateRequestToJSONTyped(value?: SubscriptionUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SubscriptionUpdateRequestDataToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionUpdateRequestIncludedInnerToJSON)),
    };
}

