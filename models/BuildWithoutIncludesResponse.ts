
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
import type { Build } from './Build';
import {
    BuildFromJSON,
    BuildFromJSONTyped,
    BuildToJSON,
    BuildToJSONTyped,
} from './Build';
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
 * @interface BuildWithoutIncludesResponse
 */
export interface BuildWithoutIncludesResponse {
    /**
     * 
     * @type {Build}
     * @memberof BuildWithoutIncludesResponse
     */
    data: Build;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BuildWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BuildWithoutIncludesResponse interface.
 */
export function instanceOfBuildWithoutIncludesResponse(value: object): value is BuildWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BuildWithoutIncludesResponseFromJSON(json: any): BuildWithoutIncludesResponse {
    return BuildWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BuildWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BuildFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BuildWithoutIncludesResponseToJSON(json: any): BuildWithoutIncludesResponse {
    return BuildWithoutIncludesResponseToJSONTyped(json, false);
}

export function BuildWithoutIncludesResponseToJSONTyped(value?: BuildWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BuildToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}
