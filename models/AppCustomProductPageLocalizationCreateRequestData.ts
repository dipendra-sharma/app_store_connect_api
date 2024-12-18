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
import type { AppCustomProductPageLocalizationCreateRequestDataRelationships } from './AppCustomProductPageLocalizationCreateRequestDataRelationships';
import {
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSON,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSONTyped,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsToJSON,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsToJSONTyped,
} from './AppCustomProductPageLocalizationCreateRequestDataRelationships';
import type { AppCustomProductPageLocalizationInlineCreateAttributes } from './AppCustomProductPageLocalizationInlineCreateAttributes';
import {
    AppCustomProductPageLocalizationInlineCreateAttributesFromJSON,
    AppCustomProductPageLocalizationInlineCreateAttributesFromJSONTyped,
    AppCustomProductPageLocalizationInlineCreateAttributesToJSON,
    AppCustomProductPageLocalizationInlineCreateAttributesToJSONTyped,
} from './AppCustomProductPageLocalizationInlineCreateAttributes';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationCreateRequestData
 */
export interface AppCustomProductPageLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationCreateRequestData
     */
    type: AppCustomProductPageLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppCustomProductPageLocalizationInlineCreateAttributes}
     * @memberof AppCustomProductPageLocalizationCreateRequestData
     */
    attributes: AppCustomProductPageLocalizationInlineCreateAttributes;
    /**
     * 
     * @type {AppCustomProductPageLocalizationCreateRequestDataRelationships}
     * @memberof AppCustomProductPageLocalizationCreateRequestData
     */
    relationships: AppCustomProductPageLocalizationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppCustomProductPageLocalizationCreateRequestDataTypeEnum = {
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPageLocalizationCreateRequestDataTypeEnum = typeof AppCustomProductPageLocalizationCreateRequestDataTypeEnum[keyof typeof AppCustomProductPageLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageLocalizationCreateRequestData interface.
 */
export function instanceOfAppCustomProductPageLocalizationCreateRequestData(value: object): value is AppCustomProductPageLocalizationCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function AppCustomProductPageLocalizationCreateRequestDataFromJSON(json: any): AppCustomProductPageLocalizationCreateRequestData {
    return AppCustomProductPageLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppCustomProductPageLocalizationInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppCustomProductPageLocalizationCreateRequestDataToJSON(json: any): AppCustomProductPageLocalizationCreateRequestData {
    return AppCustomProductPageLocalizationCreateRequestDataToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestDataToJSONTyped(value?: AppCustomProductPageLocalizationCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppCustomProductPageLocalizationInlineCreateAttributesToJSON(value['attributes']),
        'relationships': AppCustomProductPageLocalizationCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

