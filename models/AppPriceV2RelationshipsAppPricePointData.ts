
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
 * @interface AppPriceV2RelationshipsAppPricePointData
 */
export interface AppPriceV2RelationshipsAppPricePointData {
    /**
     * 
     * @type {string}
     * @memberof AppPriceV2RelationshipsAppPricePointData
     */
    type: AppPriceV2RelationshipsAppPricePointDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPriceV2RelationshipsAppPricePointData
     */
    id: string;
}


/**
 * @export
 */
export const AppPriceV2RelationshipsAppPricePointDataTypeEnum = {
    AppPricePoints: 'appPricePoints'
} as const;
export type AppPriceV2RelationshipsAppPricePointDataTypeEnum = typeof AppPriceV2RelationshipsAppPricePointDataTypeEnum[keyof typeof AppPriceV2RelationshipsAppPricePointDataTypeEnum];


/**
 * Check if a given object implements the AppPriceV2RelationshipsAppPricePointData interface.
 */
export function instanceOfAppPriceV2RelationshipsAppPricePointData(value: object): value is AppPriceV2RelationshipsAppPricePointData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppPriceV2RelationshipsAppPricePointDataFromJSON(json: any): AppPriceV2RelationshipsAppPricePointData {
    return AppPriceV2RelationshipsAppPricePointDataFromJSONTyped(json, false);
}

export function AppPriceV2RelationshipsAppPricePointDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceV2RelationshipsAppPricePointData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppPriceV2RelationshipsAppPricePointDataToJSON(json: any): AppPriceV2RelationshipsAppPricePointData {
    return AppPriceV2RelationshipsAppPricePointDataToJSONTyped(json, false);
}

export function AppPriceV2RelationshipsAppPricePointDataToJSONTyped(value?: AppPriceV2RelationshipsAppPricePointData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

