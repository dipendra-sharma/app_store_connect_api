
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
import type { AppCustomProductPageUpdateRequestDataAttributes } from './AppCustomProductPageUpdateRequestDataAttributes';
import {
    AppCustomProductPageUpdateRequestDataAttributesFromJSON,
    AppCustomProductPageUpdateRequestDataAttributesFromJSONTyped,
    AppCustomProductPageUpdateRequestDataAttributesToJSON,
    AppCustomProductPageUpdateRequestDataAttributesToJSONTyped,
} from './AppCustomProductPageUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppCustomProductPageUpdateRequestData
 */
export interface AppCustomProductPageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageUpdateRequestData
     */
    type: AppCustomProductPageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppCustomProductPageUpdateRequestDataAttributes}
     * @memberof AppCustomProductPageUpdateRequestData
     */
    attributes?: AppCustomProductPageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppCustomProductPageUpdateRequestDataTypeEnum = {
    AppCustomProductPages: 'appCustomProductPages'
} as const;
export type AppCustomProductPageUpdateRequestDataTypeEnum = typeof AppCustomProductPageUpdateRequestDataTypeEnum[keyof typeof AppCustomProductPageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageUpdateRequestData interface.
 */
export function instanceOfAppCustomProductPageUpdateRequestData(value: object): value is AppCustomProductPageUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppCustomProductPageUpdateRequestDataFromJSON(json: any): AppCustomProductPageUpdateRequestData {
    return AppCustomProductPageUpdateRequestDataFromJSONTyped(json, false);
}

export function AppCustomProductPageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppCustomProductPageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppCustomProductPageUpdateRequestDataToJSON(json: any): AppCustomProductPageUpdateRequestData {
    return AppCustomProductPageUpdateRequestDataToJSONTyped(json, false);
}

export function AppCustomProductPageUpdateRequestDataToJSONTyped(value?: AppCustomProductPageUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppCustomProductPageUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}
