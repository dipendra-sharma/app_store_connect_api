
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
import type { AppStoreVersion } from './AppStoreVersion';
import {
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
    AppStoreVersionToJSONTyped,
} from './AppStoreVersion';
import type { AppStoreVersionSubmission } from './AppStoreVersionSubmission';
import {
    AppStoreVersionSubmissionFromJSON,
    AppStoreVersionSubmissionFromJSONTyped,
    AppStoreVersionSubmissionToJSON,
    AppStoreVersionSubmissionToJSONTyped,
} from './AppStoreVersionSubmission';
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
 * @interface AppStoreVersionSubmissionResponse
 */
export interface AppStoreVersionSubmissionResponse {
    /**
     * 
     * @type {AppStoreVersionSubmission}
     * @memberof AppStoreVersionSubmissionResponse
     * @deprecated
     */
    data: AppStoreVersionSubmission;
    /**
     * 
     * @type {Array<AppStoreVersion>}
     * @memberof AppStoreVersionSubmissionResponse
     */
    included?: Array<AppStoreVersion>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionSubmissionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionSubmissionResponse interface.
 */
export function instanceOfAppStoreVersionSubmissionResponse(value: object): value is AppStoreVersionSubmissionResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppStoreVersionSubmissionResponseFromJSON(json: any): AppStoreVersionSubmissionResponse {
    return AppStoreVersionSubmissionResponseFromJSONTyped(json, false);
}

export function AppStoreVersionSubmissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionSubmissionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionSubmissionFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionSubmissionResponseToJSON(json: any): AppStoreVersionSubmissionResponse {
    return AppStoreVersionSubmissionResponseToJSONTyped(json, false);
}

export function AppStoreVersionSubmissionResponseToJSONTyped(value?: AppStoreVersionSubmissionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionSubmissionToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppStoreVersionToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}
