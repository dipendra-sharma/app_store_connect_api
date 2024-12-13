
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
 * @interface AppCustomProductPageVersionRelationshipsAppCustomProductPageData
 */
export interface AppCustomProductPageVersionRelationshipsAppCustomProductPageData {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageVersionRelationshipsAppCustomProductPageData
     */
    type: AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageVersionRelationshipsAppCustomProductPageData
     */
    id: string;
}


/**
 * @export
 */
export const AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum = {
    AppCustomProductPages: 'appCustomProductPages'
} as const;
export type AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum = typeof AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum[keyof typeof AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageVersionRelationshipsAppCustomProductPageData interface.
 */
export function instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPageData(value: object): value is AppCustomProductPageVersionRelationshipsAppCustomProductPageData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON(json: any): AppCustomProductPageVersionRelationshipsAppCustomProductPageData {
    return AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionRelationshipsAppCustomProductPageData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON(json: any): AppCustomProductPageVersionRelationshipsAppCustomProductPageData {
    return AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSONTyped(json, false);
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSONTyped(value?: AppCustomProductPageVersionRelationshipsAppCustomProductPageData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

