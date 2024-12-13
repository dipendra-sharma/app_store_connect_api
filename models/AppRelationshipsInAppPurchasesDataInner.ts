
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
 * @interface AppRelationshipsInAppPurchasesDataInner
 */
export interface AppRelationshipsInAppPurchasesDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsInAppPurchasesDataInner
     */
    type: AppRelationshipsInAppPurchasesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsInAppPurchasesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsInAppPurchasesDataInnerTypeEnum = {
    InAppPurchases: 'inAppPurchases'
} as const;
export type AppRelationshipsInAppPurchasesDataInnerTypeEnum = typeof AppRelationshipsInAppPurchasesDataInnerTypeEnum[keyof typeof AppRelationshipsInAppPurchasesDataInnerTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsInAppPurchasesDataInner interface.
 */
export function instanceOfAppRelationshipsInAppPurchasesDataInner(value: object): value is AppRelationshipsInAppPurchasesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppRelationshipsInAppPurchasesDataInnerFromJSON(json: any): AppRelationshipsInAppPurchasesDataInner {
    return AppRelationshipsInAppPurchasesDataInnerFromJSONTyped(json, false);
}

export function AppRelationshipsInAppPurchasesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsInAppPurchasesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsInAppPurchasesDataInnerToJSON(json: any): AppRelationshipsInAppPurchasesDataInner {
    return AppRelationshipsInAppPurchasesDataInnerToJSONTyped(json, false);
}

export function AppRelationshipsInAppPurchasesDataInnerToJSONTyped(value?: AppRelationshipsInAppPurchasesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

