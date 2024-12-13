
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
import type { SandboxTesterV2 } from './SandboxTesterV2';
import {
    SandboxTesterV2FromJSON,
    SandboxTesterV2FromJSONTyped,
    SandboxTesterV2ToJSON,
    SandboxTesterV2ToJSONTyped,
} from './SandboxTesterV2';
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
 * @interface SandboxTestersV2Response
 */
export interface SandboxTestersV2Response {
    /**
     * 
     * @type {Array<SandboxTesterV2>}
     * @memberof SandboxTestersV2Response
     */
    data: Array<SandboxTesterV2>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SandboxTestersV2Response
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SandboxTestersV2Response
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SandboxTestersV2Response interface.
 */
export function instanceOfSandboxTestersV2Response(value: object): value is SandboxTestersV2Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function SandboxTestersV2ResponseFromJSON(json: any): SandboxTestersV2Response {
    return SandboxTestersV2ResponseFromJSONTyped(json, false);
}

export function SandboxTestersV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersV2Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SandboxTesterV2FromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SandboxTestersV2ResponseToJSON(json: any): SandboxTestersV2Response {
    return SandboxTestersV2ResponseToJSONTyped(json, false);
}

export function SandboxTestersV2ResponseToJSONTyped(value?: SandboxTestersV2Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(SandboxTesterV2ToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

