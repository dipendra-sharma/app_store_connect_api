
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
import type { AnalyticsReport } from './AnalyticsReport';
import {
    AnalyticsReportFromJSON,
    AnalyticsReportFromJSONTyped,
    AnalyticsReportToJSON,
    AnalyticsReportToJSONTyped,
} from './AnalyticsReport';
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
 * @interface AnalyticsReportsResponse
 */
export interface AnalyticsReportsResponse {
    /**
     * 
     * @type {Array<AnalyticsReport>}
     * @memberof AnalyticsReportsResponse
     */
    data: Array<AnalyticsReport>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AnalyticsReportsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AnalyticsReportsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AnalyticsReportsResponse interface.
 */
export function instanceOfAnalyticsReportsResponse(value: object): value is AnalyticsReportsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AnalyticsReportsResponseFromJSON(json: any): AnalyticsReportsResponse {
    return AnalyticsReportsResponseFromJSONTyped(json, false);
}

export function AnalyticsReportsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AnalyticsReportFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AnalyticsReportsResponseToJSON(json: any): AnalyticsReportsResponse {
    return AnalyticsReportsResponseToJSONTyped(json, false);
}

export function AnalyticsReportsResponseToJSONTyped(value?: AnalyticsReportsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AnalyticsReportToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
