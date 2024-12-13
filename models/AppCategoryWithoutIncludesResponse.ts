
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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
import type { AppCategory } from './AppCategory';
import {
    AppCategoryFromJSON,
    AppCategoryFromJSONTyped,
    AppCategoryToJSON,
    AppCategoryToJSONTyped,
} from './AppCategory';

/**
 * 
 * @export
 * @interface AppCategoryWithoutIncludesResponse
 */
export interface AppCategoryWithoutIncludesResponse {
    /**
     * 
     * @type {AppCategory}
     * @memberof AppCategoryWithoutIncludesResponse
     */
    data: AppCategory;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppCategoryWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppCategoryWithoutIncludesResponse interface.
 */
export function instanceOfAppCategoryWithoutIncludesResponse(value: object): value is AppCategoryWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppCategoryWithoutIncludesResponseFromJSON(json: any): AppCategoryWithoutIncludesResponse {
    return AppCategoryWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AppCategoryWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCategoryFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppCategoryWithoutIncludesResponseToJSON(json: any): AppCategoryWithoutIncludesResponse {
    return AppCategoryWithoutIncludesResponseToJSONTyped(json, false);
}

export function AppCategoryWithoutIncludesResponseToJSONTyped(value?: AppCategoryWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCategoryToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

