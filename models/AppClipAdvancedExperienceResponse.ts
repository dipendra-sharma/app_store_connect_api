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
import type { AppClipAdvancedExperiencesResponseIncludedInner } from './AppClipAdvancedExperiencesResponseIncludedInner';
import {
    AppClipAdvancedExperiencesResponseIncludedInnerFromJSON,
    AppClipAdvancedExperiencesResponseIncludedInnerFromJSONTyped,
    AppClipAdvancedExperiencesResponseIncludedInnerToJSON,
    AppClipAdvancedExperiencesResponseIncludedInnerToJSONTyped,
} from './AppClipAdvancedExperiencesResponseIncludedInner';
import type { AppClipAdvancedExperience } from './AppClipAdvancedExperience';
import {
    AppClipAdvancedExperienceFromJSON,
    AppClipAdvancedExperienceFromJSONTyped,
    AppClipAdvancedExperienceToJSON,
    AppClipAdvancedExperienceToJSONTyped,
} from './AppClipAdvancedExperience';
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
 * @interface AppClipAdvancedExperienceResponse
 */
export interface AppClipAdvancedExperienceResponse {
    /**
     * 
     * @type {AppClipAdvancedExperience}
     * @memberof AppClipAdvancedExperienceResponse
     */
    data: AppClipAdvancedExperience;
    /**
     * 
     * @type {Array<AppClipAdvancedExperiencesResponseIncludedInner>}
     * @memberof AppClipAdvancedExperienceResponse
     */
    included?: Array<AppClipAdvancedExperiencesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppClipAdvancedExperienceResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceResponse interface.
 */
export function instanceOfAppClipAdvancedExperienceResponse(value: object): value is AppClipAdvancedExperienceResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceResponseFromJSON(json: any): AppClipAdvancedExperienceResponse {
    return AppClipAdvancedExperienceResponseFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppClipAdvancedExperienceFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppClipAdvancedExperiencesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppClipAdvancedExperienceResponseToJSON(json: any): AppClipAdvancedExperienceResponse {
    return AppClipAdvancedExperienceResponseToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceResponseToJSONTyped(value?: AppClipAdvancedExperienceResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipAdvancedExperienceToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppClipAdvancedExperiencesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

