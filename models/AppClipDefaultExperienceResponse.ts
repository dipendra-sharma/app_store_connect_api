
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
import type { AppClipDefaultExperience } from './AppClipDefaultExperience';
import {
    AppClipDefaultExperienceFromJSON,
    AppClipDefaultExperienceFromJSONTyped,
    AppClipDefaultExperienceToJSON,
    AppClipDefaultExperienceToJSONTyped,
} from './AppClipDefaultExperience';
import type { AppClipDefaultExperiencesResponseIncludedInner } from './AppClipDefaultExperiencesResponseIncludedInner';
import {
    AppClipDefaultExperiencesResponseIncludedInnerFromJSON,
    AppClipDefaultExperiencesResponseIncludedInnerFromJSONTyped,
    AppClipDefaultExperiencesResponseIncludedInnerToJSON,
    AppClipDefaultExperiencesResponseIncludedInnerToJSONTyped,
} from './AppClipDefaultExperiencesResponseIncludedInner';
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
 * @interface AppClipDefaultExperienceResponse
 */
export interface AppClipDefaultExperienceResponse {
    /**
     * 
     * @type {AppClipDefaultExperience}
     * @memberof AppClipDefaultExperienceResponse
     */
    data: AppClipDefaultExperience;
    /**
     * 
     * @type {Array<AppClipDefaultExperiencesResponseIncludedInner>}
     * @memberof AppClipDefaultExperienceResponse
     */
    included?: Array<AppClipDefaultExperiencesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppClipDefaultExperienceResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceResponse interface.
 */
export function instanceOfAppClipDefaultExperienceResponse(value: object): value is AppClipDefaultExperienceResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppClipDefaultExperienceResponseFromJSON(json: any): AppClipDefaultExperienceResponse {
    return AppClipDefaultExperienceResponseFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppClipDefaultExperienceFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppClipDefaultExperiencesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppClipDefaultExperienceResponseToJSON(json: any): AppClipDefaultExperienceResponse {
    return AppClipDefaultExperienceResponseToJSONTyped(json, false);
}

export function AppClipDefaultExperienceResponseToJSONTyped(value?: AppClipDefaultExperienceResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppClipDefaultExperienceToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppClipDefaultExperiencesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

