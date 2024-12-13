
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
 * @interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit
 */
export interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit {
    /**
     * 
     * @type {string}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit
     */
    displayName?: string;
}

/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit interface.
 */
export function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit(value: object): value is XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit {
    return true;
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit {
    if (json == null) {
        return json;
    }
    return {
        
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
    };
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSONTyped(value?: XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'identifier': value['identifier'],
        'displayName': value['displayName'],
    };
}
