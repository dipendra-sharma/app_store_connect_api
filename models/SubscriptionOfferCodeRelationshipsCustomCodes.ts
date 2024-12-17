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
import type { SubscriptionOfferCodeRelationshipsCustomCodesDataInner } from './SubscriptionOfferCodeRelationshipsCustomCodesDataInner';
import {
    SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSON,
    SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSONTyped,
    SubscriptionOfferCodeRelationshipsCustomCodesDataInnerToJSON,
    SubscriptionOfferCodeRelationshipsCustomCodesDataInnerToJSONTyped,
} from './SubscriptionOfferCodeRelationshipsCustomCodesDataInner';
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
 * @interface SubscriptionOfferCodeRelationshipsCustomCodes
 */
export interface SubscriptionOfferCodeRelationshipsCustomCodes {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodes
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodes
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionOfferCodeRelationshipsCustomCodesDataInner>}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodes
     */
    data?: Array<SubscriptionOfferCodeRelationshipsCustomCodesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsCustomCodes interface.
 */
export function instanceOfSubscriptionOfferCodeRelationshipsCustomCodes(value: object): value is SubscriptionOfferCodeRelationshipsCustomCodes {
    return true;
}

export function SubscriptionOfferCodeRelationshipsCustomCodesFromJSON(json: any): SubscriptionOfferCodeRelationshipsCustomCodes {
    return SubscriptionOfferCodeRelationshipsCustomCodesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsCustomCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsCustomCodes {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSON)),
    };
}

export function SubscriptionOfferCodeRelationshipsCustomCodesToJSON(json: any): SubscriptionOfferCodeRelationshipsCustomCodes {
    return SubscriptionOfferCodeRelationshipsCustomCodesToJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsCustomCodesToJSONTyped(value?: SubscriptionOfferCodeRelationshipsCustomCodes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(SubscriptionOfferCodeRelationshipsCustomCodesDataInnerToJSON)),
    };
}

