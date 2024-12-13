
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
import type { SubscriptionOfferCodeCreateRequestData } from './SubscriptionOfferCodeCreateRequestData';
import {
    SubscriptionOfferCodeCreateRequestDataFromJSON,
    SubscriptionOfferCodeCreateRequestDataFromJSONTyped,
    SubscriptionOfferCodeCreateRequestDataToJSON,
    SubscriptionOfferCodeCreateRequestDataToJSONTyped,
} from './SubscriptionOfferCodeCreateRequestData';
import type { SubscriptionOfferCodePriceInlineCreate } from './SubscriptionOfferCodePriceInlineCreate';
import {
    SubscriptionOfferCodePriceInlineCreateFromJSON,
    SubscriptionOfferCodePriceInlineCreateFromJSONTyped,
    SubscriptionOfferCodePriceInlineCreateToJSON,
    SubscriptionOfferCodePriceInlineCreateToJSONTyped,
} from './SubscriptionOfferCodePriceInlineCreate';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCreateRequest
 */
export interface SubscriptionOfferCodeCreateRequest {
    /**
     * 
     * @type {SubscriptionOfferCodeCreateRequestData}
     * @memberof SubscriptionOfferCodeCreateRequest
     */
    data: SubscriptionOfferCodeCreateRequestData;
    /**
     * 
     * @type {Array<SubscriptionOfferCodePriceInlineCreate>}
     * @memberof SubscriptionOfferCodeCreateRequest
     */
    included?: Array<SubscriptionOfferCodePriceInlineCreate>;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCreateRequest interface.
 */
export function instanceOfSubscriptionOfferCodeCreateRequest(value: object): value is SubscriptionOfferCodeCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodeCreateRequestFromJSON(json: any): SubscriptionOfferCodeCreateRequest {
    return SubscriptionOfferCodeCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeCreateRequestDataFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodePriceInlineCreateFromJSON)),
    };
}

export function SubscriptionOfferCodeCreateRequestToJSON(json: any): SubscriptionOfferCodeCreateRequest {
    return SubscriptionOfferCodeCreateRequestToJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestToJSONTyped(value?: SubscriptionOfferCodeCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SubscriptionOfferCodeCreateRequestDataToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionOfferCodePriceInlineCreateToJSON)),
    };
}
