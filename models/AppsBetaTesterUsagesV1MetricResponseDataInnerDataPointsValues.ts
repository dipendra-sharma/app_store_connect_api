
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
 * @interface AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues
 */
export interface AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues {
    /**
     * 
     * @type {number}
     * @memberof AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues
     */
    crashCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues
     */
    sessionCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues
     */
    feedbackCount?: number;
}

/**
 * Check if a given object implements the AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues interface.
 */
export function instanceOfAppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues(value: object): value is AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues {
    return true;
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesFromJSON(json: any): AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues {
    return AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, false);
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues {
    if (json == null) {
        return json;
    }
    return {
        
        'crashCount': json['crashCount'] == null ? undefined : json['crashCount'],
        'sessionCount': json['sessionCount'] == null ? undefined : json['sessionCount'],
        'feedbackCount': json['feedbackCount'] == null ? undefined : json['feedbackCount'],
    };
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesToJSON(json: any): AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues {
    return AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesToJSONTyped(json, false);
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesToJSONTyped(value?: AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'crashCount': value['crashCount'],
        'sessionCount': value['sessionCount'],
        'feedbackCount': value['feedbackCount'],
    };
}
