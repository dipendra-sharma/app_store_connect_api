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
import type { AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail } from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail';
import {
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSON,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSONTyped,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSON,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSONTyped,
} from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentRelationships
 */
export interface AppStoreReviewAttachmentRelationships {
    /**
     * 
     * @type {AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail}
     * @memberof AppStoreReviewAttachmentRelationships
     */
    appStoreReviewDetail?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentRelationships interface.
 */
export function instanceOfAppStoreReviewAttachmentRelationships(value: object): value is AppStoreReviewAttachmentRelationships {
    return true;
}

export function AppStoreReviewAttachmentRelationshipsFromJSON(json: any): AppStoreReviewAttachmentRelationships {
    return AppStoreReviewAttachmentRelationshipsFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appStoreReviewDetail': json['appStoreReviewDetail'] == null ? undefined : AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSON(json['appStoreReviewDetail']),
    };
}

export function AppStoreReviewAttachmentRelationshipsToJSON(json: any): AppStoreReviewAttachmentRelationships {
    return AppStoreReviewAttachmentRelationshipsToJSONTyped(json, false);
}

export function AppStoreReviewAttachmentRelationshipsToJSONTyped(value?: AppStoreReviewAttachmentRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appStoreReviewDetail': AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSON(value['appStoreReviewDetail']),
    };
}

