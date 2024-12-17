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
import type { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSONTyped,
} from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import type { ReviewSubmissionRelationshipsSubmittedByActor } from './ReviewSubmissionRelationshipsSubmittedByActor';
import {
    ReviewSubmissionRelationshipsSubmittedByActorFromJSON,
    ReviewSubmissionRelationshipsSubmittedByActorFromJSONTyped,
    ReviewSubmissionRelationshipsSubmittedByActorToJSON,
    ReviewSubmissionRelationshipsSubmittedByActorToJSONTyped,
} from './ReviewSubmissionRelationshipsSubmittedByActor';
import type { ReviewSubmissionRelationshipsItems } from './ReviewSubmissionRelationshipsItems';
import {
    ReviewSubmissionRelationshipsItemsFromJSON,
    ReviewSubmissionRelationshipsItemsFromJSONTyped,
    ReviewSubmissionRelationshipsItemsToJSON,
    ReviewSubmissionRelationshipsItemsToJSONTyped,
} from './ReviewSubmissionRelationshipsItems';
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface ReviewSubmissionRelationships
 */
export interface ReviewSubmissionRelationships {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof ReviewSubmissionRelationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {ReviewSubmissionRelationshipsItems}
     * @memberof ReviewSubmissionRelationships
     */
    items?: ReviewSubmissionRelationshipsItems;
    /**
     * 
     * @type {AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion}
     * @memberof ReviewSubmissionRelationships
     */
    appStoreVersionForReview?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {ReviewSubmissionRelationshipsSubmittedByActor}
     * @memberof ReviewSubmissionRelationships
     */
    submittedByActor?: ReviewSubmissionRelationshipsSubmittedByActor;
    /**
     * 
     * @type {ReviewSubmissionRelationshipsSubmittedByActor}
     * @memberof ReviewSubmissionRelationships
     */
    lastUpdatedByActor?: ReviewSubmissionRelationshipsSubmittedByActor;
}

/**
 * Check if a given object implements the ReviewSubmissionRelationships interface.
 */
export function instanceOfReviewSubmissionRelationships(value: object): value is ReviewSubmissionRelationships {
    return true;
}

export function ReviewSubmissionRelationshipsFromJSON(json: any): ReviewSubmissionRelationships {
    return ReviewSubmissionRelationshipsFromJSONTyped(json, false);
}

export function ReviewSubmissionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': json['app'] == null ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'items': json['items'] == null ? undefined : ReviewSubmissionRelationshipsItemsFromJSON(json['items']),
        'appStoreVersionForReview': json['appStoreVersionForReview'] == null ? undefined : AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON(json['appStoreVersionForReview']),
        'submittedByActor': json['submittedByActor'] == null ? undefined : ReviewSubmissionRelationshipsSubmittedByActorFromJSON(json['submittedByActor']),
        'lastUpdatedByActor': json['lastUpdatedByActor'] == null ? undefined : ReviewSubmissionRelationshipsSubmittedByActorFromJSON(json['lastUpdatedByActor']),
    };
}

export function ReviewSubmissionRelationshipsToJSON(json: any): ReviewSubmissionRelationships {
    return ReviewSubmissionRelationshipsToJSONTyped(json, false);
}

export function ReviewSubmissionRelationshipsToJSONTyped(value?: ReviewSubmissionRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value['app']),
        'items': ReviewSubmissionRelationshipsItemsToJSON(value['items']),
        'appStoreVersionForReview': AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON(value['appStoreVersionForReview']),
        'submittedByActor': ReviewSubmissionRelationshipsSubmittedByActorToJSON(value['submittedByActor']),
        'lastUpdatedByActor': ReviewSubmissionRelationshipsSubmittedByActorToJSON(value['lastUpdatedByActor']),
    };
}

