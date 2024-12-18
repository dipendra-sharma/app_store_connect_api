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
import type { AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData } from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData';
import {
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataToJSON,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataToJSONTyped,
} from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion
 */
export interface AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion {
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData}
     * @memberof AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion
     */
    data: AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion interface.
 */
export function instanceOfAppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion(value: object): value is AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSON(json: any): AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion {
    return AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionToJSON(json: any): AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion {
    return AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionToJSONTyped(value?: AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataToJSON(value['data']),
    };
}

