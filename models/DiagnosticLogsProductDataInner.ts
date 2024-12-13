
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
import type { DiagnosticLogsProductDataInnerDiagnosticInsightsInner } from './DiagnosticLogsProductDataInnerDiagnosticInsightsInner';
import {
    DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSON,
    DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSONTyped,
    DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSON,
    DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSONTyped,
} from './DiagnosticLogsProductDataInnerDiagnosticInsightsInner';
import type { DiagnosticLogsProductDataInnerDiagnosticLogsInner } from './DiagnosticLogsProductDataInnerDiagnosticLogsInner';
import {
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSONTyped,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSONTyped,
} from './DiagnosticLogsProductDataInnerDiagnosticLogsInner';

/**
 * 
 * @export
 * @interface DiagnosticLogsProductDataInner
 */
export interface DiagnosticLogsProductDataInner {
    /**
     * 
     * @type {string}
     * @memberof DiagnosticLogsProductDataInner
     */
    signatureId?: string;
    /**
     * 
     * @type {Array<DiagnosticLogsProductDataInnerDiagnosticInsightsInner>}
     * @memberof DiagnosticLogsProductDataInner
     */
    diagnosticInsights?: Array<DiagnosticLogsProductDataInnerDiagnosticInsightsInner>;
    /**
     * 
     * @type {Array<DiagnosticLogsProductDataInnerDiagnosticLogsInner>}
     * @memberof DiagnosticLogsProductDataInner
     */
    diagnosticLogs?: Array<DiagnosticLogsProductDataInnerDiagnosticLogsInner>;
}

/**
 * Check if a given object implements the DiagnosticLogsProductDataInner interface.
 */
export function instanceOfDiagnosticLogsProductDataInner(value: object): value is DiagnosticLogsProductDataInner {
    return true;
}

export function DiagnosticLogsProductDataInnerFromJSON(json: any): DiagnosticLogsProductDataInner {
    return DiagnosticLogsProductDataInnerFromJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogsProductDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'signatureId': json['signatureId'] == null ? undefined : json['signatureId'],
        'diagnosticInsights': json['diagnosticInsights'] == null ? undefined : ((json['diagnosticInsights'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSON)),
        'diagnosticLogs': json['diagnosticLogs'] == null ? undefined : ((json['diagnosticLogs'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSON)),
    };
}

export function DiagnosticLogsProductDataInnerToJSON(json: any): DiagnosticLogsProductDataInner {
    return DiagnosticLogsProductDataInnerToJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerToJSONTyped(value?: DiagnosticLogsProductDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'signatureId': value['signatureId'],
        'diagnosticInsights': value['diagnosticInsights'] == null ? undefined : ((value['diagnosticInsights'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSON)),
        'diagnosticLogs': value['diagnosticLogs'] == null ? undefined : ((value['diagnosticLogs'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSON)),
    };
}
