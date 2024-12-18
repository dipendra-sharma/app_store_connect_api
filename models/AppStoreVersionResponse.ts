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
import type { AppStoreVersionsResponseIncludedInner } from './AppStoreVersionsResponseIncludedInner';
import {
    AppStoreVersionsResponseIncludedInnerFromJSON,
    AppStoreVersionsResponseIncludedInnerFromJSONTyped,
    AppStoreVersionsResponseIncludedInnerToJSON,
    AppStoreVersionsResponseIncludedInnerToJSONTyped,
} from './AppStoreVersionsResponseIncludedInner';
import type { AppStoreVersion } from './AppStoreVersion';
import {
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
    AppStoreVersionToJSONTyped,
} from './AppStoreVersion';
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
 * @interface AppStoreVersionResponse
 */
export interface AppStoreVersionResponse {
    /**
     * 
     * @type {AppStoreVersion}
     * @memberof AppStoreVersionResponse
     */
    data: AppStoreVersion;
    /**
     * 
     * @type {Array<AppStoreVersionsResponseIncludedInner>}
     * @memberof AppStoreVersionResponse
     */
    included?: Array<AppStoreVersionsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionResponse interface.
 */
export function instanceOfAppStoreVersionResponse(value: object): value is AppStoreVersionResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppStoreVersionResponseFromJSON(json: any): AppStoreVersionResponse {
    return AppStoreVersionResponseFromJSONTyped(json, false);
}

export function AppStoreVersionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionResponseToJSON(json: any): AppStoreVersionResponse {
    return AppStoreVersionResponseToJSONTyped(json, false);
}

export function AppStoreVersionResponseToJSONTyped(value?: AppStoreVersionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppStoreVersionsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

