
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
import type { AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner } from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner';
import {
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSON,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSONTyped,
} from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner';

/**
 * 
 * @export
 * @interface AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet
 */
export interface AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet {
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner}
     * @memberof AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet
     */
    data: AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner;
}

/**
 * Check if a given object implements the AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet interface.
 */
export function instanceOfAppScreenshotCreateRequestDataRelationshipsAppScreenshotSet(value: object): value is AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSON(json: any): AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet {
    return AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSONTyped(json, false);
}

export function AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSON(json['data']),
    };
}

export function AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetToJSON(json: any): AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet {
    return AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetToJSONTyped(json, false);
}

export function AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetToJSONTyped(value?: AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSON(value['data']),
    };
}

