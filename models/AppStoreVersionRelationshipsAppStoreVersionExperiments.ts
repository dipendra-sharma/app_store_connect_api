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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData } from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData';
import {
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSONTyped,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataToJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataToJSONTyped,
} from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData';

/**
 * 
 * @export
 * @interface AppStoreVersionRelationshipsAppStoreVersionExperiments
 */
export interface AppStoreVersionRelationshipsAppStoreVersionExperiments {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionExperiments
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionExperiments
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData>}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionExperiments
     */
    data?: Array<AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData>;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppStoreVersionExperiments interface.
 */
export function instanceOfAppStoreVersionRelationshipsAppStoreVersionExperiments(value: object): value is AppStoreVersionRelationshipsAppStoreVersionExperiments {
    return true;
}

export function AppStoreVersionRelationshipsAppStoreVersionExperimentsFromJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionExperiments {
    return AppStoreVersionRelationshipsAppStoreVersionExperimentsFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionExperimentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAppStoreVersionExperiments {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSON)),
    };
}

export function AppStoreVersionRelationshipsAppStoreVersionExperimentsToJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionExperiments {
    return AppStoreVersionRelationshipsAppStoreVersionExperimentsToJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionExperimentsToJSONTyped(value?: AppStoreVersionRelationshipsAppStoreVersionExperiments | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataToJSON)),
    };
}

