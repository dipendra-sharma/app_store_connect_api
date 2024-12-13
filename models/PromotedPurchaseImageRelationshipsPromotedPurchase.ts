
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
import type { AppRelationshipsPromotedPurchasesDataInner } from './AppRelationshipsPromotedPurchasesDataInner';
import {
    AppRelationshipsPromotedPurchasesDataInnerFromJSON,
    AppRelationshipsPromotedPurchasesDataInnerFromJSONTyped,
    AppRelationshipsPromotedPurchasesDataInnerToJSON,
    AppRelationshipsPromotedPurchasesDataInnerToJSONTyped,
} from './AppRelationshipsPromotedPurchasesDataInner';

/**
 * 
 * @export
 * @interface PromotedPurchaseImageRelationshipsPromotedPurchase
 */
export interface PromotedPurchaseImageRelationshipsPromotedPurchase {
    /**
     * 
     * @type {AppRelationshipsPromotedPurchasesDataInner}
     * @memberof PromotedPurchaseImageRelationshipsPromotedPurchase
     */
    data?: AppRelationshipsPromotedPurchasesDataInner;
}

/**
 * Check if a given object implements the PromotedPurchaseImageRelationshipsPromotedPurchase interface.
 */
export function instanceOfPromotedPurchaseImageRelationshipsPromotedPurchase(value: object): value is PromotedPurchaseImageRelationshipsPromotedPurchase {
    return true;
}

export function PromotedPurchaseImageRelationshipsPromotedPurchaseFromJSON(json: any): PromotedPurchaseImageRelationshipsPromotedPurchase {
    return PromotedPurchaseImageRelationshipsPromotedPurchaseFromJSONTyped(json, false);
}

export function PromotedPurchaseImageRelationshipsPromotedPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageRelationshipsPromotedPurchase {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppRelationshipsPromotedPurchasesDataInnerFromJSON(json['data']),
    };
}

export function PromotedPurchaseImageRelationshipsPromotedPurchaseToJSON(json: any): PromotedPurchaseImageRelationshipsPromotedPurchase {
    return PromotedPurchaseImageRelationshipsPromotedPurchaseToJSONTyped(json, false);
}

export function PromotedPurchaseImageRelationshipsPromotedPurchaseToJSONTyped(value?: PromotedPurchaseImageRelationshipsPromotedPurchase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppRelationshipsPromotedPurchasesDataInnerToJSON(value['data']),
    };
}

