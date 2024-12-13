
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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
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
 * @interface BetaTestersWithoutIncludesResponse
 */
export interface BetaTestersWithoutIncludesResponse {
    /**
     * 
     * @type {Array<BetaTester>}
     * @memberof BetaTestersWithoutIncludesResponse
     */
    data: Array<BetaTester>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaTestersWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaTestersWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaTestersWithoutIncludesResponse interface.
 */
export function instanceOfBetaTestersWithoutIncludesResponse(value: object): value is BetaTestersWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaTestersWithoutIncludesResponseFromJSON(json: any): BetaTestersWithoutIncludesResponse {
    return BetaTestersWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BetaTestersWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTestersWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaTesterFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaTestersWithoutIncludesResponseToJSON(json: any): BetaTestersWithoutIncludesResponse {
    return BetaTestersWithoutIncludesResponseToJSONTyped(json, false);
}

export function BetaTestersWithoutIncludesResponseToJSONTyped(value?: BetaTestersWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaTesterToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

