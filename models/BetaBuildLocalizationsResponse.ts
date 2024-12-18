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
import type { Build } from './Build';
import {
    BuildFromJSON,
    BuildFromJSONTyped,
    BuildToJSON,
    BuildToJSONTyped,
} from './Build';
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
 * @interface BetaBuildLocalizationsResponse
 */
export interface BetaBuildLocalizationsResponse {
    /**
     * 
     * @type {Array<BetaBuildLocalization>}
     * @memberof BetaBuildLocalizationsResponse
     */
    data: Array<BetaBuildLocalization>;
    /**
     * 
     * @type {Array<Build>}
     * @memberof BetaBuildLocalizationsResponse
     */
    included?: Array<Build>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaBuildLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaBuildLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaBuildLocalizationsResponse interface.
 */
export function instanceOfBetaBuildLocalizationsResponse(value: object): value is BetaBuildLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaBuildLocalizationsResponseFromJSON(json: any): BetaBuildLocalizationsResponse {
    return BetaBuildLocalizationsResponseFromJSONTyped(json, false);
}

export function BetaBuildLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaBuildLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(BuildFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaBuildLocalizationsResponseToJSON(json: any): BetaBuildLocalizationsResponse {
    return BetaBuildLocalizationsResponseToJSONTyped(json, false);
}

export function BetaBuildLocalizationsResponseToJSONTyped(value?: BetaBuildLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaBuildLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(BuildToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

