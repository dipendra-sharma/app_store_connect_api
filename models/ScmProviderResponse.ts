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
import type { ScmProvider } from './ScmProvider';
import {
    ScmProviderFromJSON,
    ScmProviderFromJSONTyped,
    ScmProviderToJSON,
    ScmProviderToJSONTyped,
} from './ScmProvider';
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
 * @interface ScmProviderResponse
 */
export interface ScmProviderResponse {
    /**
     * 
     * @type {ScmProvider}
     * @memberof ScmProviderResponse
     */
    data: ScmProvider;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof ScmProviderResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ScmProviderResponse interface.
 */
export function instanceOfScmProviderResponse(value: object): value is ScmProviderResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function ScmProviderResponseFromJSON(json: any): ScmProviderResponse {
    return ScmProviderResponseFromJSONTyped(json, false);
}

export function ScmProviderResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmProviderResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ScmProviderFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function ScmProviderResponseToJSON(json: any): ScmProviderResponse {
    return ScmProviderResponseToJSONTyped(json, false);
}

export function ScmProviderResponseToJSONTyped(value?: ScmProviderResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ScmProviderToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

