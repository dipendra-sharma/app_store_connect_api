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
 * @interface AppEventLocalizationRelationshipsAppEventData
 */
export interface AppEventLocalizationRelationshipsAppEventData {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventData
     */
    type: AppEventLocalizationRelationshipsAppEventDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventData
     */
    id: string;
}


/**
 * @export
 */
export const AppEventLocalizationRelationshipsAppEventDataTypeEnum = {
    AppEvents: 'appEvents'
} as const;
export type AppEventLocalizationRelationshipsAppEventDataTypeEnum = typeof AppEventLocalizationRelationshipsAppEventDataTypeEnum[keyof typeof AppEventLocalizationRelationshipsAppEventDataTypeEnum];


/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEventData interface.
 */
export function instanceOfAppEventLocalizationRelationshipsAppEventData(value: object): value is AppEventLocalizationRelationshipsAppEventData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppEventLocalizationRelationshipsAppEventDataFromJSON(json: any): AppEventLocalizationRelationshipsAppEventData {
    return AppEventLocalizationRelationshipsAppEventDataFromJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationRelationshipsAppEventData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppEventLocalizationRelationshipsAppEventDataToJSON(json: any): AppEventLocalizationRelationshipsAppEventData {
    return AppEventLocalizationRelationshipsAppEventDataToJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventDataToJSONTyped(value?: AppEventLocalizationRelationshipsAppEventData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

