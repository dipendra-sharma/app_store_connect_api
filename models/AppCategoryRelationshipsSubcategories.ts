
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
import type { AppCategoryRelationshipsSubcategoriesDataInner } from './AppCategoryRelationshipsSubcategoriesDataInner';
import {
    AppCategoryRelationshipsSubcategoriesDataInnerFromJSON,
    AppCategoryRelationshipsSubcategoriesDataInnerFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesDataInnerToJSON,
    AppCategoryRelationshipsSubcategoriesDataInnerToJSONTyped,
} from './AppCategoryRelationshipsSubcategoriesDataInner';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppCategoryRelationshipsSubcategories
 */
export interface AppCategoryRelationshipsSubcategories {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppCategoryRelationshipsSubcategories
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCategoryRelationshipsSubcategories
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppCategoryRelationshipsSubcategoriesDataInner>}
     * @memberof AppCategoryRelationshipsSubcategories
     */
    data?: Array<AppCategoryRelationshipsSubcategoriesDataInner>;
}

/**
 * Check if a given object implements the AppCategoryRelationshipsSubcategories interface.
 */
export function instanceOfAppCategoryRelationshipsSubcategories(value: object): value is AppCategoryRelationshipsSubcategories {
    return true;
}

export function AppCategoryRelationshipsSubcategoriesFromJSON(json: any): AppCategoryRelationshipsSubcategories {
    return AppCategoryRelationshipsSubcategoriesFromJSONTyped(json, false);
}

export function AppCategoryRelationshipsSubcategoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryRelationshipsSubcategories {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppCategoryRelationshipsSubcategoriesDataInnerFromJSON)),
    };
}

export function AppCategoryRelationshipsSubcategoriesToJSON(json: any): AppCategoryRelationshipsSubcategories {
    return AppCategoryRelationshipsSubcategoriesToJSONTyped(json, false);
}

export function AppCategoryRelationshipsSubcategoriesToJSONTyped(value?: AppCategoryRelationshipsSubcategories | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppCategoryRelationshipsSubcategoriesDataInnerToJSON)),
    };
}

