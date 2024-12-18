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
import type { AppPreviewSet } from './AppPreviewSet';
import {
    AppPreviewSetFromJSON,
    AppPreviewSetFromJSONTyped,
    AppPreviewSetToJSON,
    AppPreviewSetToJSONTyped,
} from './AppPreviewSet';
import type { AppPreview } from './AppPreview';
import {
    AppPreviewFromJSON,
    AppPreviewFromJSONTyped,
    AppPreviewToJSON,
    AppPreviewToJSONTyped,
} from './AppPreview';
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
 * @interface AppPreviewResponse
 */
export interface AppPreviewResponse {
    /**
     * 
     * @type {AppPreview}
     * @memberof AppPreviewResponse
     */
    data: AppPreview;
    /**
     * 
     * @type {Array<AppPreviewSet>}
     * @memberof AppPreviewResponse
     */
    included?: Array<AppPreviewSet>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppPreviewResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppPreviewResponse interface.
 */
export function instanceOfAppPreviewResponse(value: object): value is AppPreviewResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppPreviewResponseFromJSON(json: any): AppPreviewResponse {
    return AppPreviewResponseFromJSONTyped(json, false);
}

export function AppPreviewResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppPreviewFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppPreviewSetFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppPreviewResponseToJSON(json: any): AppPreviewResponse {
    return AppPreviewResponseToJSONTyped(json, false);
}

export function AppPreviewResponseToJSONTyped(value?: AppPreviewResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppPreviewToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppPreviewSetToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

