
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
import type { SubscriptionOfferCodeRelationshipsPricesDataInner } from './SubscriptionOfferCodeRelationshipsPricesDataInner';
import {
    SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSON,
    SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionOfferCodeRelationshipsPricesDataInnerToJSON,
    SubscriptionOfferCodeRelationshipsPricesDataInnerToJSONTyped,
} from './SubscriptionOfferCodeRelationshipsPricesDataInner';
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
 * @interface SubscriptionOfferCodeRelationshipsPrices
 */
export interface SubscriptionOfferCodeRelationshipsPrices {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof SubscriptionOfferCodeRelationshipsPrices
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodeRelationshipsPrices
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionOfferCodeRelationshipsPricesDataInner>}
     * @memberof SubscriptionOfferCodeRelationshipsPrices
     */
    data?: Array<SubscriptionOfferCodeRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsPrices interface.
 */
export function instanceOfSubscriptionOfferCodeRelationshipsPrices(value: object): value is SubscriptionOfferCodeRelationshipsPrices {
    return true;
}

export function SubscriptionOfferCodeRelationshipsPricesFromJSON(json: any): SubscriptionOfferCodeRelationshipsPrices {
    return SubscriptionOfferCodeRelationshipsPricesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsPrices {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionOfferCodeRelationshipsPricesToJSON(json: any): SubscriptionOfferCodeRelationshipsPrices {
    return SubscriptionOfferCodeRelationshipsPricesToJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsPricesToJSONTyped(value?: SubscriptionOfferCodeRelationshipsPrices | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(SubscriptionOfferCodeRelationshipsPricesDataInnerToJSON)),
    };
}
