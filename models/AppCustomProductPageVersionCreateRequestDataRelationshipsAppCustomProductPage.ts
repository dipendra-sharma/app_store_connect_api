
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
import type { AppCustomProductPageVersionRelationshipsAppCustomProductPageData } from './AppCustomProductPageVersionRelationshipsAppCustomProductPageData';
import {
    AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSONTyped,
} from './AppCustomProductPageVersionRelationshipsAppCustomProductPageData';

/**
 * 
 * @export
 * @interface AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage
 */
export interface AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage {
    /**
     * 
     * @type {AppCustomProductPageVersionRelationshipsAppCustomProductPageData}
     * @memberof AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage
     */
    data: AppCustomProductPageVersionRelationshipsAppCustomProductPageData;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage interface.
 */
export function instanceOfAppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage(value: object): value is AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageFromJSON(json: any): AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage {
    return AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageToJSON(json: any): AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage {
    return AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageToJSONTyped(json, false);
}

export function AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageToJSONTyped(value?: AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON(value['data']),
    };
}
