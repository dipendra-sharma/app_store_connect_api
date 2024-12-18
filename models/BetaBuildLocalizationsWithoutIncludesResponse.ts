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
import type { BetaBuildLocalization } from './BetaBuildLocalization';
import {
    BetaBuildLocalizationFromJSON,
    BetaBuildLocalizationFromJSONTyped,
    BetaBuildLocalizationToJSON,
    BetaBuildLocalizationToJSONTyped,
} from './BetaBuildLocalization';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface BetaBuildLocalizationsWithoutIncludesResponse
 */
export interface BetaBuildLocalizationsWithoutIncludesResponse {
    /**
     * 
     * @type {Array<BetaBuildLocalization>}
     * @memberof BetaBuildLocalizationsWithoutIncludesResponse
     */
    data: Array<BetaBuildLocalization>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaBuildLocalizationsWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaBuildLocalizationsWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaBuildLocalizationsWithoutIncludesResponse interface.
 */
export function instanceOfBetaBuildLocalizationsWithoutIncludesResponse(value: object): value is BetaBuildLocalizationsWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaBuildLocalizationsWithoutIncludesResponseFromJSON(json: any): BetaBuildLocalizationsWithoutIncludesResponse {
    return BetaBuildLocalizationsWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BetaBuildLocalizationsWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationsWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaBuildLocalizationFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaBuildLocalizationsWithoutIncludesResponseToJSON(json: any): BetaBuildLocalizationsWithoutIncludesResponse {
    return BetaBuildLocalizationsWithoutIncludesResponseToJSONTyped(json, false);
}

export function BetaBuildLocalizationsWithoutIncludesResponseToJSONTyped(value?: BetaBuildLocalizationsWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaBuildLocalizationToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

