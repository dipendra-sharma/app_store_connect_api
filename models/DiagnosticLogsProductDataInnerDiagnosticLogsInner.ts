
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
import type { DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner } from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner';
import {
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSONTyped,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerToJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerToJSONTyped,
} from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner';
import type { DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData } from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData';
import {
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSONTyped,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataToJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataToJSONTyped,
} from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData';

/**
 * 
 * @export
 * @interface DiagnosticLogsProductDataInnerDiagnosticLogsInner
 */
export interface DiagnosticLogsProductDataInnerDiagnosticLogsInner {
    /**
     * 
     * @type {Array<DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner>}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticLogsInner
     */
    callStackTree?: Array<DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner>;
    /**
     * 
     * @type {DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticLogsInner
     */
    diagnosticMetaData?: DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData;
}

/**
 * Check if a given object implements the DiagnosticLogsProductDataInnerDiagnosticLogsInner interface.
 */
export function instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInner(value: object): value is DiagnosticLogsProductDataInnerDiagnosticLogsInner {
    return true;
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSON(json: any): DiagnosticLogsProductDataInnerDiagnosticLogsInner {
    return DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogsProductDataInnerDiagnosticLogsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'callStackTree': json['callStackTree'] == null ? undefined : ((json['callStackTree'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSON)),
        'diagnosticMetaData': json['diagnosticMetaData'] == null ? undefined : DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSON(json['diagnosticMetaData']),
    };
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSON(json: any): DiagnosticLogsProductDataInnerDiagnosticLogsInner {
    return DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSONTyped(value?: DiagnosticLogsProductDataInnerDiagnosticLogsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'callStackTree': value['callStackTree'] == null ? undefined : ((value['callStackTree'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerToJSON)),
        'diagnosticMetaData': DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataToJSON(value['diagnosticMetaData']),
    };
}
