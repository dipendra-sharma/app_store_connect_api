
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
 * @interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner
 */
export interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner {
    /**
     * 
     * @type {string}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner
     */
    goalKey?: string;
    /**
     * 
     * @type {number}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner
     */
    lowerBound?: number;
    /**
     * 
     * @type {number}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner
     */
    upperBound?: number;
}

/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner interface.
 */
export function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner(value: object): value is XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner {
    return true;
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner {
    if (json == null) {
        return json;
    }
    return {
        
        'goalKey': json['goalKey'] == null ? undefined : json['goalKey'],
        'lowerBound': json['lowerBound'] == null ? undefined : json['lowerBound'],
        'upperBound': json['upperBound'] == null ? undefined : json['upperBound'],
    };
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSONTyped(value?: XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'goalKey': value['goalKey'],
        'lowerBound': value['lowerBound'],
        'upperBound': value['upperBound'],
    };
}
