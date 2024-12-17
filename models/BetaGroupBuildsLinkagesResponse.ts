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
import type { AppEncryptionDeclarationRelationshipsBuildsDataInner } from './AppEncryptionDeclarationRelationshipsBuildsDataInner';
import {
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSONTyped,
} from './AppEncryptionDeclarationRelationshipsBuildsDataInner';

/**
 * 
 * @export
 * @interface BetaGroupBuildsLinkagesResponse
 */
export interface BetaGroupBuildsLinkagesResponse {
    /**
     * 
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof BetaGroupBuildsLinkagesResponse
     */
    data: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaGroupBuildsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaGroupBuildsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaGroupBuildsLinkagesResponse interface.
 */
export function instanceOfBetaGroupBuildsLinkagesResponse(value: object): value is BetaGroupBuildsLinkagesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaGroupBuildsLinkagesResponseFromJSON(json: any): BetaGroupBuildsLinkagesResponse {
    return BetaGroupBuildsLinkagesResponseFromJSONTyped(json, false);
}

export function BetaGroupBuildsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupBuildsLinkagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaGroupBuildsLinkagesResponseToJSON(json: any): BetaGroupBuildsLinkagesResponse {
    return BetaGroupBuildsLinkagesResponseToJSONTyped(json, false);
}

export function BetaGroupBuildsLinkagesResponseToJSONTyped(value?: BetaGroupBuildsLinkagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

