
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
/**
 * 
 * @export
 * @interface DiagnosticLogsProductDataInnerDiagnosticInsightsInner
 */
export interface DiagnosticLogsProductDataInnerDiagnosticInsightsInner {
    /**
     * 
     * @type {string}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticInsightsInner
     */
    insightsURL?: string;
    /**
     * 
     * @type {string}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticInsightsInner
     */
    insightsCategory?: string;
    /**
     * 
     * @type {string}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticInsightsInner
     */
    insightsString?: string;
}

/**
 * Check if a given object implements the DiagnosticLogsProductDataInnerDiagnosticInsightsInner interface.
 */
export function instanceOfDiagnosticLogsProductDataInnerDiagnosticInsightsInner(value: object): value is DiagnosticLogsProductDataInnerDiagnosticInsightsInner {
    return true;
}

export function DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSON(json: any): DiagnosticLogsProductDataInnerDiagnosticInsightsInner {
    return DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogsProductDataInnerDiagnosticInsightsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'insightsURL': json['insightsURL'] == null ? undefined : json['insightsURL'],
        'insightsCategory': json['insightsCategory'] == null ? undefined : json['insightsCategory'],
        'insightsString': json['insightsString'] == null ? undefined : json['insightsString'],
    };
}

export function DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSON(json: any): DiagnosticLogsProductDataInnerDiagnosticInsightsInner {
    return DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSONTyped(value?: DiagnosticLogsProductDataInnerDiagnosticInsightsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'insightsURL': value['insightsURL'],
        'insightsCategory': value['insightsCategory'],
        'insightsString': value['insightsString'],
    };
}
