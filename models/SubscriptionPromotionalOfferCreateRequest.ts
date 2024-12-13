
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
import type { SubscriptionPromotionalOfferPriceInlineCreate } from './SubscriptionPromotionalOfferPriceInlineCreate';
import {
    SubscriptionPromotionalOfferPriceInlineCreateFromJSON,
    SubscriptionPromotionalOfferPriceInlineCreateFromJSONTyped,
    SubscriptionPromotionalOfferPriceInlineCreateToJSON,
    SubscriptionPromotionalOfferPriceInlineCreateToJSONTyped,
} from './SubscriptionPromotionalOfferPriceInlineCreate';
import type { SubscriptionPromotionalOfferCreateRequestData } from './SubscriptionPromotionalOfferCreateRequestData';
import {
    SubscriptionPromotionalOfferCreateRequestDataFromJSON,
    SubscriptionPromotionalOfferCreateRequestDataFromJSONTyped,
    SubscriptionPromotionalOfferCreateRequestDataToJSON,
    SubscriptionPromotionalOfferCreateRequestDataToJSONTyped,
} from './SubscriptionPromotionalOfferCreateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferCreateRequest
 */
export interface SubscriptionPromotionalOfferCreateRequest {
    /**
     * 
     * @type {SubscriptionPromotionalOfferCreateRequestData}
     * @memberof SubscriptionPromotionalOfferCreateRequest
     */
    data: SubscriptionPromotionalOfferCreateRequestData;
    /**
     * 
     * @type {Array<SubscriptionPromotionalOfferPriceInlineCreate>}
     * @memberof SubscriptionPromotionalOfferCreateRequest
     */
    included?: Array<SubscriptionPromotionalOfferPriceInlineCreate>;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferCreateRequest interface.
 */
export function instanceOfSubscriptionPromotionalOfferCreateRequest(value: object): value is SubscriptionPromotionalOfferCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SubscriptionPromotionalOfferCreateRequestFromJSON(json: any): SubscriptionPromotionalOfferCreateRequest {
    return SubscriptionPromotionalOfferCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SubscriptionPromotionalOfferCreateRequestDataFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionPromotionalOfferPriceInlineCreateFromJSON)),
    };
}

export function SubscriptionPromotionalOfferCreateRequestToJSON(json: any): SubscriptionPromotionalOfferCreateRequest {
    return SubscriptionPromotionalOfferCreateRequestToJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferCreateRequestToJSONTyped(value?: SubscriptionPromotionalOfferCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SubscriptionPromotionalOfferCreateRequestDataToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionPromotionalOfferPriceInlineCreateToJSON)),
    };
}

