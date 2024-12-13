
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
import type { AppCustomProductPageLocalization } from './AppCustomProductPageLocalization';
import {
    AppCustomProductPageLocalizationFromJSON,
    AppCustomProductPageLocalizationFromJSONTyped,
    AppCustomProductPageLocalizationToJSON,
    AppCustomProductPageLocalizationToJSONTyped,
} from './AppCustomProductPageLocalization';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
import type { AppCustomProductPageLocalizationsResponseIncludedInner } from './AppCustomProductPageLocalizationsResponseIncludedInner';
import {
    AppCustomProductPageLocalizationsResponseIncludedInnerFromJSON,
    AppCustomProductPageLocalizationsResponseIncludedInnerFromJSONTyped,
    AppCustomProductPageLocalizationsResponseIncludedInnerToJSON,
    AppCustomProductPageLocalizationsResponseIncludedInnerToJSONTyped,
} from './AppCustomProductPageLocalizationsResponseIncludedInner';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationsResponse
 */
export interface AppCustomProductPageLocalizationsResponse {
    /**
     * 
     * @type {Array<AppCustomProductPageLocalization>}
     * @memberof AppCustomProductPageLocalizationsResponse
     */
    data: Array<AppCustomProductPageLocalization>;
    /**
     * 
     * @type {Array<AppCustomProductPageLocalizationsResponseIncludedInner>}
     * @memberof AppCustomProductPageLocalizationsResponse
     */
    included?: Array<AppCustomProductPageLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppCustomProductPageLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCustomProductPageLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationsResponse interface.
 */
export function instanceOfAppCustomProductPageLocalizationsResponse(value: object): value is AppCustomProductPageLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppCustomProductPageLocalizationsResponseFromJSON(json: any): AppCustomProductPageLocalizationsResponse {
    return AppCustomProductPageLocalizationsResponseFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppCustomProductPageLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPageLocalizationsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppCustomProductPageLocalizationsResponseToJSON(json: any): AppCustomProductPageLocalizationsResponse {
    return AppCustomProductPageLocalizationsResponseToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationsResponseToJSONTyped(value?: AppCustomProductPageLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppCustomProductPageLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppCustomProductPageLocalizationsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

