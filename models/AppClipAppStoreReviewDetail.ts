
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
import type { AppClipAppStoreReviewDetailRelationships } from './AppClipAppStoreReviewDetailRelationships';
import {
    AppClipAppStoreReviewDetailRelationshipsFromJSON,
    AppClipAppStoreReviewDetailRelationshipsFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsToJSON,
    AppClipAppStoreReviewDetailRelationshipsToJSONTyped,
} from './AppClipAppStoreReviewDetailRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AppClipAppStoreReviewDetailAttributes } from './AppClipAppStoreReviewDetailAttributes';
import {
    AppClipAppStoreReviewDetailAttributesFromJSON,
    AppClipAppStoreReviewDetailAttributesFromJSONTyped,
    AppClipAppStoreReviewDetailAttributesToJSON,
    AppClipAppStoreReviewDetailAttributesToJSONTyped,
} from './AppClipAppStoreReviewDetailAttributes';

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetail
 */
export interface AppClipAppStoreReviewDetail {
    /**
     * 
     * @type {string}
     * @memberof AppClipAppStoreReviewDetail
     */
    type: AppClipAppStoreReviewDetailTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAppStoreReviewDetail
     */
    id: string;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailAttributes}
     * @memberof AppClipAppStoreReviewDetail
     */
    attributes?: AppClipAppStoreReviewDetailAttributes;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationships}
     * @memberof AppClipAppStoreReviewDetail
     */
    relationships?: AppClipAppStoreReviewDetailRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipAppStoreReviewDetail
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipAppStoreReviewDetailTypeEnum = {
    AppClipAppStoreReviewDetails: 'appClipAppStoreReviewDetails'
} as const;
export type AppClipAppStoreReviewDetailTypeEnum = typeof AppClipAppStoreReviewDetailTypeEnum[keyof typeof AppClipAppStoreReviewDetailTypeEnum];


/**
 * Check if a given object implements the AppClipAppStoreReviewDetail interface.
 */
export function instanceOfAppClipAppStoreReviewDetail(value: object): value is AppClipAppStoreReviewDetail {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppClipAppStoreReviewDetailFromJSON(json: any): AppClipAppStoreReviewDetail {
    return AppClipAppStoreReviewDetailFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipAppStoreReviewDetailAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppClipAppStoreReviewDetailRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipAppStoreReviewDetailToJSON(json: any): AppClipAppStoreReviewDetail {
    return AppClipAppStoreReviewDetailToJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailToJSONTyped(value?: AppClipAppStoreReviewDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipAppStoreReviewDetailAttributesToJSON(value['attributes']),
        'relationships': AppClipAppStoreReviewDetailRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

