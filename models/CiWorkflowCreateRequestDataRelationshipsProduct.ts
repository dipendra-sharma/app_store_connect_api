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
 * @interface CiWorkflowCreateRequestDataRelationshipsProduct
 */
export interface CiWorkflowCreateRequestDataRelationshipsProduct {
    /**
     * 
     * @type {AppRelationshipsCiProductData}
     * @memberof CiWorkflowCreateRequestDataRelationshipsProduct
     */
    data: AppRelationshipsCiProductData;
}

/**
 * Check if a given object implements the CiWorkflowCreateRequestDataRelationshipsProduct interface.
 */
export function instanceOfCiWorkflowCreateRequestDataRelationshipsProduct(value: object): value is CiWorkflowCreateRequestDataRelationshipsProduct {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CiWorkflowCreateRequestDataRelationshipsProductFromJSON(json: any): CiWorkflowCreateRequestDataRelationshipsProduct {
    return CiWorkflowCreateRequestDataRelationshipsProductFromJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataRelationshipsProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowCreateRequestDataRelationshipsProduct {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppRelationshipsCiProductDataFromJSON(json['data']),
    };
}

export function CiWorkflowCreateRequestDataRelationshipsProductToJSON(json: any): CiWorkflowCreateRequestDataRelationshipsProduct {
    return CiWorkflowCreateRequestDataRelationshipsProductToJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataRelationshipsProductToJSONTyped(value?: CiWorkflowCreateRequestDataRelationshipsProduct | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppRelationshipsCiProductDataToJSON(value['data']),
    };
}

