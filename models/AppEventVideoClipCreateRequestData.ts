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
import type { AppEventVideoClipCreateRequestDataAttributes } from './AppEventVideoClipCreateRequestDataAttributes';
import {
    AppEventVideoClipCreateRequestDataAttributesFromJSON,
    AppEventVideoClipCreateRequestDataAttributesFromJSONTyped,
    AppEventVideoClipCreateRequestDataAttributesToJSON,
    AppEventVideoClipCreateRequestDataAttributesToJSONTyped,
} from './AppEventVideoClipCreateRequestDataAttributes';
import type { AppEventScreenshotCreateRequestDataRelationships } from './AppEventScreenshotCreateRequestDataRelationships';
import {
    AppEventScreenshotCreateRequestDataRelationshipsFromJSON,
    AppEventScreenshotCreateRequestDataRelationshipsFromJSONTyped,
    AppEventScreenshotCreateRequestDataRelationshipsToJSON,
    AppEventScreenshotCreateRequestDataRelationshipsToJSONTyped,
} from './AppEventScreenshotCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppEventVideoClipCreateRequestData
 */
export interface AppEventVideoClipCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipCreateRequestData
     */
    type: AppEventVideoClipCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppEventVideoClipCreateRequestDataAttributes}
     * @memberof AppEventVideoClipCreateRequestData
     */
    attributes: AppEventVideoClipCreateRequestDataAttributes;
    /**
     * 
     * @type {AppEventScreenshotCreateRequestDataRelationships}
     * @memberof AppEventVideoClipCreateRequestData
     */
    relationships: AppEventScreenshotCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppEventVideoClipCreateRequestDataTypeEnum = {
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventVideoClipCreateRequestDataTypeEnum = typeof AppEventVideoClipCreateRequestDataTypeEnum[keyof typeof AppEventVideoClipCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppEventVideoClipCreateRequestData interface.
 */
export function instanceOfAppEventVideoClipCreateRequestData(value: object): value is AppEventVideoClipCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function AppEventVideoClipCreateRequestDataFromJSON(json: any): AppEventVideoClipCreateRequestData {
    return AppEventVideoClipCreateRequestDataFromJSONTyped(json, false);
}

export function AppEventVideoClipCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppEventVideoClipCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppEventScreenshotCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppEventVideoClipCreateRequestDataToJSON(json: any): AppEventVideoClipCreateRequestData {
    return AppEventVideoClipCreateRequestDataToJSONTyped(json, false);
}

export function AppEventVideoClipCreateRequestDataToJSONTyped(value?: AppEventVideoClipCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppEventVideoClipCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AppEventScreenshotCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

