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
import type { AppPreviewSetCreateRequestDataRelationships } from './AppPreviewSetCreateRequestDataRelationships';
import {
    AppPreviewSetCreateRequestDataRelationshipsFromJSON,
    AppPreviewSetCreateRequestDataRelationshipsFromJSONTyped,
    AppPreviewSetCreateRequestDataRelationshipsToJSON,
    AppPreviewSetCreateRequestDataRelationshipsToJSONTyped,
} from './AppPreviewSetCreateRequestDataRelationships';
import type { AppScreenshotSetCreateRequestDataAttributes } from './AppScreenshotSetCreateRequestDataAttributes';
import {
    AppScreenshotSetCreateRequestDataAttributesFromJSON,
    AppScreenshotSetCreateRequestDataAttributesFromJSONTyped,
    AppScreenshotSetCreateRequestDataAttributesToJSON,
    AppScreenshotSetCreateRequestDataAttributesToJSONTyped,
} from './AppScreenshotSetCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppScreenshotSetCreateRequestData
 */
export interface AppScreenshotSetCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotSetCreateRequestData
     */
    type: AppScreenshotSetCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppScreenshotSetCreateRequestDataAttributes}
     * @memberof AppScreenshotSetCreateRequestData
     */
    attributes: AppScreenshotSetCreateRequestDataAttributes;
    /**
     * 
     * @type {AppPreviewSetCreateRequestDataRelationships}
     * @memberof AppScreenshotSetCreateRequestData
     */
    relationships?: AppPreviewSetCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppScreenshotSetCreateRequestDataTypeEnum = {
    AppScreenshotSets: 'appScreenshotSets'
} as const;
export type AppScreenshotSetCreateRequestDataTypeEnum = typeof AppScreenshotSetCreateRequestDataTypeEnum[keyof typeof AppScreenshotSetCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppScreenshotSetCreateRequestData interface.
 */
export function instanceOfAppScreenshotSetCreateRequestData(value: object): value is AppScreenshotSetCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function AppScreenshotSetCreateRequestDataFromJSON(json: any): AppScreenshotSetCreateRequestData {
    return AppScreenshotSetCreateRequestDataFromJSONTyped(json, false);
}

export function AppScreenshotSetCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppScreenshotSetCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppPreviewSetCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppScreenshotSetCreateRequestDataToJSON(json: any): AppScreenshotSetCreateRequestData {
    return AppScreenshotSetCreateRequestDataToJSONTyped(json, false);
}

export function AppScreenshotSetCreateRequestDataToJSONTyped(value?: AppScreenshotSetCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppScreenshotSetCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AppPreviewSetCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

