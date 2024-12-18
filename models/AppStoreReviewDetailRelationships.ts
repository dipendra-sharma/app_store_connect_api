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
import type { AppStoreReviewDetailRelationshipsAppStoreReviewAttachments } from './AppStoreReviewDetailRelationshipsAppStoreReviewAttachments';
import {
    AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsFromJSON,
    AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsFromJSONTyped,
    AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsToJSON,
    AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsToJSONTyped,
} from './AppStoreReviewDetailRelationshipsAppStoreReviewAttachments';
import type { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSONTyped,
} from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';

/**
 * 
 * @export
 * @interface AppStoreReviewDetailRelationships
 */
export interface AppStoreReviewDetailRelationships {
    /**
     * 
     * @type {AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion}
     * @memberof AppStoreReviewDetailRelationships
     */
    appStoreVersion?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {AppStoreReviewDetailRelationshipsAppStoreReviewAttachments}
     * @memberof AppStoreReviewDetailRelationships
     */
    appStoreReviewAttachments?: AppStoreReviewDetailRelationshipsAppStoreReviewAttachments;
}

/**
 * Check if a given object implements the AppStoreReviewDetailRelationships interface.
 */
export function instanceOfAppStoreReviewDetailRelationships(value: object): value is AppStoreReviewDetailRelationships {
    return true;
}

export function AppStoreReviewDetailRelationshipsFromJSON(json: any): AppStoreReviewDetailRelationships {
    return AppStoreReviewDetailRelationshipsFromJSONTyped(json, false);
}

export function AppStoreReviewDetailRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetailRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appStoreVersion': json['appStoreVersion'] == null ? undefined : AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON(json['appStoreVersion']),
        'appStoreReviewAttachments': json['appStoreReviewAttachments'] == null ? undefined : AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsFromJSON(json['appStoreReviewAttachments']),
    };
}

export function AppStoreReviewDetailRelationshipsToJSON(json: any): AppStoreReviewDetailRelationships {
    return AppStoreReviewDetailRelationshipsToJSONTyped(json, false);
}

export function AppStoreReviewDetailRelationshipsToJSONTyped(value?: AppStoreReviewDetailRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appStoreVersion': AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON(value['appStoreVersion']),
        'appStoreReviewAttachments': AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsToJSON(value['appStoreReviewAttachments']),
    };
}

