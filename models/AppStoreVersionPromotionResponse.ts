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
import type { AppStoreVersionPromotion } from './AppStoreVersionPromotion';
import {
    AppStoreVersionPromotionFromJSON,
    AppStoreVersionPromotionFromJSONTyped,
    AppStoreVersionPromotionToJSON,
    AppStoreVersionPromotionToJSONTyped,
} from './AppStoreVersionPromotion';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionPromotionResponse
 */
export interface AppStoreVersionPromotionResponse {
    /**
     * 
     * @type {AppStoreVersionPromotion}
     * @memberof AppStoreVersionPromotionResponse
     */
    data: AppStoreVersionPromotion;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionPromotionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionPromotionResponse interface.
 */
export function instanceOfAppStoreVersionPromotionResponse(value: object): value is AppStoreVersionPromotionResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppStoreVersionPromotionResponseFromJSON(json: any): AppStoreVersionPromotionResponse {
    return AppStoreVersionPromotionResponseFromJSONTyped(json, false);
}

export function AppStoreVersionPromotionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPromotionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppStoreVersionPromotionFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionPromotionResponseToJSON(json: any): AppStoreVersionPromotionResponse {
    return AppStoreVersionPromotionResponseToJSONTyped(json, false);
}

export function AppStoreVersionPromotionResponseToJSONTyped(value?: AppStoreVersionPromotionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppStoreVersionPromotionToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

