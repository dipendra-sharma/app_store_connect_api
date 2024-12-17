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
import type { BuildsResponseIncludedInner } from './BuildsResponseIncludedInner';
import {
    BuildsResponseIncludedInnerFromJSON,
    BuildsResponseIncludedInnerFromJSONTyped,
    BuildsResponseIncludedInnerToJSON,
    BuildsResponseIncludedInnerToJSONTyped,
} from './BuildsResponseIncludedInner';
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
 * @interface BuildResponse
 */
export interface BuildResponse {
    /**
     * 
     * @type {Build}
     * @memberof BuildResponse
     */
    data: Build;
    /**
     * 
     * @type {Array<BuildsResponseIncludedInner>}
     * @memberof BuildResponse
     */
    included?: Array<BuildsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BuildResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BuildResponse interface.
 */
export function instanceOfBuildResponse(value: object): value is BuildResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BuildResponseFromJSON(json: any): BuildResponse {
    return BuildResponseFromJSONTyped(json, false);
}

export function BuildResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BuildFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(BuildsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BuildResponseToJSON(json: any): BuildResponse {
    return BuildResponseToJSONTyped(json, false);
}

export function BuildResponseToJSONTyped(value?: BuildResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BuildToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(BuildsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

