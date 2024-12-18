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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { SubscriptionRelationshipsIntroductoryOffersDataInner } from './SubscriptionRelationshipsIntroductoryOffersDataInner';
import {
    SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSON,
    SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSONTyped,
    SubscriptionRelationshipsIntroductoryOffersDataInnerToJSON,
    SubscriptionRelationshipsIntroductoryOffersDataInnerToJSONTyped,
} from './SubscriptionRelationshipsIntroductoryOffersDataInner';

/**
 * 
 * @export
 * @interface SubscriptionRelationshipsIntroductoryOffers
 */
export interface SubscriptionRelationshipsIntroductoryOffers {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof SubscriptionRelationshipsIntroductoryOffers
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionRelationshipsIntroductoryOffers
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionRelationshipsIntroductoryOffersDataInner>}
     * @memberof SubscriptionRelationshipsIntroductoryOffers
     */
    data?: Array<SubscriptionRelationshipsIntroductoryOffersDataInner>;
}

/**
 * Check if a given object implements the SubscriptionRelationshipsIntroductoryOffers interface.
 */
export function instanceOfSubscriptionRelationshipsIntroductoryOffers(value: object): value is SubscriptionRelationshipsIntroductoryOffers {
    return true;
}

export function SubscriptionRelationshipsIntroductoryOffersFromJSON(json: any): SubscriptionRelationshipsIntroductoryOffers {
    return SubscriptionRelationshipsIntroductoryOffersFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsIntroductoryOffersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsIntroductoryOffers {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSON)),
    };
}

export function SubscriptionRelationshipsIntroductoryOffersToJSON(json: any): SubscriptionRelationshipsIntroductoryOffers {
    return SubscriptionRelationshipsIntroductoryOffersToJSONTyped(json, false);
}

export function SubscriptionRelationshipsIntroductoryOffersToJSONTyped(value?: SubscriptionRelationshipsIntroductoryOffers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(SubscriptionRelationshipsIntroductoryOffersDataInnerToJSON)),
    };
}

