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

/**
 * 
 * @export
 * @interface CiBuildRunRelationshipsProduct
 */
export interface CiBuildRunRelationshipsProduct {
    /**
     * 
     * @type {AppRelationshipsCiProductData}
     * @memberof CiBuildRunRelationshipsProduct
     */
    data?: AppRelationshipsCiProductData;
}

/**
 * Check if a given object implements the CiBuildRunRelationshipsProduct interface.
 */
export function instanceOfCiBuildRunRelationshipsProduct(value: object): value is CiBuildRunRelationshipsProduct {
    return true;
}

export function CiBuildRunRelationshipsProductFromJSON(json: any): CiBuildRunRelationshipsProduct {
    return CiBuildRunRelationshipsProductFromJSONTyped(json, false);
}

export function CiBuildRunRelationshipsProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsProduct {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppRelationshipsCiProductDataFromJSON(json['data']),
    };
}

export function CiBuildRunRelationshipsProductToJSON(json: any): CiBuildRunRelationshipsProduct {
    return CiBuildRunRelationshipsProductToJSONTyped(json, false);
}

export function CiBuildRunRelationshipsProductToJSONTyped(value?: CiBuildRunRelationshipsProduct | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppRelationshipsCiProductDataToJSON(value['data']),
    };
}

