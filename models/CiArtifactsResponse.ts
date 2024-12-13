
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
import type { CiArtifact } from './CiArtifact';
import {
    CiArtifactFromJSON,
    CiArtifactFromJSONTyped,
    CiArtifactToJSON,
    CiArtifactToJSONTyped,
} from './CiArtifact';
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
 * @interface CiArtifactsResponse
 */
export interface CiArtifactsResponse {
    /**
     * 
     * @type {Array<CiArtifact>}
     * @memberof CiArtifactsResponse
     */
    data: Array<CiArtifact>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiArtifactsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiArtifactsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiArtifactsResponse interface.
 */
export function instanceOfCiArtifactsResponse(value: object): value is CiArtifactsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CiArtifactsResponseFromJSON(json: any): CiArtifactsResponse {
    return CiArtifactsResponseFromJSONTyped(json, false);
}

export function CiArtifactsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiArtifactsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiArtifactFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiArtifactsResponseToJSON(json: any): CiArtifactsResponse {
    return CiArtifactsResponseToJSONTyped(json, false);
}

export function CiArtifactsResponseToJSONTyped(value?: CiArtifactsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(CiArtifactToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

