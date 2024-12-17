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
import type { CiProduct } from './CiProduct';
import {
    CiProductFromJSON,
    CiProductFromJSONTyped,
    CiProductToJSON,
    CiProductToJSONTyped,
} from './CiProduct';
import type { CiProductsResponseIncludedInner } from './CiProductsResponseIncludedInner';
import {
    CiProductsResponseIncludedInnerFromJSON,
    CiProductsResponseIncludedInnerFromJSONTyped,
    CiProductsResponseIncludedInnerToJSON,
    CiProductsResponseIncludedInnerToJSONTyped,
} from './CiProductsResponseIncludedInner';
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
 * @interface CiProductsResponse
 */
export interface CiProductsResponse {
    /**
     * 
     * @type {Array<CiProduct>}
     * @memberof CiProductsResponse
     */
    data: Array<CiProduct>;
    /**
     * 
     * @type {Array<CiProductsResponseIncludedInner>}
     * @memberof CiProductsResponse
     */
    included?: Array<CiProductsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiProductsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiProductsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiProductsResponse interface.
 */
export function instanceOfCiProductsResponse(value: object): value is CiProductsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CiProductsResponseFromJSON(json: any): CiProductsResponse {
    return CiProductsResponseFromJSONTyped(json, false);
}

export function CiProductsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiProductFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(CiProductsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiProductsResponseToJSON(json: any): CiProductsResponse {
    return CiProductsResponseToJSONTyped(json, false);
}

export function CiProductsResponseToJSONTyped(value?: CiProductsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(CiProductToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(CiProductsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

