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
 * @interface BundleIdWithoutIncludesResponse
 */
export interface BundleIdWithoutIncludesResponse {
    /**
     * 
     * @type {BundleId}
     * @memberof BundleIdWithoutIncludesResponse
     */
    data: BundleId;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BundleIdWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BundleIdWithoutIncludesResponse interface.
 */
export function instanceOfBundleIdWithoutIncludesResponse(value: object): value is BundleIdWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BundleIdWithoutIncludesResponseFromJSON(json: any): BundleIdWithoutIncludesResponse {
    return BundleIdWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BundleIdWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BundleIdFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BundleIdWithoutIncludesResponseToJSON(json: any): BundleIdWithoutIncludesResponse {
    return BundleIdWithoutIncludesResponseToJSONTyped(json, false);
}

export function BundleIdWithoutIncludesResponseToJSONTyped(value?: BundleIdWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BundleIdToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

