
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
import type { BetaGroupRelationshipsBetaTestersDataInner } from './BetaGroupRelationshipsBetaTestersDataInner';
import {
    BetaGroupRelationshipsBetaTestersDataInnerFromJSON,
    BetaGroupRelationshipsBetaTestersDataInnerFromJSONTyped,
    BetaGroupRelationshipsBetaTestersDataInnerToJSON,
    BetaGroupRelationshipsBetaTestersDataInnerToJSONTyped,
} from './BetaGroupRelationshipsBetaTestersDataInner';
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
 * @interface BuildIndividualTestersLinkagesResponse
 */
export interface BuildIndividualTestersLinkagesResponse {
    /**
     * 
     * @type {Array<BetaGroupRelationshipsBetaTestersDataInner>}
     * @memberof BuildIndividualTestersLinkagesResponse
     */
    data: Array<BetaGroupRelationshipsBetaTestersDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BuildIndividualTestersLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildIndividualTestersLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BuildIndividualTestersLinkagesResponse interface.
 */
export function instanceOfBuildIndividualTestersLinkagesResponse(value: object): value is BuildIndividualTestersLinkagesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BuildIndividualTestersLinkagesResponseFromJSON(json: any): BuildIndividualTestersLinkagesResponse {
    return BuildIndividualTestersLinkagesResponseFromJSONTyped(json, false);
}

export function BuildIndividualTestersLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIndividualTestersLinkagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BuildIndividualTestersLinkagesResponseToJSON(json: any): BuildIndividualTestersLinkagesResponse {
    return BuildIndividualTestersLinkagesResponseToJSONTyped(json, false);
}

export function BuildIndividualTestersLinkagesResponseToJSONTyped(value?: BuildIndividualTestersLinkagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

