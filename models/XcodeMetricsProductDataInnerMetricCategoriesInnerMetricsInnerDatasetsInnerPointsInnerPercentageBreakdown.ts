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
 * @interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown
 */
export interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown {
    /**
     * 
     * @type {number}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown
     */
    value?: number;
    /**
     * 
     * @type {string}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown
     */
    subSystemLabel?: string;
}

/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown interface.
 */
export function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown(value: object): value is XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown {
    return true;
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdownFromJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdownFromJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdownFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'] == null ? undefined : json['value'],
        'subSystemLabel': json['subSystemLabel'] == null ? undefined : json['subSystemLabel'],
    };
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdownToJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdownToJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdownToJSONTyped(value?: XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerPercentageBreakdown | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
        'subSystemLabel': value['subSystemLabel'],
    };
}

