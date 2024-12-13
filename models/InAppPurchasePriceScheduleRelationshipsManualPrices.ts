
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
import type { InAppPurchasePriceScheduleRelationshipsManualPricesDataInner } from './InAppPurchasePriceScheduleRelationshipsManualPricesDataInner';
import {
    InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSON,
    InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped,
    InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerToJSON,
    InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerToJSONTyped,
} from './InAppPurchasePriceScheduleRelationshipsManualPricesDataInner';
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
 * @interface InAppPurchasePriceScheduleRelationshipsManualPrices
 */
export interface InAppPurchasePriceScheduleRelationshipsManualPrices {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof InAppPurchasePriceScheduleRelationshipsManualPrices
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof InAppPurchasePriceScheduleRelationshipsManualPrices
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<InAppPurchasePriceScheduleRelationshipsManualPricesDataInner>}
     * @memberof InAppPurchasePriceScheduleRelationshipsManualPrices
     */
    data?: Array<InAppPurchasePriceScheduleRelationshipsManualPricesDataInner>;
}

/**
 * Check if a given object implements the InAppPurchasePriceScheduleRelationshipsManualPrices interface.
 */
export function instanceOfInAppPurchasePriceScheduleRelationshipsManualPrices(value: object): value is InAppPurchasePriceScheduleRelationshipsManualPrices {
    return true;
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesFromJSON(json: any): InAppPurchasePriceScheduleRelationshipsManualPrices {
    return InAppPurchasePriceScheduleRelationshipsManualPricesFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleRelationshipsManualPrices {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSON)),
    };
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesToJSON(json: any): InAppPurchasePriceScheduleRelationshipsManualPrices {
    return InAppPurchasePriceScheduleRelationshipsManualPricesToJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesToJSONTyped(value?: InAppPurchasePriceScheduleRelationshipsManualPrices | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerToJSON)),
    };
}

