
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
import type { PromotedPurchaseUpdateRequestData } from './PromotedPurchaseUpdateRequestData';
import {
    PromotedPurchaseUpdateRequestDataFromJSON,
    PromotedPurchaseUpdateRequestDataFromJSONTyped,
    PromotedPurchaseUpdateRequestDataToJSON,
    PromotedPurchaseUpdateRequestDataToJSONTyped,
} from './PromotedPurchaseUpdateRequestData';

/**
 * 
 * @export
 * @interface PromotedPurchaseUpdateRequest
 */
export interface PromotedPurchaseUpdateRequest {
    /**
     * 
     * @type {PromotedPurchaseUpdateRequestData}
     * @memberof PromotedPurchaseUpdateRequest
     */
    data: PromotedPurchaseUpdateRequestData;
}

/**
 * Check if a given object implements the PromotedPurchaseUpdateRequest interface.
 */
export function instanceOfPromotedPurchaseUpdateRequest(value: object): value is PromotedPurchaseUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function PromotedPurchaseUpdateRequestFromJSON(json: any): PromotedPurchaseUpdateRequest {
    return PromotedPurchaseUpdateRequestFromJSONTyped(json, false);
}

export function PromotedPurchaseUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': PromotedPurchaseUpdateRequestDataFromJSON(json['data']),
    };
}

export function PromotedPurchaseUpdateRequestToJSON(json: any): PromotedPurchaseUpdateRequest {
    return PromotedPurchaseUpdateRequestToJSONTyped(json, false);
}

export function PromotedPurchaseUpdateRequestToJSONTyped(value?: PromotedPurchaseUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': PromotedPurchaseUpdateRequestDataToJSON(value['data']),
    };
}

