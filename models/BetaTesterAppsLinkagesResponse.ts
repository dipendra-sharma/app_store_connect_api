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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsAppData } from './AlternativeDistributionKeyCreateRequestDataRelationshipsAppData';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsAppData';
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
 * @interface BetaTesterAppsLinkagesResponse
 */
export interface BetaTesterAppsLinkagesResponse {
    /**
     * 
     * @type {Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>}
     * @memberof BetaTesterAppsLinkagesResponse
     */
    data: Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaTesterAppsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaTesterAppsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaTesterAppsLinkagesResponse interface.
 */
export function instanceOfBetaTesterAppsLinkagesResponse(value: object): value is BetaTesterAppsLinkagesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaTesterAppsLinkagesResponseFromJSON(json: any): BetaTesterAppsLinkagesResponse {
    return BetaTesterAppsLinkagesResponseFromJSONTyped(json, false);
}

export function BetaTesterAppsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterAppsLinkagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaTesterAppsLinkagesResponseToJSON(json: any): BetaTesterAppsLinkagesResponse {
    return BetaTesterAppsLinkagesResponseToJSONTyped(json, false);
}

export function BetaTesterAppsLinkagesResponseToJSONTyped(value?: BetaTesterAppsLinkagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

