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
import type { AppStoreVersionExperimentV2 } from './AppStoreVersionExperimentV2';
import {
    AppStoreVersionExperimentV2FromJSON,
    AppStoreVersionExperimentV2FromJSONTyped,
    AppStoreVersionExperimentV2ToJSON,
    AppStoreVersionExperimentV2ToJSONTyped,
} from './AppStoreVersionExperimentV2';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
import type { AppStoreVersionExperimentsV2ResponseIncludedInner } from './AppStoreVersionExperimentsV2ResponseIncludedInner';
import {
    AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSON,
    AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSONTyped,
    AppStoreVersionExperimentsV2ResponseIncludedInnerToJSON,
    AppStoreVersionExperimentsV2ResponseIncludedInnerToJSONTyped,
} from './AppStoreVersionExperimentsV2ResponseIncludedInner';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentV2Response
 */
export interface AppStoreVersionExperimentV2Response {
    /**
     * 
     * @type {AppStoreVersionExperimentV2}
     * @memberof AppStoreVersionExperimentV2Response
     */
    data: AppStoreVersionExperimentV2;
    /**
     * 
     * @type {Array<AppStoreVersionExperimentsV2ResponseIncludedInner>}
     * @memberof AppStoreVersionExperimentV2Response
     */
    included?: Array<AppStoreVersionExperimentsV2ResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionExperimentV2Response
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentV2Response interface.
 */
export function instanceOfAppStoreVersionExperimentV2Response(value: object): value is AppStoreVersionExperimentV2Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentV2ResponseFromJSON(json: any): AppStoreVersionExperimentV2Response {
    return AppStoreVersionExperimentV2ResponseFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionExperimentV2FromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionExperimentV2ResponseToJSON(json: any): AppStoreVersionExperimentV2Response {
    return AppStoreVersionExperimentV2ResponseToJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2ResponseToJSONTyped(value?: AppStoreVersionExperimentV2Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionExperimentV2ToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppStoreVersionExperimentsV2ResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

