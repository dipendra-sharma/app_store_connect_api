
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
import type { SubscriptionOfferCodeRelationshipsPricesDataInner } from './SubscriptionOfferCodeRelationshipsPricesDataInner';
import {
    SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSON,
    SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionOfferCodeRelationshipsPricesDataInnerToJSON,
    SubscriptionOfferCodeRelationshipsPricesDataInnerToJSONTyped,
} from './SubscriptionOfferCodeRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCreateRequestDataRelationshipsPrices
 */
export interface SubscriptionOfferCodeCreateRequestDataRelationshipsPrices {
    /**
     * 
     * @type {Array<SubscriptionOfferCodeRelationshipsPricesDataInner>}
     * @memberof SubscriptionOfferCodeCreateRequestDataRelationshipsPrices
     */
    data: Array<SubscriptionOfferCodeRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCreateRequestDataRelationshipsPrices interface.
 */
export function instanceOfSubscriptionOfferCodeCreateRequestDataRelationshipsPrices(value: object): value is SubscriptionOfferCodeCreateRequestDataRelationshipsPrices {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsPricesFromJSON(json: any): SubscriptionOfferCodeCreateRequestDataRelationshipsPrices {
    return SubscriptionOfferCodeCreateRequestDataRelationshipsPricesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCreateRequestDataRelationshipsPrices {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsPricesToJSON(json: any): SubscriptionOfferCodeCreateRequestDataRelationshipsPrices {
    return SubscriptionOfferCodeCreateRequestDataRelationshipsPricesToJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsPricesToJSONTyped(value?: SubscriptionOfferCodeCreateRequestDataRelationshipsPrices | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(SubscriptionOfferCodeRelationshipsPricesDataInnerToJSON)),
    };
}
