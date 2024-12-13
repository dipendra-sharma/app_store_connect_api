
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
import type { SubscriptionRelationshipsWinBackOffersDataInner } from './SubscriptionRelationshipsWinBackOffersDataInner';
import {
    SubscriptionRelationshipsWinBackOffersDataInnerFromJSON,
    SubscriptionRelationshipsWinBackOffersDataInnerFromJSONTyped,
    SubscriptionRelationshipsWinBackOffersDataInnerToJSON,
    SubscriptionRelationshipsWinBackOffersDataInnerToJSONTyped,
} from './SubscriptionRelationshipsWinBackOffersDataInner';
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
 * @interface SubscriptionRelationshipsWinBackOffers
 */
export interface SubscriptionRelationshipsWinBackOffers {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof SubscriptionRelationshipsWinBackOffers
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionRelationshipsWinBackOffers
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionRelationshipsWinBackOffersDataInner>}
     * @memberof SubscriptionRelationshipsWinBackOffers
     */
    data?: Array<SubscriptionRelationshipsWinBackOffersDataInner>;
}

/**
 * Check if a given object implements the SubscriptionRelationshipsWinBackOffers interface.
 */
export function instanceOfSubscriptionRelationshipsWinBackOffers(value: object): value is SubscriptionRelationshipsWinBackOffers {
    return true;
}

export function SubscriptionRelationshipsWinBackOffersFromJSON(json: any): SubscriptionRelationshipsWinBackOffers {
    return SubscriptionRelationshipsWinBackOffersFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsWinBackOffersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsWinBackOffers {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionRelationshipsWinBackOffersDataInnerFromJSON)),
    };
}

export function SubscriptionRelationshipsWinBackOffersToJSON(json: any): SubscriptionRelationshipsWinBackOffers {
    return SubscriptionRelationshipsWinBackOffersToJSONTyped(json, false);
}

export function SubscriptionRelationshipsWinBackOffersToJSONTyped(value?: SubscriptionRelationshipsWinBackOffers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(SubscriptionRelationshipsWinBackOffersDataInnerToJSON)),
    };
}
