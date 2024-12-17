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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
import type { AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData } from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';
import {
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSONTyped,
} from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppClipRelationshipsAppClipDefaultExperiences
 */
export interface AppClipRelationshipsAppClipDefaultExperiences {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppClipRelationshipsAppClipDefaultExperiences
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppClipRelationshipsAppClipDefaultExperiences
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData>}
     * @memberof AppClipRelationshipsAppClipDefaultExperiences
     */
    data?: Array<AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData>;
}

/**
 * Check if a given object implements the AppClipRelationshipsAppClipDefaultExperiences interface.
 */
export function instanceOfAppClipRelationshipsAppClipDefaultExperiences(value: object): value is AppClipRelationshipsAppClipDefaultExperiences {
    return true;
}

export function AppClipRelationshipsAppClipDefaultExperiencesFromJSON(json: any): AppClipRelationshipsAppClipDefaultExperiences {
    return AppClipRelationshipsAppClipDefaultExperiencesFromJSONTyped(json, false);
}

export function AppClipRelationshipsAppClipDefaultExperiencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipRelationshipsAppClipDefaultExperiences {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON)),
    };
}

export function AppClipRelationshipsAppClipDefaultExperiencesToJSON(json: any): AppClipRelationshipsAppClipDefaultExperiences {
    return AppClipRelationshipsAppClipDefaultExperiencesToJSONTyped(json, false);
}

export function AppClipRelationshipsAppClipDefaultExperiencesToJSONTyped(value?: AppClipRelationshipsAppClipDefaultExperiences | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON)),
    };
}

