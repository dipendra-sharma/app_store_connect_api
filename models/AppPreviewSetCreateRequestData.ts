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
import type { AppPreviewSetCreateRequestDataAttributes } from './AppPreviewSetCreateRequestDataAttributes';
import {
    AppPreviewSetCreateRequestDataAttributesFromJSON,
    AppPreviewSetCreateRequestDataAttributesFromJSONTyped,
    AppPreviewSetCreateRequestDataAttributesToJSON,
    AppPreviewSetCreateRequestDataAttributesToJSONTyped,
} from './AppPreviewSetCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppPreviewSetCreateRequestData
 */
export interface AppPreviewSetCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppPreviewSetCreateRequestData
     */
    type: AppPreviewSetCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppPreviewSetCreateRequestDataAttributes}
     * @memberof AppPreviewSetCreateRequestData
     */
    attributes: AppPreviewSetCreateRequestDataAttributes;
    /**
     * 
     * @type {AppPreviewSetCreateRequestDataRelationships}
     * @memberof AppPreviewSetCreateRequestData
     */
    relationships?: AppPreviewSetCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppPreviewSetCreateRequestDataTypeEnum = {
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppPreviewSetCreateRequestDataTypeEnum = typeof AppPreviewSetCreateRequestDataTypeEnum[keyof typeof AppPreviewSetCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppPreviewSetCreateRequestData interface.
 */
export function instanceOfAppPreviewSetCreateRequestData(value: object): value is AppPreviewSetCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function AppPreviewSetCreateRequestDataFromJSON(json: any): AppPreviewSetCreateRequestData {
    return AppPreviewSetCreateRequestDataFromJSONTyped(json, false);
}

export function AppPreviewSetCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppPreviewSetCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppPreviewSetCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppPreviewSetCreateRequestDataToJSON(json: any): AppPreviewSetCreateRequestData {
    return AppPreviewSetCreateRequestDataToJSONTyped(json, false);
}

export function AppPreviewSetCreateRequestDataToJSONTyped(value?: AppPreviewSetCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppPreviewSetCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AppPreviewSetCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

