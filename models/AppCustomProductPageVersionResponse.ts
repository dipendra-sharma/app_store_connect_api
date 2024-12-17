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
import type { AppCustomProductPageVersion } from './AppCustomProductPageVersion';
import {
    AppCustomProductPageVersionFromJSON,
    AppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageVersionToJSON,
    AppCustomProductPageVersionToJSONTyped,
} from './AppCustomProductPageVersion';
import type { AppCustomProductPageVersionsResponseIncludedInner } from './AppCustomProductPageVersionsResponseIncludedInner';
import {
    AppCustomProductPageVersionsResponseIncludedInnerFromJSON,
    AppCustomProductPageVersionsResponseIncludedInnerFromJSONTyped,
    AppCustomProductPageVersionsResponseIncludedInnerToJSON,
    AppCustomProductPageVersionsResponseIncludedInnerToJSONTyped,
} from './AppCustomProductPageVersionsResponseIncludedInner';
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
 * @interface AppCustomProductPageVersionResponse
 */
export interface AppCustomProductPageVersionResponse {
    /**
     * 
     * @type {AppCustomProductPageVersion}
     * @memberof AppCustomProductPageVersionResponse
     */
    data: AppCustomProductPageVersion;
    /**
     * 
     * @type {Array<AppCustomProductPageVersionsResponseIncludedInner>}
     * @memberof AppCustomProductPageVersionResponse
     */
    included?: Array<AppCustomProductPageVersionsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppCustomProductPageVersionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionResponse interface.
 */
export function instanceOfAppCustomProductPageVersionResponse(value: object): value is AppCustomProductPageVersionResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppCustomProductPageVersionResponseFromJSON(json: any): AppCustomProductPageVersionResponse {
    return AppCustomProductPageVersionResponseFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageVersionFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPageVersionsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppCustomProductPageVersionResponseToJSON(json: any): AppCustomProductPageVersionResponse {
    return AppCustomProductPageVersionResponseToJSONTyped(json, false);
}

export function AppCustomProductPageVersionResponseToJSONTyped(value?: AppCustomProductPageVersionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageVersionToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppCustomProductPageVersionsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

