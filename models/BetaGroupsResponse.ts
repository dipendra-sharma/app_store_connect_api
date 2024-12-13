
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
import type { BetaGroupsResponseIncludedInner } from './BetaGroupsResponseIncludedInner';
import {
    BetaGroupsResponseIncludedInnerFromJSON,
    BetaGroupsResponseIncludedInnerFromJSONTyped,
    BetaGroupsResponseIncludedInnerToJSON,
    BetaGroupsResponseIncludedInnerToJSONTyped,
} from './BetaGroupsResponseIncludedInner';
import type { BetaGroup } from './BetaGroup';
import {
    BetaGroupFromJSON,
    BetaGroupFromJSONTyped,
    BetaGroupToJSON,
    BetaGroupToJSONTyped,
} from './BetaGroup';
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
 * @interface BetaGroupsResponse
 */
export interface BetaGroupsResponse {
    /**
     * 
     * @type {Array<BetaGroup>}
     * @memberof BetaGroupsResponse
     */
    data: Array<BetaGroup>;
    /**
     * 
     * @type {Array<BetaGroupsResponseIncludedInner>}
     * @memberof BetaGroupsResponse
     */
    included?: Array<BetaGroupsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaGroupsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaGroupsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaGroupsResponse interface.
 */
export function instanceOfBetaGroupsResponse(value: object): value is BetaGroupsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaGroupsResponseFromJSON(json: any): BetaGroupsResponse {
    return BetaGroupsResponseFromJSONTyped(json, false);
}

export function BetaGroupsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaGroupFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(BetaGroupsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaGroupsResponseToJSON(json: any): BetaGroupsResponse {
    return BetaGroupsResponseToJSONTyped(json, false);
}

export function BetaGroupsResponseToJSONTyped(value?: BetaGroupsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaGroupToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(BetaGroupsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
