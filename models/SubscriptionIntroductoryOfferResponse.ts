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
import type { SubscriptionIntroductoryOffersResponseIncludedInner } from './SubscriptionIntroductoryOffersResponseIncludedInner';
import {
    SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON,
    SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped,
    SubscriptionIntroductoryOffersResponseIncludedInnerToJSON,
    SubscriptionIntroductoryOffersResponseIncludedInnerToJSONTyped,
} from './SubscriptionIntroductoryOffersResponseIncludedInner';
import type { SubscriptionIntroductoryOffer } from './SubscriptionIntroductoryOffer';
import {
    SubscriptionIntroductoryOfferFromJSON,
    SubscriptionIntroductoryOfferFromJSONTyped,
    SubscriptionIntroductoryOfferToJSON,
    SubscriptionIntroductoryOfferToJSONTyped,
} from './SubscriptionIntroductoryOffer';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface SubscriptionIntroductoryOfferResponse
 */
export interface SubscriptionIntroductoryOfferResponse {
    /**
     * 
     * @type {SubscriptionIntroductoryOffer}
     * @memberof SubscriptionIntroductoryOfferResponse
     */
    data: SubscriptionIntroductoryOffer;
    /**
     * 
     * @type {Array<SubscriptionIntroductoryOffersResponseIncludedInner>}
     * @memberof SubscriptionIntroductoryOfferResponse
     */
    included?: Array<SubscriptionIntroductoryOffersResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionIntroductoryOfferResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferResponse interface.
 */
export function instanceOfSubscriptionIntroductoryOfferResponse(value: object): value is SubscriptionIntroductoryOfferResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function SubscriptionIntroductoryOfferResponseFromJSON(json: any): SubscriptionIntroductoryOfferResponse {
    return SubscriptionIntroductoryOfferResponseFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SubscriptionIntroductoryOfferFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionIntroductoryOfferResponseToJSON(json: any): SubscriptionIntroductoryOfferResponse {
    return SubscriptionIntroductoryOfferResponseToJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferResponseToJSONTyped(value?: SubscriptionIntroductoryOfferResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SubscriptionIntroductoryOfferToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionIntroductoryOffersResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

