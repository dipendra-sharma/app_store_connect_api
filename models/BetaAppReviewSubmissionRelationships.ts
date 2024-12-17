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
import type { AppStoreVersionRelationshipsBuild } from './AppStoreVersionRelationshipsBuild';
import {
    AppStoreVersionRelationshipsBuildFromJSON,
    AppStoreVersionRelationshipsBuildFromJSONTyped,
    AppStoreVersionRelationshipsBuildToJSON,
    AppStoreVersionRelationshipsBuildToJSONTyped,
} from './AppStoreVersionRelationshipsBuild';

/**
 * 
 * @export
 * @interface BetaAppReviewSubmissionRelationships
 */
export interface BetaAppReviewSubmissionRelationships {
    /**
     * 
     * @type {AppStoreVersionRelationshipsBuild}
     * @memberof BetaAppReviewSubmissionRelationships
     */
    build?: AppStoreVersionRelationshipsBuild;
}

/**
 * Check if a given object implements the BetaAppReviewSubmissionRelationships interface.
 */
export function instanceOfBetaAppReviewSubmissionRelationships(value: object): value is BetaAppReviewSubmissionRelationships {
    return true;
}

export function BetaAppReviewSubmissionRelationshipsFromJSON(json: any): BetaAppReviewSubmissionRelationships {
    return BetaAppReviewSubmissionRelationshipsFromJSONTyped(json, false);
}

export function BetaAppReviewSubmissionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewSubmissionRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'build': json['build'] == null ? undefined : AppStoreVersionRelationshipsBuildFromJSON(json['build']),
    };
}

export function BetaAppReviewSubmissionRelationshipsToJSON(json: any): BetaAppReviewSubmissionRelationships {
    return BetaAppReviewSubmissionRelationshipsToJSONTyped(json, false);
}

export function BetaAppReviewSubmissionRelationshipsToJSONTyped(value?: BetaAppReviewSubmissionRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'build': AppStoreVersionRelationshipsBuildToJSON(value['build']),
    };
}

