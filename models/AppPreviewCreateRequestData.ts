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
import type { AppPreviewCreateRequestDataRelationships } from './AppPreviewCreateRequestDataRelationships';
import {
    AppPreviewCreateRequestDataRelationshipsFromJSON,
    AppPreviewCreateRequestDataRelationshipsFromJSONTyped,
    AppPreviewCreateRequestDataRelationshipsToJSON,
    AppPreviewCreateRequestDataRelationshipsToJSONTyped,
} from './AppPreviewCreateRequestDataRelationships';
import type { AppPreviewCreateRequestDataAttributes } from './AppPreviewCreateRequestDataAttributes';
import {
    AppPreviewCreateRequestDataAttributesFromJSON,
    AppPreviewCreateRequestDataAttributesFromJSONTyped,
    AppPreviewCreateRequestDataAttributesToJSON,
    AppPreviewCreateRequestDataAttributesToJSONTyped,
} from './AppPreviewCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppPreviewCreateRequestData
 */
export interface AppPreviewCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppPreviewCreateRequestData
     */
    type: AppPreviewCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppPreviewCreateRequestDataAttributes}
     * @memberof AppPreviewCreateRequestData
     */
    attributes: AppPreviewCreateRequestDataAttributes;
    /**
     * 
     * @type {AppPreviewCreateRequestDataRelationships}
     * @memberof AppPreviewCreateRequestData
     */
    relationships: AppPreviewCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppPreviewCreateRequestDataTypeEnum = {
    AppPreviews: 'appPreviews'
} as const;
export type AppPreviewCreateRequestDataTypeEnum = typeof AppPreviewCreateRequestDataTypeEnum[keyof typeof AppPreviewCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppPreviewCreateRequestData interface.
 */
export function instanceOfAppPreviewCreateRequestData(value: object): value is AppPreviewCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function AppPreviewCreateRequestDataFromJSON(json: any): AppPreviewCreateRequestData {
    return AppPreviewCreateRequestDataFromJSONTyped(json, false);
}

export function AppPreviewCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppPreviewCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppPreviewCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppPreviewCreateRequestDataToJSON(json: any): AppPreviewCreateRequestData {
    return AppPreviewCreateRequestDataToJSONTyped(json, false);
}

export function AppPreviewCreateRequestDataToJSONTyped(value?: AppPreviewCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppPreviewCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AppPreviewCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

