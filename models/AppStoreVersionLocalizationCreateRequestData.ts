
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
import type { AppStoreVersionLocalizationCreateRequestDataAttributes } from './AppStoreVersionLocalizationCreateRequestDataAttributes';
import {
    AppStoreVersionLocalizationCreateRequestDataAttributesFromJSON,
    AppStoreVersionLocalizationCreateRequestDataAttributesFromJSONTyped,
    AppStoreVersionLocalizationCreateRequestDataAttributesToJSON,
    AppStoreVersionLocalizationCreateRequestDataAttributesToJSONTyped,
} from './AppStoreVersionLocalizationCreateRequestDataAttributes';
import type { AlternativeDistributionPackageCreateRequestDataRelationships } from './AlternativeDistributionPackageCreateRequestDataRelationships';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsToJSONTyped,
} from './AlternativeDistributionPackageCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppStoreVersionLocalizationCreateRequestData
 */
export interface AppStoreVersionLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestData
     */
    type: AppStoreVersionLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppStoreVersionLocalizationCreateRequestDataAttributes}
     * @memberof AppStoreVersionLocalizationCreateRequestData
     */
    attributes: AppStoreVersionLocalizationCreateRequestDataAttributes;
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof AppStoreVersionLocalizationCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreVersionLocalizationCreateRequestDataTypeEnum = {
    AppStoreVersionLocalizations: 'appStoreVersionLocalizations'
} as const;
export type AppStoreVersionLocalizationCreateRequestDataTypeEnum = typeof AppStoreVersionLocalizationCreateRequestDataTypeEnum[keyof typeof AppStoreVersionLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequestData interface.
 */
export function instanceOfAppStoreVersionLocalizationCreateRequestData(value: object): value is AppStoreVersionLocalizationCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function AppStoreVersionLocalizationCreateRequestDataFromJSON(json: any): AppStoreVersionLocalizationCreateRequestData {
    return AppStoreVersionLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppStoreVersionLocalizationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreVersionLocalizationCreateRequestDataToJSON(json: any): AppStoreVersionLocalizationCreateRequestData {
    return AppStoreVersionLocalizationCreateRequestDataToJSONTyped(json, false);
}

export function AppStoreVersionLocalizationCreateRequestDataToJSONTyped(value?: AppStoreVersionLocalizationCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppStoreVersionLocalizationCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

