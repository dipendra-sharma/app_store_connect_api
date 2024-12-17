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
import type { BundleId } from './BundleId';
import {
    BundleIdFromJSON,
    BundleIdFromJSONTyped,
    BundleIdToJSON,
    BundleIdToJSONTyped,
} from './BundleId';
import type { BundleIdsResponseIncludedInner } from './BundleIdsResponseIncludedInner';
import {
    BundleIdsResponseIncludedInnerFromJSON,
    BundleIdsResponseIncludedInnerFromJSONTyped,
    BundleIdsResponseIncludedInnerToJSON,
    BundleIdsResponseIncludedInnerToJSONTyped,
} from './BundleIdsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BundleIdResponse
 */
export interface BundleIdResponse {
    /**
     * 
     * @type {BundleId}
     * @memberof BundleIdResponse
     */
    data: BundleId;
    /**
     * 
     * @type {Array<BundleIdsResponseIncludedInner>}
     * @memberof BundleIdResponse
     */
    included?: Array<BundleIdsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BundleIdResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BundleIdResponse interface.
 */
export function instanceOfBundleIdResponse(value: object): value is BundleIdResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BundleIdResponseFromJSON(json: any): BundleIdResponse {
    return BundleIdResponseFromJSONTyped(json, false);
}

export function BundleIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BundleIdFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(BundleIdsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BundleIdResponseToJSON(json: any): BundleIdResponse {
    return BundleIdResponseToJSONTyped(json, false);
}

export function BundleIdResponseToJSONTyped(value?: BundleIdResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BundleIdToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(BundleIdsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

