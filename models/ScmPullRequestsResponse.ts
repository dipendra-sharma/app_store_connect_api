
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
import type { ScmPullRequest } from './ScmPullRequest';
import {
    ScmPullRequestFromJSON,
    ScmPullRequestFromJSONTyped,
    ScmPullRequestToJSON,
    ScmPullRequestToJSONTyped,
} from './ScmPullRequest';
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
 * @interface ScmPullRequestsResponse
 */
export interface ScmPullRequestsResponse {
    /**
     * 
     * @type {Array<ScmPullRequest>}
     * @memberof ScmPullRequestsResponse
     */
    data: Array<ScmPullRequest>;
    /**
     * 
     * @type {Array<ScmRepository>}
     * @memberof ScmPullRequestsResponse
     */
    included?: Array<ScmRepository>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ScmPullRequestsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ScmPullRequestsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ScmPullRequestsResponse interface.
 */
export function instanceOfScmPullRequestsResponse(value: object): value is ScmPullRequestsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function ScmPullRequestsResponseFromJSON(json: any): ScmPullRequestsResponse {
    return ScmPullRequestsResponseFromJSONTyped(json, false);
}

export function ScmPullRequestsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmPullRequestsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ScmPullRequestFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(ScmRepositoryFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ScmPullRequestsResponseToJSON(json: any): ScmPullRequestsResponse {
    return ScmPullRequestsResponseToJSONTyped(json, false);
}

export function ScmPullRequestsResponseToJSONTyped(value?: ScmPullRequestsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(ScmPullRequestToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(ScmRepositoryToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

