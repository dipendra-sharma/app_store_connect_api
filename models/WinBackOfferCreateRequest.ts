
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
import type { WinBackOfferPriceInlineCreate } from './WinBackOfferPriceInlineCreate';
import {
    WinBackOfferPriceInlineCreateFromJSON,
    WinBackOfferPriceInlineCreateFromJSONTyped,
    WinBackOfferPriceInlineCreateToJSON,
    WinBackOfferPriceInlineCreateToJSONTyped,
} from './WinBackOfferPriceInlineCreate';
import type { WinBackOfferCreateRequestData } from './WinBackOfferCreateRequestData';
import {
    WinBackOfferCreateRequestDataFromJSON,
    WinBackOfferCreateRequestDataFromJSONTyped,
    WinBackOfferCreateRequestDataToJSON,
    WinBackOfferCreateRequestDataToJSONTyped,
} from './WinBackOfferCreateRequestData';

/**
 * 
 * @export
 * @interface WinBackOfferCreateRequest
 */
export interface WinBackOfferCreateRequest {
    /**
     * 
     * @type {WinBackOfferCreateRequestData}
     * @memberof WinBackOfferCreateRequest
     */
    data: WinBackOfferCreateRequestData;
    /**
     * 
     * @type {Array<WinBackOfferPriceInlineCreate>}
     * @memberof WinBackOfferCreateRequest
     */
    included?: Array<WinBackOfferPriceInlineCreate>;
}

/**
 * Check if a given object implements the WinBackOfferCreateRequest interface.
 */
export function instanceOfWinBackOfferCreateRequest(value: object): value is WinBackOfferCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function WinBackOfferCreateRequestFromJSON(json: any): WinBackOfferCreateRequest {
    return WinBackOfferCreateRequestFromJSONTyped(json, false);
}

export function WinBackOfferCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': WinBackOfferCreateRequestDataFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(WinBackOfferPriceInlineCreateFromJSON)),
    };
}

export function WinBackOfferCreateRequestToJSON(json: any): WinBackOfferCreateRequest {
    return WinBackOfferCreateRequestToJSONTyped(json, false);
}

export function WinBackOfferCreateRequestToJSONTyped(value?: WinBackOfferCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': WinBackOfferCreateRequestDataToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(WinBackOfferPriceInlineCreateToJSON)),
    };
}
