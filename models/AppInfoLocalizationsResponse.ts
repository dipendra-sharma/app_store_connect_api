
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
import type { AppInfoLocalization } from './AppInfoLocalization';
import {
    AppInfoLocalizationFromJSON,
    AppInfoLocalizationFromJSONTyped,
    AppInfoLocalizationToJSON,
    AppInfoLocalizationToJSONTyped,
} from './AppInfoLocalization';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
import type { AppInfo } from './AppInfo';
import {
    AppInfoFromJSON,
    AppInfoFromJSONTyped,
    AppInfoToJSON,
    AppInfoToJSONTyped,
} from './AppInfo';

/**
 * 
 * @export
 * @interface AppInfoLocalizationsResponse
 */
export interface AppInfoLocalizationsResponse {
    /**
     * 
     * @type {Array<AppInfoLocalization>}
     * @memberof AppInfoLocalizationsResponse
     */
    data: Array<AppInfoLocalization>;
    /**
     * 
     * @type {Array<AppInfo>}
     * @memberof AppInfoLocalizationsResponse
     */
    included?: Array<AppInfo>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppInfoLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppInfoLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppInfoLocalizationsResponse interface.
 */
export function instanceOfAppInfoLocalizationsResponse(value: object): value is AppInfoLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppInfoLocalizationsResponseFromJSON(json: any): AppInfoLocalizationsResponse {
    return AppInfoLocalizationsResponseFromJSONTyped(json, false);
}

export function AppInfoLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppInfoLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppInfoFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppInfoLocalizationsResponseToJSON(json: any): AppInfoLocalizationsResponse {
    return AppInfoLocalizationsResponseToJSONTyped(json, false);
}

export function AppInfoLocalizationsResponseToJSONTyped(value?: AppInfoLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppInfoLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppInfoToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

