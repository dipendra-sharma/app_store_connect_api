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
import type { AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues } from './AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues';
import {
    AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesFromJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesFromJSONTyped,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesToJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesToJSONTyped,
} from './AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues';

/**
 * 
 * @export
 * @interface AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints
 */
export interface AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints {
    /**
     * 
     * @type {Date}
     * @memberof AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints
     */
    start?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints
     */
    end?: Date;
    /**
     * 
     * @type {AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues}
     * @memberof AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints
     */
    values?: AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues;
}

/**
 * Check if a given object implements the AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints interface.
 */
export function instanceOfAppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints(value: object): value is AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints {
    return true;
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsFromJSON(json: any): AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints {
    return AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped(json, false);
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints {
    if (json == null) {
        return json;
    }
    return {
        
        'start': json['start'] == null ? undefined : (new Date(json['start'])),
        'end': json['end'] == null ? undefined : (new Date(json['end'])),
        'values': json['values'] == null ? undefined : AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesFromJSON(json['values']),
    };
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsToJSON(json: any): AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints {
    return AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsToJSONTyped(json, false);
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsToJSONTyped(value?: AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'start': value['start'] == null ? undefined : ((value['start']).toISOString()),
        'end': value['end'] == null ? undefined : ((value['end']).toISOString()),
        'values': AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesToJSON(value['values']),
    };
}

