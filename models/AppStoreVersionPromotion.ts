
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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionPromotion
 */
export interface AppStoreVersionPromotion {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionPromotion
     */
    type: AppStoreVersionPromotionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionPromotion
     */
    id: string;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreVersionPromotion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreVersionPromotionTypeEnum = {
    AppStoreVersionPromotions: 'appStoreVersionPromotions'
} as const;
export type AppStoreVersionPromotionTypeEnum = typeof AppStoreVersionPromotionTypeEnum[keyof typeof AppStoreVersionPromotionTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionPromotion interface.
 */
export function instanceOfAppStoreVersionPromotion(value: object): value is AppStoreVersionPromotion {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreVersionPromotionFromJSON(json: any): AppStoreVersionPromotion {
    return AppStoreVersionPromotionFromJSONTyped(json, false);
}

export function AppStoreVersionPromotionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPromotion {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionPromotionToJSON(json: any): AppStoreVersionPromotion {
    return AppStoreVersionPromotionToJSONTyped(json, false);
}

export function AppStoreVersionPromotionToJSONTyped(value?: AppStoreVersionPromotion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'links': ResourceLinksToJSON(value['links']),
    };
}

