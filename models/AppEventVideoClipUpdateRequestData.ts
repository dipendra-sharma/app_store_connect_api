
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
import type { AppEventVideoClipUpdateRequestDataAttributes } from './AppEventVideoClipUpdateRequestDataAttributes';
import {
    AppEventVideoClipUpdateRequestDataAttributesFromJSON,
    AppEventVideoClipUpdateRequestDataAttributesFromJSONTyped,
    AppEventVideoClipUpdateRequestDataAttributesToJSON,
    AppEventVideoClipUpdateRequestDataAttributesToJSONTyped,
} from './AppEventVideoClipUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppEventVideoClipUpdateRequestData
 */
export interface AppEventVideoClipUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipUpdateRequestData
     */
    type: AppEventVideoClipUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppEventVideoClipUpdateRequestDataAttributes}
     * @memberof AppEventVideoClipUpdateRequestData
     */
    attributes?: AppEventVideoClipUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppEventVideoClipUpdateRequestDataTypeEnum = {
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventVideoClipUpdateRequestDataTypeEnum = typeof AppEventVideoClipUpdateRequestDataTypeEnum[keyof typeof AppEventVideoClipUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppEventVideoClipUpdateRequestData interface.
 */
export function instanceOfAppEventVideoClipUpdateRequestData(value: object): value is AppEventVideoClipUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppEventVideoClipUpdateRequestDataFromJSON(json: any): AppEventVideoClipUpdateRequestData {
    return AppEventVideoClipUpdateRequestDataFromJSONTyped(json, false);
}

export function AppEventVideoClipUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppEventVideoClipUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppEventVideoClipUpdateRequestDataToJSON(json: any): AppEventVideoClipUpdateRequestData {
    return AppEventVideoClipUpdateRequestDataToJSONTyped(json, false);
}

export function AppEventVideoClipUpdateRequestDataToJSONTyped(value?: AppEventVideoClipUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppEventVideoClipUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}
