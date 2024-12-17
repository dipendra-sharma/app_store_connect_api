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
import type { AlternativeDistributionPackageVariant } from './AlternativeDistributionPackageVariant';
import {
    AlternativeDistributionPackageVariantFromJSON,
    AlternativeDistributionPackageVariantFromJSONTyped,
    AlternativeDistributionPackageVariantToJSON,
    AlternativeDistributionPackageVariantToJSONTyped,
} from './AlternativeDistributionPackageVariant';
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
 * @interface AlternativeDistributionPackageVariantResponse
 */
export interface AlternativeDistributionPackageVariantResponse {
    /**
     * 
     * @type {AlternativeDistributionPackageVariant}
     * @memberof AlternativeDistributionPackageVariantResponse
     */
    data: AlternativeDistributionPackageVariant;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AlternativeDistributionPackageVariantResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageVariantResponse interface.
 */
export function instanceOfAlternativeDistributionPackageVariantResponse(value: object): value is AlternativeDistributionPackageVariantResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AlternativeDistributionPackageVariantResponseFromJSON(json: any): AlternativeDistributionPackageVariantResponse {
    return AlternativeDistributionPackageVariantResponseFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVariantResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVariantResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AlternativeDistributionPackageVariantFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AlternativeDistributionPackageVariantResponseToJSON(json: any): AlternativeDistributionPackageVariantResponse {
    return AlternativeDistributionPackageVariantResponseToJSONTyped(json, false);
}

export function AlternativeDistributionPackageVariantResponseToJSONTyped(value?: AlternativeDistributionPackageVariantResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AlternativeDistributionPackageVariantToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

