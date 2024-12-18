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
import type { AppStoreVersionExperimentTreatmentLocalization } from './AppStoreVersionExperimentTreatmentLocalization';
import {
    AppStoreVersionExperimentTreatmentLocalizationFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationToJSON,
    AppStoreVersionExperimentTreatmentLocalizationToJSONTyped,
} from './AppStoreVersionExperimentTreatmentLocalization';
import type { AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner } from './AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner';
import {
    AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerToJSON,
    AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerToJSONTyped,
} from './AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner';
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
 * @interface AppStoreVersionExperimentTreatmentLocalizationsResponse
 */
export interface AppStoreVersionExperimentTreatmentLocalizationsResponse {
    /**
     * 
     * @type {Array<AppStoreVersionExperimentTreatmentLocalization>}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationsResponse
     */
    data: Array<AppStoreVersionExperimentTreatmentLocalization>;
    /**
     * 
     * @type {Array<AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner>}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationsResponse
     */
    included?: Array<AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalizationsResponse interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentLocalizationsResponse(value: object): value is AppStoreVersionExperimentTreatmentLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentTreatmentLocalizationsResponseFromJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationsResponse {
    return AppStoreVersionExperimentTreatmentLocalizationsResponseFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppStoreVersionExperimentTreatmentLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppStoreVersionExperimentTreatmentLocalizationsResponseToJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationsResponse {
    return AppStoreVersionExperimentTreatmentLocalizationsResponseToJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationsResponseToJSONTyped(value?: AppStoreVersionExperimentTreatmentLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppStoreVersionExperimentTreatmentLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

