
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
import type { ScmRepository } from './ScmRepository';
import {
    ScmRepositoryFromJSON,
    ScmRepositoryFromJSONTyped,
    ScmRepositoryToJSON,
    ScmRepositoryToJSONTyped,
} from './ScmRepository';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
import type { ScmRepositoriesResponseIncludedInner } from './ScmRepositoriesResponseIncludedInner';
import {
    ScmRepositoriesResponseIncludedInnerFromJSON,
    ScmRepositoriesResponseIncludedInnerFromJSONTyped,
    ScmRepositoriesResponseIncludedInnerToJSON,
    ScmRepositoriesResponseIncludedInnerToJSONTyped,
} from './ScmRepositoriesResponseIncludedInner';

/**
 * 
 * @export
 * @interface ScmRepositoriesResponse
 */
export interface ScmRepositoriesResponse {
    /**
     * 
     * @type {Array<ScmRepository>}
     * @memberof ScmRepositoriesResponse
     */
    data: Array<ScmRepository>;
    /**
     * 
     * @type {Array<ScmRepositoriesResponseIncludedInner>}
     * @memberof ScmRepositoriesResponse
     */
    included?: Array<ScmRepositoriesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ScmRepositoriesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ScmRepositoriesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ScmRepositoriesResponse interface.
 */
export function instanceOfScmRepositoriesResponse(value: object): value is ScmRepositoriesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function ScmRepositoriesResponseFromJSON(json: any): ScmRepositoriesResponse {
    return ScmRepositoriesResponseFromJSONTyped(json, false);
}

export function ScmRepositoriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmRepositoriesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ScmRepositoryFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(ScmRepositoriesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ScmRepositoriesResponseToJSON(json: any): ScmRepositoriesResponse {
    return ScmRepositoriesResponseToJSONTyped(json, false);
}

export function ScmRepositoriesResponseToJSONTyped(value?: ScmRepositoriesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(ScmRepositoryToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(ScmRepositoriesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
