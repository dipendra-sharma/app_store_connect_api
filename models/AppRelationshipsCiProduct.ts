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
import type { AppRelationshipsCiProductData } from './AppRelationshipsCiProductData';
import {
    AppRelationshipsCiProductDataFromJSON,
    AppRelationshipsCiProductDataFromJSONTyped,
    AppRelationshipsCiProductDataToJSON,
    AppRelationshipsCiProductDataToJSONTyped,
} from './AppRelationshipsCiProductData';
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
 * @interface AppRelationshipsCiProduct
 */
export interface AppRelationshipsCiProduct {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsCiProduct
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppRelationshipsCiProductData}
     * @memberof AppRelationshipsCiProduct
     */
    data?: AppRelationshipsCiProductData;
}

/**
 * Check if a given object implements the AppRelationshipsCiProduct interface.
 */
export function instanceOfAppRelationshipsCiProduct(value: object): value is AppRelationshipsCiProduct {
    return true;
}

export function AppRelationshipsCiProductFromJSON(json: any): AppRelationshipsCiProduct {
    return AppRelationshipsCiProductFromJSONTyped(json, false);
}

export function AppRelationshipsCiProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsCiProduct {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : AppRelationshipsCiProductDataFromJSON(json['data']),
    };
}

export function AppRelationshipsCiProductToJSON(json: any): AppRelationshipsCiProduct {
    return AppRelationshipsCiProductToJSONTyped(json, false);
}

export function AppRelationshipsCiProductToJSONTyped(value?: AppRelationshipsCiProduct | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': AppRelationshipsCiProductDataToJSON(value['data']),
    };
}

