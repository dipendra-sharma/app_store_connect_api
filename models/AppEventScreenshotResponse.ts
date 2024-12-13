
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
 * @interface AppEventScreenshotResponse
 */
export interface AppEventScreenshotResponse {
    /**
     * 
     * @type {AppEventScreenshot}
     * @memberof AppEventScreenshotResponse
     */
    data: AppEventScreenshot;
    /**
     * 
     * @type {Array<AppEventLocalization>}
     * @memberof AppEventScreenshotResponse
     */
    included?: Array<AppEventLocalization>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppEventScreenshotResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppEventScreenshotResponse interface.
 */
export function instanceOfAppEventScreenshotResponse(value: object): value is AppEventScreenshotResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppEventScreenshotResponseFromJSON(json: any): AppEventScreenshotResponse {
    return AppEventScreenshotResponseFromJSONTyped(json, false);
}

export function AppEventScreenshotResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppEventScreenshotFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppEventLocalizationFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppEventScreenshotResponseToJSON(json: any): AppEventScreenshotResponse {
    return AppEventScreenshotResponseToJSONTyped(json, false);
}

export function AppEventScreenshotResponseToJSONTyped(value?: AppEventScreenshotResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppEventScreenshotToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppEventLocalizationToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

