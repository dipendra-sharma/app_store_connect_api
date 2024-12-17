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
import type { SubscriptionRelationshipsPricesDataInner } from './SubscriptionRelationshipsPricesDataInner';
import {
    SubscriptionRelationshipsPricesDataInnerFromJSON,
    SubscriptionRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionRelationshipsPricesDataInnerToJSON,
    SubscriptionRelationshipsPricesDataInnerToJSONTyped,
} from './SubscriptionRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionPricesLinkagesRequest
 */
export interface SubscriptionPricesLinkagesRequest {
    /**
     * 
     * @type {Array<SubscriptionRelationshipsPricesDataInner>}
     * @memberof SubscriptionPricesLinkagesRequest
     */
    data: Array<SubscriptionRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionPricesLinkagesRequest interface.
 */
export function instanceOfSubscriptionPricesLinkagesRequest(value: object): value is SubscriptionPricesLinkagesRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SubscriptionPricesLinkagesRequestFromJSON(json: any): SubscriptionPricesLinkagesRequest {
    return SubscriptionPricesLinkagesRequestFromJSONTyped(json, false);
}

export function SubscriptionPricesLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPricesLinkagesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionPricesLinkagesRequestToJSON(json: any): SubscriptionPricesLinkagesRequest {
    return SubscriptionPricesLinkagesRequestToJSONTyped(json, false);
}

export function SubscriptionPricesLinkagesRequestToJSONTyped(value?: SubscriptionPricesLinkagesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(SubscriptionRelationshipsPricesDataInnerToJSON)),
    };
}

