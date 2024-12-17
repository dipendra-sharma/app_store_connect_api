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
 * @interface AppClipDefaultExperienceLocalizationResponse
 */
export interface AppClipDefaultExperienceLocalizationResponse {
    /**
     * 
     * @type {AppClipDefaultExperienceLocalization}
     * @memberof AppClipDefaultExperienceLocalizationResponse
     */
    data: AppClipDefaultExperienceLocalization;
    /**
     * 
     * @type {Array<AppClipDefaultExperienceLocalizationsResponseIncludedInner>}
     * @memberof AppClipDefaultExperienceLocalizationResponse
     */
    included?: Array<AppClipDefaultExperienceLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppClipDefaultExperienceLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationResponse interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationResponse(value: object): value is AppClipDefaultExperienceLocalizationResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppClipDefaultExperienceLocalizationResponseFromJSON(json: any): AppClipDefaultExperienceLocalizationResponse {
    return AppClipDefaultExperienceLocalizationResponseFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppClipDefaultExperienceLocalizationFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppClipDefaultExperienceLocalizationResponseToJSON(json: any): AppClipDefaultExperienceLocalizationResponse {
    return AppClipDefaultExperienceLocalizationResponseToJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationResponseToJSONTyped(value?: AppClipDefaultExperienceLocalizationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipDefaultExperienceLocalizationToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppClipDefaultExperienceLocalizationsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

