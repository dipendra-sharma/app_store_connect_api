
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
import type { AnalyticsReportSegment } from './AnalyticsReportSegment';
import {
    AnalyticsReportSegmentFromJSON,
    AnalyticsReportSegmentFromJSONTyped,
    AnalyticsReportSegmentToJSON,
    AnalyticsReportSegmentToJSONTyped,
} from './AnalyticsReportSegment';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface AnalyticsReportSegmentsResponse
 */
export interface AnalyticsReportSegmentsResponse {
    /**
     * 
     * @type {Array<AnalyticsReportSegment>}
     * @memberof AnalyticsReportSegmentsResponse
     */
    data: Array<AnalyticsReportSegment>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AnalyticsReportSegmentsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AnalyticsReportSegmentsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AnalyticsReportSegmentsResponse interface.
 */
export function instanceOfAnalyticsReportSegmentsResponse(value: object): value is AnalyticsReportSegmentsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AnalyticsReportSegmentsResponseFromJSON(json: any): AnalyticsReportSegmentsResponse {
    return AnalyticsReportSegmentsResponseFromJSONTyped(json, false);
}

export function AnalyticsReportSegmentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportSegmentsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AnalyticsReportSegmentFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AnalyticsReportSegmentsResponseToJSON(json: any): AnalyticsReportSegmentsResponse {
    return AnalyticsReportSegmentsResponseToJSONTyped(json, false);
}

export function AnalyticsReportSegmentsResponseToJSONTyped(value?: AnalyticsReportSegmentsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AnalyticsReportSegmentToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

