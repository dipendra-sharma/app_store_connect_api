
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
import type { AnalyticsReportSegment } from './AnalyticsReportSegment';
import {
    AnalyticsReportSegmentFromJSON,
    AnalyticsReportSegmentFromJSONTyped,
    AnalyticsReportSegmentToJSON,
    AnalyticsReportSegmentToJSONTyped,
} from './AnalyticsReportSegment';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AnalyticsReportSegmentResponse
 */
export interface AnalyticsReportSegmentResponse {
    /**
     * 
     * @type {AnalyticsReportSegment}
     * @memberof AnalyticsReportSegmentResponse
     */
    data: AnalyticsReportSegment;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AnalyticsReportSegmentResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AnalyticsReportSegmentResponse interface.
 */
export function instanceOfAnalyticsReportSegmentResponse(value: object): value is AnalyticsReportSegmentResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AnalyticsReportSegmentResponseFromJSON(json: any): AnalyticsReportSegmentResponse {
    return AnalyticsReportSegmentResponseFromJSONTyped(json, false);
}

export function AnalyticsReportSegmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportSegmentResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AnalyticsReportSegmentFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AnalyticsReportSegmentResponseToJSON(json: any): AnalyticsReportSegmentResponse {
    return AnalyticsReportSegmentResponseToJSONTyped(json, false);
}

export function AnalyticsReportSegmentResponseToJSONTyped(value?: AnalyticsReportSegmentResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AnalyticsReportSegmentToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}
