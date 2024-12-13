
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
import type { AppClipDefaultExperienceLocalizationsResponseIncludedInner } from './AppClipDefaultExperienceLocalizationsResponseIncludedInner';
import {
    AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSON,
    AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSONTyped,
    AppClipDefaultExperienceLocalizationsResponseIncludedInnerToJSON,
    AppClipDefaultExperienceLocalizationsResponseIncludedInnerToJSONTyped,
} from './AppClipDefaultExperienceLocalizationsResponseIncludedInner';
import type { AppClipDefaultExperienceLocalization } from './AppClipDefaultExperienceLocalization';
import {
    AppClipDefaultExperienceLocalizationFromJSON,
    AppClipDefaultExperienceLocalizationFromJSONTyped,
    AppClipDefaultExperienceLocalizationToJSON,
    AppClipDefaultExperienceLocalizationToJSONTyped,
} from './AppClipDefaultExperienceLocalization';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationsResponse
 */
export interface AppClipDefaultExperienceLocalizationsResponse {
    /**
     * 
     * @type {Array<AppClipDefaultExperienceLocalization>}
     * @memberof AppClipDefaultExperienceLocalizationsResponse
     */
    data: Array<AppClipDefaultExperienceLocalization>;
    /**
     * 
     * @type {Array<AppClipDefaultExperienceLocalizationsResponseIncludedInner>}
     * @memberof AppClipDefaultExperienceLocalizationsResponse
     */
    included?: Array<AppClipDefaultExperienceLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppClipDefaultExperienceLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppClipDefaultExperienceLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationsResponse interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationsResponse(value: object): value is AppClipDefaultExperienceLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppClipDefaultExperienceLocalizationsResponseFromJSON(json: any): AppClipDefaultExperienceLocalizationsResponse {
    return AppClipDefaultExperienceLocalizationsResponseFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppClipDefaultExperienceLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppClipDefaultExperienceLocalizationsResponseToJSON(json: any): AppClipDefaultExperienceLocalizationsResponse {
    return AppClipDefaultExperienceLocalizationsResponseToJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationsResponseToJSONTyped(value?: AppClipDefaultExperienceLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppClipDefaultExperienceLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppClipDefaultExperienceLocalizationsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
