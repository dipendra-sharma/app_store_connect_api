
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
import type { XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner } from './XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner';
import {
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSON,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSONTyped,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerToJSON,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerToJSONTyped,
} from './XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner';
import type { XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit } from './XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit';
import {
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSON,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSONTyped,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSON,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSONTyped,
} from './XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit';
import type { XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner } from './XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner';
import {
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSON,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSON,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSONTyped,
} from './XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner';

/**
 * 
 * @export
 * @interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner
 */
export interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner {
    /**
     * 
     * @type {string}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner
     */
    identifier?: string;
    /**
     * 
     * @type {Array<XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner>}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner
     */
    goalKeys?: Array<XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner>;
    /**
     * 
     * @type {XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner
     */
    unit?: XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit;
    /**
     * 
     * @type {Array<XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner>}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner
     */
    datasets?: Array<XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner>;
}

/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner interface.
 */
export function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner(value: object): value is XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner {
    return true;
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'goalKeys': json['goalKeys'] == null ? undefined : ((json['goalKeys'] as Array<any>).map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSON)),
        'unit': json['unit'] == null ? undefined : XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSON(json['unit']),
        'datasets': json['datasets'] == null ? undefined : ((json['datasets'] as Array<any>).map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSON)),
    };
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerToJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerToJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerToJSONTyped(value?: XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'identifier': value['identifier'],
        'goalKeys': value['goalKeys'] == null ? undefined : ((value['goalKeys'] as Array<any>).map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSON)),
        'unit': XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSON(value['unit']),
        'datasets': value['datasets'] == null ? undefined : ((value['datasets'] as Array<any>).map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerToJSON)),
    };
}
