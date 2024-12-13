
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
 * @interface AppClipDefaultExperiencesResponse
 */
export interface AppClipDefaultExperiencesResponse {
    /**
     * 
     * @type {Array<AppClipDefaultExperience>}
     * @memberof AppClipDefaultExperiencesResponse
     */
    data: Array<AppClipDefaultExperience>;
    /**
     * 
     * @type {Array<AppClipDefaultExperiencesResponseIncludedInner>}
     * @memberof AppClipDefaultExperiencesResponse
     */
    included?: Array<AppClipDefaultExperiencesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppClipDefaultExperiencesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppClipDefaultExperiencesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppClipDefaultExperiencesResponse interface.
 */
export function instanceOfAppClipDefaultExperiencesResponse(value: object): value is AppClipDefaultExperiencesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppClipDefaultExperiencesResponseFromJSON(json: any): AppClipDefaultExperiencesResponse {
    return AppClipDefaultExperiencesResponseFromJSONTyped(json, false);
}

export function AppClipDefaultExperiencesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperiencesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppClipDefaultExperienceFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppClipDefaultExperiencesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppClipDefaultExperiencesResponseToJSON(json: any): AppClipDefaultExperiencesResponse {
    return AppClipDefaultExperiencesResponseToJSONTyped(json, false);
}

export function AppClipDefaultExperiencesResponseToJSONTyped(value?: AppClipDefaultExperiencesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppClipDefaultExperienceToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppClipDefaultExperiencesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
