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
import type { AppInfoLocalization } from './AppInfoLocalization';
import {
    AppInfoLocalizationFromJSON,
    AppInfoLocalizationFromJSONTyped,
    AppInfoLocalizationToJSON,
    AppInfoLocalizationToJSONTyped,
} from './AppInfoLocalization';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
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
 * @interface AppInfoLocalizationResponse
 */
export interface AppInfoLocalizationResponse {
    /**
     * 
     * @type {AppInfoLocalization}
     * @memberof AppInfoLocalizationResponse
     */
    data: AppInfoLocalization;
    /**
     * 
     * @type {Array<AppInfo>}
     * @memberof AppInfoLocalizationResponse
     */
    included?: Array<AppInfo>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppInfoLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppInfoLocalizationResponse interface.
 */
export function instanceOfAppInfoLocalizationResponse(value: object): value is AppInfoLocalizationResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppInfoLocalizationResponseFromJSON(json: any): AppInfoLocalizationResponse {
    return AppInfoLocalizationResponseFromJSONTyped(json, false);
}

export function AppInfoLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppInfoLocalizationFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppInfoFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppInfoLocalizationResponseToJSON(json: any): AppInfoLocalizationResponse {
    return AppInfoLocalizationResponseToJSONTyped(json, false);
}

export function AppInfoLocalizationResponseToJSONTyped(value?: AppInfoLocalizationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppInfoLocalizationToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppInfoToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

