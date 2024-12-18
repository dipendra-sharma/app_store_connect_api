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
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner } from './AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner';
import {
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSONTyped,
} from './AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner';

/**
 * 
 * @export
 * @interface AppPreviewRelationshipsAppPreviewSet
 */
export interface AppPreviewRelationshipsAppPreviewSet {
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner}
     * @memberof AppPreviewRelationshipsAppPreviewSet
     */
    data?: AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner;
}

/**
 * Check if a given object implements the AppPreviewRelationshipsAppPreviewSet interface.
 */
export function instanceOfAppPreviewRelationshipsAppPreviewSet(value: object): value is AppPreviewRelationshipsAppPreviewSet {
    return true;
}

export function AppPreviewRelationshipsAppPreviewSetFromJSON(json: any): AppPreviewRelationshipsAppPreviewSet {
    return AppPreviewRelationshipsAppPreviewSetFromJSONTyped(json, false);
}

export function AppPreviewRelationshipsAppPreviewSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewRelationshipsAppPreviewSet {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON(json['data']),
    };
}

export function AppPreviewRelationshipsAppPreviewSetToJSON(json: any): AppPreviewRelationshipsAppPreviewSet {
    return AppPreviewRelationshipsAppPreviewSetToJSONTyped(json, false);
}

export function AppPreviewRelationshipsAppPreviewSetToJSONTyped(value?: AppPreviewRelationshipsAppPreviewSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON(value['data']),
    };
}

