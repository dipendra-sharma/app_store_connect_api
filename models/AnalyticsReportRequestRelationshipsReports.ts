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
import type { AnalyticsReportRequestRelationshipsReportsDataInner } from './AnalyticsReportRequestRelationshipsReportsDataInner';
import {
    AnalyticsReportRequestRelationshipsReportsDataInnerFromJSON,
    AnalyticsReportRequestRelationshipsReportsDataInnerFromJSONTyped,
    AnalyticsReportRequestRelationshipsReportsDataInnerToJSON,
    AnalyticsReportRequestRelationshipsReportsDataInnerToJSONTyped,
} from './AnalyticsReportRequestRelationshipsReportsDataInner';
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
 * @interface AnalyticsReportRequestRelationshipsReports
 */
export interface AnalyticsReportRequestRelationshipsReports {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AnalyticsReportRequestRelationshipsReports
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AnalyticsReportRequestRelationshipsReports
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AnalyticsReportRequestRelationshipsReportsDataInner>}
     * @memberof AnalyticsReportRequestRelationshipsReports
     */
    data?: Array<AnalyticsReportRequestRelationshipsReportsDataInner>;
}

/**
 * Check if a given object implements the AnalyticsReportRequestRelationshipsReports interface.
 */
export function instanceOfAnalyticsReportRequestRelationshipsReports(value: object): value is AnalyticsReportRequestRelationshipsReports {
    return true;
}

export function AnalyticsReportRequestRelationshipsReportsFromJSON(json: any): AnalyticsReportRequestRelationshipsReports {
    return AnalyticsReportRequestRelationshipsReportsFromJSONTyped(json, false);
}

export function AnalyticsReportRequestRelationshipsReportsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequestRelationshipsReports {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AnalyticsReportRequestRelationshipsReportsDataInnerFromJSON)),
    };
}

export function AnalyticsReportRequestRelationshipsReportsToJSON(json: any): AnalyticsReportRequestRelationshipsReports {
    return AnalyticsReportRequestRelationshipsReportsToJSONTyped(json, false);
}

export function AnalyticsReportRequestRelationshipsReportsToJSONTyped(value?: AnalyticsReportRequestRelationshipsReports | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AnalyticsReportRequestRelationshipsReportsDataInnerToJSON)),
    };
}

