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
 * @interface BetaGroupsWithoutIncludesResponse
 */
export interface BetaGroupsWithoutIncludesResponse {
    /**
     * 
     * @type {Array<BetaGroup>}
     * @memberof BetaGroupsWithoutIncludesResponse
     */
    data: Array<BetaGroup>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaGroupsWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaGroupsWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaGroupsWithoutIncludesResponse interface.
 */
export function instanceOfBetaGroupsWithoutIncludesResponse(value: object): value is BetaGroupsWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaGroupsWithoutIncludesResponseFromJSON(json: any): BetaGroupsWithoutIncludesResponse {
    return BetaGroupsWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BetaGroupsWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupsWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaGroupFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaGroupsWithoutIncludesResponseToJSON(json: any): BetaGroupsWithoutIncludesResponse {
    return BetaGroupsWithoutIncludesResponseToJSONTyped(json, false);
}

export function BetaGroupsWithoutIncludesResponseToJSONTyped(value?: BetaGroupsWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaGroupToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

