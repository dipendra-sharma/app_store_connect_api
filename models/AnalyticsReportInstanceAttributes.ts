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
 * @interface AnalyticsReportInstanceAttributes
 */
export interface AnalyticsReportInstanceAttributes {
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReportInstanceAttributes
     */
    granularity?: AnalyticsReportInstanceAttributesGranularityEnum;
    /**
     * 
     * @type {Date}
     * @memberof AnalyticsReportInstanceAttributes
     */
    processingDate?: Date;
}


/**
 * @export
 */
export const AnalyticsReportInstanceAttributesGranularityEnum = {
    Daily: 'DAILY',
    Weekly: 'WEEKLY',
    Monthly: 'MONTHLY'
} as const;
export type AnalyticsReportInstanceAttributesGranularityEnum = typeof AnalyticsReportInstanceAttributesGranularityEnum[keyof typeof AnalyticsReportInstanceAttributesGranularityEnum];


/**
 * Check if a given object implements the AnalyticsReportInstanceAttributes interface.
 */
export function instanceOfAnalyticsReportInstanceAttributes(value: object): value is AnalyticsReportInstanceAttributes {
    return true;
}

export function AnalyticsReportInstanceAttributesFromJSON(json: any): AnalyticsReportInstanceAttributes {
    return AnalyticsReportInstanceAttributesFromJSONTyped(json, false);
}

export function AnalyticsReportInstanceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportInstanceAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'granularity': json['granularity'] == null ? undefined : json['granularity'],
        'processingDate': json['processingDate'] == null ? undefined : (new Date(json['processingDate'])),
    };
}

export function AnalyticsReportInstanceAttributesToJSON(json: any): AnalyticsReportInstanceAttributes {
    return AnalyticsReportInstanceAttributesToJSONTyped(json, false);
}

export function AnalyticsReportInstanceAttributesToJSONTyped(value?: AnalyticsReportInstanceAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'granularity': value['granularity'],
        'processingDate': value['processingDate'] == null ? undefined : ((value['processingDate']).toISOString().substring(0,10)),
    };
}

