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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
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
 * @interface AppCategoriesWithoutIncludesResponse
 */
export interface AppCategoriesWithoutIncludesResponse {
    /**
     * 
     * @type {Array<AppCategory>}
     * @memberof AppCategoriesWithoutIncludesResponse
     */
    data: Array<AppCategory>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppCategoriesWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCategoriesWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppCategoriesWithoutIncludesResponse interface.
 */
export function instanceOfAppCategoriesWithoutIncludesResponse(value: object): value is AppCategoriesWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppCategoriesWithoutIncludesResponseFromJSON(json: any): AppCategoriesWithoutIncludesResponse {
    return AppCategoriesWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AppCategoriesWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoriesWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppCategoryFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppCategoriesWithoutIncludesResponseToJSON(json: any): AppCategoriesWithoutIncludesResponse {
    return AppCategoriesWithoutIncludesResponseToJSONTyped(json, false);
}

export function AppCategoriesWithoutIncludesResponseToJSONTyped(value?: AppCategoriesWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppCategoryToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

