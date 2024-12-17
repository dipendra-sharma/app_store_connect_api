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
import type { CiBuildAction } from './CiBuildAction';
import {
    CiBuildActionFromJSON,
    CiBuildActionFromJSONTyped,
    CiBuildActionToJSON,
    CiBuildActionToJSONTyped,
} from './CiBuildAction';
import type { CiBuildRun } from './CiBuildRun';
import {
    CiBuildRunFromJSON,
    CiBuildRunFromJSONTyped,
    CiBuildRunToJSON,
    CiBuildRunToJSONTyped,
} from './CiBuildRun';
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
 * @interface CiBuildActionsResponse
 */
export interface CiBuildActionsResponse {
    /**
     * 
     * @type {Array<CiBuildAction>}
     * @memberof CiBuildActionsResponse
     */
    data: Array<CiBuildAction>;
    /**
     * 
     * @type {Array<CiBuildRun>}
     * @memberof CiBuildActionsResponse
     */
    included?: Array<CiBuildRun>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiBuildActionsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiBuildActionsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiBuildActionsResponse interface.
 */
export function instanceOfCiBuildActionsResponse(value: object): value is CiBuildActionsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CiBuildActionsResponseFromJSON(json: any): CiBuildActionsResponse {
    return CiBuildActionsResponseFromJSONTyped(json, false);
}

export function CiBuildActionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildActionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiBuildActionFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(CiBuildRunFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiBuildActionsResponseToJSON(json: any): CiBuildActionsResponse {
    return CiBuildActionsResponseToJSONTyped(json, false);
}

export function CiBuildActionsResponseToJSONTyped(value?: CiBuildActionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(CiBuildActionToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(CiBuildRunToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

