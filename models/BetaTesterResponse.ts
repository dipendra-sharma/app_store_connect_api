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
import type { BetaTestersResponseIncludedInner } from './BetaTestersResponseIncludedInner';
import {
    BetaTestersResponseIncludedInnerFromJSON,
    BetaTestersResponseIncludedInnerFromJSONTyped,
    BetaTestersResponseIncludedInnerToJSON,
    BetaTestersResponseIncludedInnerToJSONTyped,
} from './BetaTestersResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
import type { BetaTester } from './BetaTester';
import {
    BetaTesterFromJSON,
    BetaTesterFromJSONTyped,
    BetaTesterToJSON,
    BetaTesterToJSONTyped,
} from './BetaTester';

/**
 * 
 * @export
 * @interface BetaTesterResponse
 */
export interface BetaTesterResponse {
    /**
     * 
     * @type {BetaTester}
     * @memberof BetaTesterResponse
     */
    data: BetaTester;
    /**
     * 
     * @type {Array<BetaTestersResponseIncludedInner>}
     * @memberof BetaTesterResponse
     */
    included?: Array<BetaTestersResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BetaTesterResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaTesterResponse interface.
 */
export function instanceOfBetaTesterResponse(value: object): value is BetaTesterResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaTesterResponseFromJSON(json: any): BetaTesterResponse {
    return BetaTesterResponseFromJSONTyped(json, false);
}

export function BetaTesterResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaTesterFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(BetaTestersResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BetaTesterResponseToJSON(json: any): BetaTesterResponse {
    return BetaTesterResponseToJSONTyped(json, false);
}

export function BetaTesterResponseToJSONTyped(value?: BetaTesterResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaTesterToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(BetaTestersResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

