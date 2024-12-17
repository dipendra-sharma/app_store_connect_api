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
import type { AppStoreReviewDetailRelationships } from './AppStoreReviewDetailRelationships';
import {
    AppStoreReviewDetailRelationshipsFromJSON,
    AppStoreReviewDetailRelationshipsFromJSONTyped,
    AppStoreReviewDetailRelationshipsToJSON,
    AppStoreReviewDetailRelationshipsToJSONTyped,
} from './AppStoreReviewDetailRelationships';
import type { AppStoreReviewDetailAttributes } from './AppStoreReviewDetailAttributes';
import {
    AppStoreReviewDetailAttributesFromJSON,
    AppStoreReviewDetailAttributesFromJSONTyped,
    AppStoreReviewDetailAttributesToJSON,
    AppStoreReviewDetailAttributesToJSONTyped,
} from './AppStoreReviewDetailAttributes';

/**
 * 
 * @export
 * @interface AppStoreReviewDetail
 */
export interface AppStoreReviewDetail {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewDetail
     */
    type: AppStoreReviewDetailTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewDetail
     */
    id: string;
    /**
     * 
     * @type {AppStoreReviewDetailAttributes}
     * @memberof AppStoreReviewDetail
     */
    attributes?: AppStoreReviewDetailAttributes;
    /**
     * 
     * @type {AppStoreReviewDetailRelationships}
     * @memberof AppStoreReviewDetail
     */
    relationships?: AppStoreReviewDetailRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreReviewDetail
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreReviewDetailTypeEnum = {
    AppStoreReviewDetails: 'appStoreReviewDetails'
} as const;
export type AppStoreReviewDetailTypeEnum = typeof AppStoreReviewDetailTypeEnum[keyof typeof AppStoreReviewDetailTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewDetail interface.
 */
export function instanceOfAppStoreReviewDetail(value: object): value is AppStoreReviewDetail {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreReviewDetailFromJSON(json: any): AppStoreReviewDetail {
    return AppStoreReviewDetailFromJSONTyped(json, false);
}

export function AppStoreReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppStoreReviewDetailAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppStoreReviewDetailRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreReviewDetailToJSON(json: any): AppStoreReviewDetail {
    return AppStoreReviewDetailToJSONTyped(json, false);
}

export function AppStoreReviewDetailToJSONTyped(value?: AppStoreReviewDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppStoreReviewDetailAttributesToJSON(value['attributes']),
        'relationships': AppStoreReviewDetailRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

