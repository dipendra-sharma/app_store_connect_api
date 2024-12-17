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
import type { AppStoreVersionUpdateRequestDataRelationships } from './AppStoreVersionUpdateRequestDataRelationships';
import {
    AppStoreVersionUpdateRequestDataRelationshipsFromJSON,
    AppStoreVersionUpdateRequestDataRelationshipsFromJSONTyped,
    AppStoreVersionUpdateRequestDataRelationshipsToJSON,
    AppStoreVersionUpdateRequestDataRelationshipsToJSONTyped,
} from './AppStoreVersionUpdateRequestDataRelationships';
import type { AppStoreVersionUpdateRequestDataAttributes } from './AppStoreVersionUpdateRequestDataAttributes';
import {
    AppStoreVersionUpdateRequestDataAttributesFromJSON,
    AppStoreVersionUpdateRequestDataAttributesFromJSONTyped,
    AppStoreVersionUpdateRequestDataAttributesToJSON,
    AppStoreVersionUpdateRequestDataAttributesToJSONTyped,
} from './AppStoreVersionUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppStoreVersionUpdateRequestData
 */
export interface AppStoreVersionUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionUpdateRequestData
     */
    type: AppStoreVersionUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionUpdateRequestDataAttributes}
     * @memberof AppStoreVersionUpdateRequestData
     */
    attributes?: AppStoreVersionUpdateRequestDataAttributes;
    /**
     * 
     * @type {AppStoreVersionUpdateRequestDataRelationships}
     * @memberof AppStoreVersionUpdateRequestData
     */
    relationships?: AppStoreVersionUpdateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreVersionUpdateRequestDataTypeEnum = {
    AppStoreVersions: 'appStoreVersions'
} as const;
export type AppStoreVersionUpdateRequestDataTypeEnum = typeof AppStoreVersionUpdateRequestDataTypeEnum[keyof typeof AppStoreVersionUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionUpdateRequestData interface.
 */
export function instanceOfAppStoreVersionUpdateRequestData(value: object): value is AppStoreVersionUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreVersionUpdateRequestDataFromJSON(json: any): AppStoreVersionUpdateRequestData {
    return AppStoreVersionUpdateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppStoreVersionUpdateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppStoreVersionUpdateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreVersionUpdateRequestDataToJSON(json: any): AppStoreVersionUpdateRequestData {
    return AppStoreVersionUpdateRequestDataToJSONTyped(json, false);
}

export function AppStoreVersionUpdateRequestDataToJSONTyped(value?: AppStoreVersionUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppStoreVersionUpdateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AppStoreVersionUpdateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

