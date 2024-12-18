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
import type { AppStoreReviewAttachmentAttributes } from './AppStoreReviewAttachmentAttributes';
import {
    AppStoreReviewAttachmentAttributesFromJSON,
    AppStoreReviewAttachmentAttributesFromJSONTyped,
    AppStoreReviewAttachmentAttributesToJSON,
    AppStoreReviewAttachmentAttributesToJSONTyped,
} from './AppStoreReviewAttachmentAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AppStoreReviewAttachmentRelationships } from './AppStoreReviewAttachmentRelationships';
import {
    AppStoreReviewAttachmentRelationshipsFromJSON,
    AppStoreReviewAttachmentRelationshipsFromJSONTyped,
    AppStoreReviewAttachmentRelationshipsToJSON,
    AppStoreReviewAttachmentRelationshipsToJSONTyped,
} from './AppStoreReviewAttachmentRelationships';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachment
 */
export interface AppStoreReviewAttachment {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachment
     */
    type: AppStoreReviewAttachmentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachment
     */
    id: string;
    /**
     * 
     * @type {AppStoreReviewAttachmentAttributes}
     * @memberof AppStoreReviewAttachment
     */
    attributes?: AppStoreReviewAttachmentAttributes;
    /**
     * 
     * @type {AppStoreReviewAttachmentRelationships}
     * @memberof AppStoreReviewAttachment
     */
    relationships?: AppStoreReviewAttachmentRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreReviewAttachment
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreReviewAttachmentTypeEnum = {
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewAttachmentTypeEnum = typeof AppStoreReviewAttachmentTypeEnum[keyof typeof AppStoreReviewAttachmentTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewAttachment interface.
 */
export function instanceOfAppStoreReviewAttachment(value: object): value is AppStoreReviewAttachment {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreReviewAttachmentFromJSON(json: any): AppStoreReviewAttachment {
    return AppStoreReviewAttachmentFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachment {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppStoreReviewAttachmentAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppStoreReviewAttachmentRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreReviewAttachmentToJSON(json: any): AppStoreReviewAttachment {
    return AppStoreReviewAttachmentToJSONTyped(json, false);
}

export function AppStoreReviewAttachmentToJSONTyped(value?: AppStoreReviewAttachment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppStoreReviewAttachmentAttributesToJSON(value['attributes']),
        'relationships': AppStoreReviewAttachmentRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

