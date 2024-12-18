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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
import type { AppEventVideoClip } from './AppEventVideoClip';
import {
    AppEventVideoClipFromJSON,
    AppEventVideoClipFromJSONTyped,
    AppEventVideoClipToJSON,
    AppEventVideoClipToJSONTyped,
} from './AppEventVideoClip';

/**
 * 
 * @export
 * @interface AppEventVideoClipResponse
 */
export interface AppEventVideoClipResponse {
    /**
     * 
     * @type {AppEventVideoClip}
     * @memberof AppEventVideoClipResponse
     */
    data: AppEventVideoClip;
    /**
     * 
     * @type {Array<AppEventLocalization>}
     * @memberof AppEventVideoClipResponse
     */
    included?: Array<AppEventLocalization>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppEventVideoClipResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppEventVideoClipResponse interface.
 */
export function instanceOfAppEventVideoClipResponse(value: object): value is AppEventVideoClipResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppEventVideoClipResponseFromJSON(json: any): AppEventVideoClipResponse {
    return AppEventVideoClipResponseFromJSONTyped(json, false);
}

export function AppEventVideoClipResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppEventVideoClipFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppEventLocalizationFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppEventVideoClipResponseToJSON(json: any): AppEventVideoClipResponse {
    return AppEventVideoClipResponseToJSONTyped(json, false);
}

export function AppEventVideoClipResponseToJSONTyped(value?: AppEventVideoClipResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppEventVideoClipToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppEventLocalizationToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

