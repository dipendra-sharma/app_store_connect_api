
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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { AppRelationshipsBetaAppReviewDetailData } from './AppRelationshipsBetaAppReviewDetailData';
import {
    AppRelationshipsBetaAppReviewDetailDataFromJSON,
    AppRelationshipsBetaAppReviewDetailDataFromJSONTyped,
    AppRelationshipsBetaAppReviewDetailDataToJSON,
    AppRelationshipsBetaAppReviewDetailDataToJSONTyped,
} from './AppRelationshipsBetaAppReviewDetailData';

/**
 * 
 * @export
 * @interface AppRelationshipsBetaAppReviewDetail
 */
export interface AppRelationshipsBetaAppReviewDetail {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsBetaAppReviewDetail
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppRelationshipsBetaAppReviewDetailData}
     * @memberof AppRelationshipsBetaAppReviewDetail
     */
    data?: AppRelationshipsBetaAppReviewDetailData;
}

/**
 * Check if a given object implements the AppRelationshipsBetaAppReviewDetail interface.
 */
export function instanceOfAppRelationshipsBetaAppReviewDetail(value: object): value is AppRelationshipsBetaAppReviewDetail {
    return true;
}

export function AppRelationshipsBetaAppReviewDetailFromJSON(json: any): AppRelationshipsBetaAppReviewDetail {
    return AppRelationshipsBetaAppReviewDetailFromJSONTyped(json, false);
}

export function AppRelationshipsBetaAppReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaAppReviewDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : AppRelationshipsBetaAppReviewDetailDataFromJSON(json['data']),
    };
}

export function AppRelationshipsBetaAppReviewDetailToJSON(json: any): AppRelationshipsBetaAppReviewDetail {
    return AppRelationshipsBetaAppReviewDetailToJSONTyped(json, false);
}

export function AppRelationshipsBetaAppReviewDetailToJSONTyped(value?: AppRelationshipsBetaAppReviewDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': AppRelationshipsBetaAppReviewDetailDataToJSON(value['data']),
    };
}

