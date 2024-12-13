
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
import type { InAppPurchasePriceScheduleCreateRequestIncludedInner } from './InAppPurchasePriceScheduleCreateRequestIncludedInner';
import {
    InAppPurchasePriceScheduleCreateRequestIncludedInnerFromJSON,
    InAppPurchasePriceScheduleCreateRequestIncludedInnerFromJSONTyped,
    InAppPurchasePriceScheduleCreateRequestIncludedInnerToJSON,
    InAppPurchasePriceScheduleCreateRequestIncludedInnerToJSONTyped,
} from './InAppPurchasePriceScheduleCreateRequestIncludedInner';
import type { InAppPurchasePriceScheduleCreateRequestData } from './InAppPurchasePriceScheduleCreateRequestData';
import {
    InAppPurchasePriceScheduleCreateRequestDataFromJSON,
    InAppPurchasePriceScheduleCreateRequestDataFromJSONTyped,
    InAppPurchasePriceScheduleCreateRequestDataToJSON,
    InAppPurchasePriceScheduleCreateRequestDataToJSONTyped,
} from './InAppPurchasePriceScheduleCreateRequestData';

/**
 * 
 * @export
 * @interface InAppPurchasePriceScheduleCreateRequest
 */
export interface InAppPurchasePriceScheduleCreateRequest {
    /**
     * 
     * @type {InAppPurchasePriceScheduleCreateRequestData}
     * @memberof InAppPurchasePriceScheduleCreateRequest
     */
    data: InAppPurchasePriceScheduleCreateRequestData;
    /**
     * 
     * @type {Array<InAppPurchasePriceScheduleCreateRequestIncludedInner>}
     * @memberof InAppPurchasePriceScheduleCreateRequest
     */
    included?: Array<InAppPurchasePriceScheduleCreateRequestIncludedInner>;
}

/**
 * Check if a given object implements the InAppPurchasePriceScheduleCreateRequest interface.
 */
export function instanceOfInAppPurchasePriceScheduleCreateRequest(value: object): value is InAppPurchasePriceScheduleCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function InAppPurchasePriceScheduleCreateRequestFromJSON(json: any): InAppPurchasePriceScheduleCreateRequest {
    return InAppPurchasePriceScheduleCreateRequestFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': InAppPurchasePriceScheduleCreateRequestDataFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(InAppPurchasePriceScheduleCreateRequestIncludedInnerFromJSON)),
    };
}

export function InAppPurchasePriceScheduleCreateRequestToJSON(json: any): InAppPurchasePriceScheduleCreateRequest {
    return InAppPurchasePriceScheduleCreateRequestToJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleCreateRequestToJSONTyped(value?: InAppPurchasePriceScheduleCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': InAppPurchasePriceScheduleCreateRequestDataToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(InAppPurchasePriceScheduleCreateRequestIncludedInnerToJSON)),
    };
}
