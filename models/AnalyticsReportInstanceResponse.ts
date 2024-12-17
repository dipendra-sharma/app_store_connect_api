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
import type { AnalyticsReportInstance } from './AnalyticsReportInstance';
import {
    AnalyticsReportInstanceFromJSON,
    AnalyticsReportInstanceFromJSONTyped,
    AnalyticsReportInstanceToJSON,
    AnalyticsReportInstanceToJSONTyped,
} from './AnalyticsReportInstance';
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
 * @interface AnalyticsReportInstanceResponse
 */
export interface AnalyticsReportInstanceResponse {
    /**
     * 
     * @type {AnalyticsReportInstance}
     * @memberof AnalyticsReportInstanceResponse
     */
    data: AnalyticsReportInstance;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AnalyticsReportInstanceResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AnalyticsReportInstanceResponse interface.
 */
export function instanceOfAnalyticsReportInstanceResponse(value: object): value is AnalyticsReportInstanceResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AnalyticsReportInstanceResponseFromJSON(json: any): AnalyticsReportInstanceResponse {
    return AnalyticsReportInstanceResponseFromJSONTyped(json, false);
}

export function AnalyticsReportInstanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportInstanceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AnalyticsReportInstanceFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AnalyticsReportInstanceResponseToJSON(json: any): AnalyticsReportInstanceResponse {
    return AnalyticsReportInstanceResponseToJSONTyped(json, false);
}

export function AnalyticsReportInstanceResponseToJSONTyped(value?: AnalyticsReportInstanceResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AnalyticsReportInstanceToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

