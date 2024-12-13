
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
 * @interface GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues
 */
export interface GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues {
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues
     */
    count?: number;
}

/**
 * Check if a given object implements the GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues interface.
 */
export function instanceOfGameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues(value: object): value is GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues {
    return true;
}

export function GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValuesFromJSON(json: any): GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues {
    return GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
    };
}

export function GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValuesToJSON(json: any): GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues {
    return GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValuesToJSONTyped(json, false);
}

export function GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValuesToJSONTyped(value?: GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsValues | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
    };
}
