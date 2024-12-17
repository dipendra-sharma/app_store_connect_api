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
 * @interface InAppPurchaseV2RelationshipsIapPriceScheduleData
 */
export interface InAppPurchaseV2RelationshipsIapPriceScheduleData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsIapPriceScheduleData
     */
    type: InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsIapPriceScheduleData
     */
    id: string;
}


/**
 * @export
 */
export const InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum = {
    InAppPurchasePriceSchedules: 'inAppPurchasePriceSchedules'
} as const;
export type InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum = typeof InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum[keyof typeof InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsIapPriceScheduleData interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsIapPriceScheduleData(value: object): value is InAppPurchaseV2RelationshipsIapPriceScheduleData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function InAppPurchaseV2RelationshipsIapPriceScheduleDataFromJSON(json: any): InAppPurchaseV2RelationshipsIapPriceScheduleData {
    return InAppPurchaseV2RelationshipsIapPriceScheduleDataFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsIapPriceScheduleDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsIapPriceScheduleData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function InAppPurchaseV2RelationshipsIapPriceScheduleDataToJSON(json: any): InAppPurchaseV2RelationshipsIapPriceScheduleData {
    return InAppPurchaseV2RelationshipsIapPriceScheduleDataToJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsIapPriceScheduleDataToJSONTyped(value?: InAppPurchaseV2RelationshipsIapPriceScheduleData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

