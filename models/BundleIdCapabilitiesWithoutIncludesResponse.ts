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
import type { BundleIdCapability } from './BundleIdCapability';
import {
    BundleIdCapabilityFromJSON,
    BundleIdCapabilityFromJSONTyped,
    BundleIdCapabilityToJSON,
    BundleIdCapabilityToJSONTyped,
} from './BundleIdCapability';
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
 * @interface BundleIdCapabilitiesWithoutIncludesResponse
 */
export interface BundleIdCapabilitiesWithoutIncludesResponse {
    /**
     * 
     * @type {Array<BundleIdCapability>}
     * @memberof BundleIdCapabilitiesWithoutIncludesResponse
     */
    data: Array<BundleIdCapability>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BundleIdCapabilitiesWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BundleIdCapabilitiesWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BundleIdCapabilitiesWithoutIncludesResponse interface.
 */
export function instanceOfBundleIdCapabilitiesWithoutIncludesResponse(value: object): value is BundleIdCapabilitiesWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BundleIdCapabilitiesWithoutIncludesResponseFromJSON(json: any): BundleIdCapabilitiesWithoutIncludesResponse {
    return BundleIdCapabilitiesWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BundleIdCapabilitiesWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilitiesWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BundleIdCapabilityFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BundleIdCapabilitiesWithoutIncludesResponseToJSON(json: any): BundleIdCapabilitiesWithoutIncludesResponse {
    return BundleIdCapabilitiesWithoutIncludesResponseToJSONTyped(json, false);
}

export function BundleIdCapabilitiesWithoutIncludesResponseToJSONTyped(value?: BundleIdCapabilitiesWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BundleIdCapabilityToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

