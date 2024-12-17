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
import type { SubscriptionOfferCodeOneTimeUseCode } from './SubscriptionOfferCodeOneTimeUseCode';
import {
    SubscriptionOfferCodeOneTimeUseCodeFromJSON,
    SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped,
    SubscriptionOfferCodeOneTimeUseCodeToJSON,
    SubscriptionOfferCodeOneTimeUseCodeToJSONTyped,
} from './SubscriptionOfferCodeOneTimeUseCode';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
import type { SubscriptionOfferCode } from './SubscriptionOfferCode';
import {
    SubscriptionOfferCodeFromJSON,
    SubscriptionOfferCodeFromJSONTyped,
    SubscriptionOfferCodeToJSON,
    SubscriptionOfferCodeToJSONTyped,
} from './SubscriptionOfferCode';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeOneTimeUseCodeResponse
 */
export interface SubscriptionOfferCodeOneTimeUseCodeResponse {
    /**
     * 
     * @type {SubscriptionOfferCodeOneTimeUseCode}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeResponse
     */
    data: SubscriptionOfferCodeOneTimeUseCode;
    /**
     * 
     * @type {Array<SubscriptionOfferCode>}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeResponse
     */
    included?: Array<SubscriptionOfferCode>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeResponse interface.
 */
export function instanceOfSubscriptionOfferCodeOneTimeUseCodeResponse(value: object): value is SubscriptionOfferCodeOneTimeUseCodeResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodeOneTimeUseCodeResponseFromJSON(json: any): SubscriptionOfferCodeOneTimeUseCodeResponse {
    return SubscriptionOfferCodeOneTimeUseCodeResponseFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeOneTimeUseCodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeOneTimeUseCodeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeOneTimeUseCodeFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodeFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionOfferCodeOneTimeUseCodeResponseToJSON(json: any): SubscriptionOfferCodeOneTimeUseCodeResponse {
    return SubscriptionOfferCodeOneTimeUseCodeResponseToJSONTyped(json, false);
}

export function SubscriptionOfferCodeOneTimeUseCodeResponseToJSONTyped(value?: SubscriptionOfferCodeOneTimeUseCodeResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SubscriptionOfferCodeOneTimeUseCodeToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(SubscriptionOfferCodeToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

