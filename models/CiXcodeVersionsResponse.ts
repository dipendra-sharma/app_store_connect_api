
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
import type { CiMacOsVersion } from './CiMacOsVersion';
import {
    CiMacOsVersionFromJSON,
    CiMacOsVersionFromJSONTyped,
    CiMacOsVersionToJSON,
    CiMacOsVersionToJSONTyped,
} from './CiMacOsVersion';
import type { CiXcodeVersion } from './CiXcodeVersion';
import {
    CiXcodeVersionFromJSON,
    CiXcodeVersionFromJSONTyped,
    CiXcodeVersionToJSON,
    CiXcodeVersionToJSONTyped,
} from './CiXcodeVersion';
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
 * @interface CiXcodeVersionsResponse
 */
export interface CiXcodeVersionsResponse {
    /**
     * 
     * @type {Array<CiXcodeVersion>}
     * @memberof CiXcodeVersionsResponse
     */
    data: Array<CiXcodeVersion>;
    /**
     * 
     * @type {Array<CiMacOsVersion>}
     * @memberof CiXcodeVersionsResponse
     */
    included?: Array<CiMacOsVersion>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiXcodeVersionsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiXcodeVersionsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiXcodeVersionsResponse interface.
 */
export function instanceOfCiXcodeVersionsResponse(value: object): value is CiXcodeVersionsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CiXcodeVersionsResponseFromJSON(json: any): CiXcodeVersionsResponse {
    return CiXcodeVersionsResponseFromJSONTyped(json, false);
}

export function CiXcodeVersionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiXcodeVersionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiXcodeVersionFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(CiMacOsVersionFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiXcodeVersionsResponseToJSON(json: any): CiXcodeVersionsResponse {
    return CiXcodeVersionsResponseToJSONTyped(json, false);
}

export function CiXcodeVersionsResponseToJSONTyped(value?: CiXcodeVersionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(CiXcodeVersionToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(CiMacOsVersionToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

