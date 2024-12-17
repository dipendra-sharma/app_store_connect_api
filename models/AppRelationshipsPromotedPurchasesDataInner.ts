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
 * @interface AppRelationshipsPromotedPurchasesDataInner
 */
export interface AppRelationshipsPromotedPurchasesDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsPromotedPurchasesDataInner
     */
    type: AppRelationshipsPromotedPurchasesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsPromotedPurchasesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsPromotedPurchasesDataInnerTypeEnum = {
    PromotedPurchases: 'promotedPurchases'
} as const;
export type AppRelationshipsPromotedPurchasesDataInnerTypeEnum = typeof AppRelationshipsPromotedPurchasesDataInnerTypeEnum[keyof typeof AppRelationshipsPromotedPurchasesDataInnerTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsPromotedPurchasesDataInner interface.
 */
export function instanceOfAppRelationshipsPromotedPurchasesDataInner(value: object): value is AppRelationshipsPromotedPurchasesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppRelationshipsPromotedPurchasesDataInnerFromJSON(json: any): AppRelationshipsPromotedPurchasesDataInner {
    return AppRelationshipsPromotedPurchasesDataInnerFromJSONTyped(json, false);
}

export function AppRelationshipsPromotedPurchasesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsPromotedPurchasesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsPromotedPurchasesDataInnerToJSON(json: any): AppRelationshipsPromotedPurchasesDataInner {
    return AppRelationshipsPromotedPurchasesDataInnerToJSONTyped(json, false);
}

export function AppRelationshipsPromotedPurchasesDataInnerToJSONTyped(value?: AppRelationshipsPromotedPurchasesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

