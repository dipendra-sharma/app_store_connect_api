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
import type { AppStoreVersionExperiment } from './AppStoreVersionExperiment';
import {
    AppStoreVersionExperimentFromJSON,
    AppStoreVersionExperimentFromJSONTyped,
    AppStoreVersionExperimentToJSON,
    AppStoreVersionExperimentToJSONTyped,
} from './AppStoreVersionExperiment';
import type { AppStoreVersionExperimentsResponseIncludedInner } from './AppStoreVersionExperimentsResponseIncludedInner';
import {
    AppStoreVersionExperimentsResponseIncludedInnerFromJSON,
    AppStoreVersionExperimentsResponseIncludedInnerFromJSONTyped,
    AppStoreVersionExperimentsResponseIncludedInnerToJSON,
    AppStoreVersionExperimentsResponseIncludedInnerToJSONTyped,
} from './AppStoreVersionExperimentsResponseIncludedInner';
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
 * @interface AppStoreVersionExperimentResponse
 */
export interface AppStoreVersionExperimentResponse {
    /**
     * 
     * @type {AppStoreVersionExperiment}
     * @memberof AppStoreVersionExperimentResponse
     * @deprecated
     */
    data: AppStoreVersionExperiment;
    /**
     * 
     * @type {Array<AppStoreVersionExperimentsResponseIncludedInner>}
     * @memberof AppStoreVersionExperimentResponse
     */
    included?: Array<AppStoreVersionExperimentsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionExperimentResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentResponse interface.
 */
export function instanceOfAppStoreVersionExperimentResponse(value: object): value is AppStoreVersionExperimentResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentResponseFromJSON(json: any): AppStoreVersionExperimentResponse {
    return AppStoreVersionExperimentResponseFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionExperimentFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionExperimentsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionExperimentResponseToJSON(json: any): AppStoreVersionExperimentResponse {
    return AppStoreVersionExperimentResponseToJSONTyped(json, false);
}

export function AppStoreVersionExperimentResponseToJSONTyped(value?: AppStoreVersionExperimentResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionExperimentToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppStoreVersionExperimentsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

