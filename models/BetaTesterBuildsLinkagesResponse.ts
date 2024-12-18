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
 * @interface BetaTesterBuildsLinkagesResponse
 */
export interface BetaTesterBuildsLinkagesResponse {
    /**
     * 
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof BetaTesterBuildsLinkagesResponse
     */
    data: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaTesterBuildsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaTesterBuildsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaTesterBuildsLinkagesResponse interface.
 */
export function instanceOfBetaTesterBuildsLinkagesResponse(value: object): value is BetaTesterBuildsLinkagesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaTesterBuildsLinkagesResponseFromJSON(json: any): BetaTesterBuildsLinkagesResponse {
    return BetaTesterBuildsLinkagesResponseFromJSONTyped(json, false);
}

export function BetaTesterBuildsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterBuildsLinkagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaTesterBuildsLinkagesResponseToJSON(json: any): BetaTesterBuildsLinkagesResponse {
    return BetaTesterBuildsLinkagesResponseToJSONTyped(json, false);
}

export function BetaTesterBuildsLinkagesResponseToJSONTyped(value?: BetaTesterBuildsLinkagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

