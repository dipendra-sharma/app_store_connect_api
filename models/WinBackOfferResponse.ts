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
import type { WinBackOffer } from './WinBackOffer';
import {
    WinBackOfferFromJSON,
    WinBackOfferFromJSONTyped,
    WinBackOfferToJSON,
    WinBackOfferToJSONTyped,
} from './WinBackOffer';
import type { WinBackOfferPrice } from './WinBackOfferPrice';
import {
    WinBackOfferPriceFromJSON,
    WinBackOfferPriceFromJSONTyped,
    WinBackOfferPriceToJSON,
    WinBackOfferPriceToJSONTyped,
} from './WinBackOfferPrice';
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
 * @interface WinBackOfferResponse
 */
export interface WinBackOfferResponse {
    /**
     * 
     * @type {WinBackOffer}
     * @memberof WinBackOfferResponse
     */
    data: WinBackOffer;
    /**
     * 
     * @type {Array<WinBackOfferPrice>}
     * @memberof WinBackOfferResponse
     */
    included?: Array<WinBackOfferPrice>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof WinBackOfferResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the WinBackOfferResponse interface.
 */
export function instanceOfWinBackOfferResponse(value: object): value is WinBackOfferResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function WinBackOfferResponseFromJSON(json: any): WinBackOfferResponse {
    return WinBackOfferResponseFromJSONTyped(json, false);
}

export function WinBackOfferResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': WinBackOfferFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(WinBackOfferPriceFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function WinBackOfferResponseToJSON(json: any): WinBackOfferResponse {
    return WinBackOfferResponseToJSONTyped(json, false);
}

export function WinBackOfferResponseToJSONTyped(value?: WinBackOfferResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': WinBackOfferToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(WinBackOfferPriceToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

