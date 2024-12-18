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
import type { AppCustomProductPage } from './AppCustomProductPage';
import {
    AppCustomProductPageFromJSON,
    AppCustomProductPageFromJSONTyped,
    AppCustomProductPageToJSON,
    AppCustomProductPageToJSONTyped,
} from './AppCustomProductPage';
import type { AppCustomProductPagesResponseIncludedInner } from './AppCustomProductPagesResponseIncludedInner';
import {
    AppCustomProductPagesResponseIncludedInnerFromJSON,
    AppCustomProductPagesResponseIncludedInnerFromJSONTyped,
    AppCustomProductPagesResponseIncludedInnerToJSON,
    AppCustomProductPagesResponseIncludedInnerToJSONTyped,
} from './AppCustomProductPagesResponseIncludedInner';
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
 * @interface AppCustomProductPageResponse
 */
export interface AppCustomProductPageResponse {
    /**
     * 
     * @type {AppCustomProductPage}
     * @memberof AppCustomProductPageResponse
     */
    data: AppCustomProductPage;
    /**
     * 
     * @type {Array<AppCustomProductPagesResponseIncludedInner>}
     * @memberof AppCustomProductPageResponse
     */
    included?: Array<AppCustomProductPagesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppCustomProductPageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppCustomProductPageResponse interface.
 */
export function instanceOfAppCustomProductPageResponse(value: object): value is AppCustomProductPageResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppCustomProductPageResponseFromJSON(json: any): AppCustomProductPageResponse {
    return AppCustomProductPageResponseFromJSONTyped(json, false);
}

export function AppCustomProductPageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPagesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppCustomProductPageResponseToJSON(json: any): AppCustomProductPageResponse {
    return AppCustomProductPageResponseToJSONTyped(json, false);
}

export function AppCustomProductPageResponseToJSONTyped(value?: AppCustomProductPageResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppCustomProductPagesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

