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
import type { InAppPurchaseAvailabilityCreateRequestData } from './InAppPurchaseAvailabilityCreateRequestData';
import {
    InAppPurchaseAvailabilityCreateRequestDataFromJSON,
    InAppPurchaseAvailabilityCreateRequestDataFromJSONTyped,
    InAppPurchaseAvailabilityCreateRequestDataToJSON,
    InAppPurchaseAvailabilityCreateRequestDataToJSONTyped,
} from './InAppPurchaseAvailabilityCreateRequestData';

/**
 * 
 * @export
 * @interface InAppPurchaseAvailabilityCreateRequest
 */
export interface InAppPurchaseAvailabilityCreateRequest {
    /**
     * 
     * @type {InAppPurchaseAvailabilityCreateRequestData}
     * @memberof InAppPurchaseAvailabilityCreateRequest
     */
    data: InAppPurchaseAvailabilityCreateRequestData;
}

/**
 * Check if a given object implements the InAppPurchaseAvailabilityCreateRequest interface.
 */
export function instanceOfInAppPurchaseAvailabilityCreateRequest(value: object): value is InAppPurchaseAvailabilityCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function InAppPurchaseAvailabilityCreateRequestFromJSON(json: any): InAppPurchaseAvailabilityCreateRequest {
    return InAppPurchaseAvailabilityCreateRequestFromJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailabilityCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': InAppPurchaseAvailabilityCreateRequestDataFromJSON(json['data']),
    };
}

export function InAppPurchaseAvailabilityCreateRequestToJSON(json: any): InAppPurchaseAvailabilityCreateRequest {
    return InAppPurchaseAvailabilityCreateRequestToJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityCreateRequestToJSONTyped(value?: InAppPurchaseAvailabilityCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': InAppPurchaseAvailabilityCreateRequestDataToJSON(value['data']),
    };
}

