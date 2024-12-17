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
import type { AppEventLocalization } from './AppEventLocalization';
import {
    AppEventLocalizationFromJSON,
    AppEventLocalizationFromJSONTyped,
    AppEventLocalizationToJSON,
    AppEventLocalizationToJSONTyped,
} from './AppEventLocalization';
import type { AppEventScreenshot } from './AppEventScreenshot';
import {
    AppEventScreenshotFromJSON,
    AppEventScreenshotFromJSONTyped,
    AppEventScreenshotToJSON,
    AppEventScreenshotToJSONTyped,
} from './AppEventScreenshot';
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
 * @interface AppEventScreenshotsResponse
 */
export interface AppEventScreenshotsResponse {
    /**
     * 
     * @type {Array<AppEventScreenshot>}
     * @memberof AppEventScreenshotsResponse
     */
    data: Array<AppEventScreenshot>;
    /**
     * 
     * @type {Array<AppEventLocalization>}
     * @memberof AppEventScreenshotsResponse
     */
    included?: Array<AppEventLocalization>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppEventScreenshotsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppEventScreenshotsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppEventScreenshotsResponse interface.
 */
export function instanceOfAppEventScreenshotsResponse(value: object): value is AppEventScreenshotsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppEventScreenshotsResponseFromJSON(json: any): AppEventScreenshotsResponse {
    return AppEventScreenshotsResponseFromJSONTyped(json, false);
}

export function AppEventScreenshotsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppEventScreenshotFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppEventLocalizationFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppEventScreenshotsResponseToJSON(json: any): AppEventScreenshotsResponse {
    return AppEventScreenshotsResponseToJSONTyped(json, false);
}

export function AppEventScreenshotsResponseToJSONTyped(value?: AppEventScreenshotsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppEventScreenshotToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppEventLocalizationToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

