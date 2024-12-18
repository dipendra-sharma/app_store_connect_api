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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
import type { SubscriptionPromotionalOfferRelationshipsPricesDataInner } from './SubscriptionPromotionalOfferRelationshipsPricesDataInner';
import {
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON,
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON,
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSONTyped,
} from './SubscriptionPromotionalOfferRelationshipsPricesDataInner';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferRelationshipsPrices
 */
export interface SubscriptionPromotionalOfferRelationshipsPrices {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof SubscriptionPromotionalOfferRelationshipsPrices
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionPromotionalOfferRelationshipsPrices
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>}
     * @memberof SubscriptionPromotionalOfferRelationshipsPrices
     */
    data?: Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferRelationshipsPrices interface.
 */
export function instanceOfSubscriptionPromotionalOfferRelationshipsPrices(value: object): value is SubscriptionPromotionalOfferRelationshipsPrices {
    return true;
}

export function SubscriptionPromotionalOfferRelationshipsPricesFromJSON(json: any): SubscriptionPromotionalOfferRelationshipsPrices {
    return SubscriptionPromotionalOfferRelationshipsPricesFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferRelationshipsPrices {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionPromotionalOfferRelationshipsPricesToJSON(json: any): SubscriptionPromotionalOfferRelationshipsPrices {
    return SubscriptionPromotionalOfferRelationshipsPricesToJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferRelationshipsPricesToJSONTyped(value?: SubscriptionPromotionalOfferRelationshipsPrices | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON)),
    };
}

