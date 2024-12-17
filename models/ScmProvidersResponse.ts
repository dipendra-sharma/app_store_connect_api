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
import type { ScmProvider } from './ScmProvider';
import {
    ScmProviderFromJSON,
    ScmProviderFromJSONTyped,
    ScmProviderToJSON,
    ScmProviderToJSONTyped,
} from './ScmProvider';
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
 * @interface ScmProvidersResponse
 */
export interface ScmProvidersResponse {
    /**
     * 
     * @type {Array<ScmProvider>}
     * @memberof ScmProvidersResponse
     */
    data: Array<ScmProvider>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ScmProvidersResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ScmProvidersResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ScmProvidersResponse interface.
 */
export function instanceOfScmProvidersResponse(value: object): value is ScmProvidersResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function ScmProvidersResponseFromJSON(json: any): ScmProvidersResponse {
    return ScmProvidersResponseFromJSONTyped(json, false);
}

export function ScmProvidersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmProvidersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ScmProviderFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ScmProvidersResponseToJSON(json: any): ScmProvidersResponse {
    return ScmProvidersResponseToJSONTyped(json, false);
}

export function ScmProvidersResponseToJSONTyped(value?: ScmProvidersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(ScmProviderToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

