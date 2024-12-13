
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
/**
 * 
 * @export
 * @interface AppCategoryRelationshipsSubcategoriesDataInner
 */
export interface AppCategoryRelationshipsSubcategoriesDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppCategoryRelationshipsSubcategoriesDataInner
     */
    type: AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCategoryRelationshipsSubcategoriesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum = {
    AppCategories: 'appCategories'
} as const;
export type AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum = typeof AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum[keyof typeof AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum];


/**
 * Check if a given object implements the AppCategoryRelationshipsSubcategoriesDataInner interface.
 */
export function instanceOfAppCategoryRelationshipsSubcategoriesDataInner(value: object): value is AppCategoryRelationshipsSubcategoriesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppCategoryRelationshipsSubcategoriesDataInnerFromJSON(json: any): AppCategoryRelationshipsSubcategoriesDataInner {
    return AppCategoryRelationshipsSubcategoriesDataInnerFromJSONTyped(json, false);
}

export function AppCategoryRelationshipsSubcategoriesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryRelationshipsSubcategoriesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppCategoryRelationshipsSubcategoriesDataInnerToJSON(json: any): AppCategoryRelationshipsSubcategoriesDataInner {
    return AppCategoryRelationshipsSubcategoriesDataInnerToJSONTyped(json, false);
}

export function AppCategoryRelationshipsSubcategoriesDataInnerToJSONTyped(value?: AppCategoryRelationshipsSubcategoriesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
