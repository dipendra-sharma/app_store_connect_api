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
import type { GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues } from './GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues';
import {
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSON,
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped,
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSON,
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSONTyped,
} from './GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
 */
export interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints {
    /**
     * 
     * @type {Date}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
     */
    start?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
     */
    end?: Date;
    /**
     * 
     * @type {GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
     */
    values?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues;
}

/**
 * Check if a given object implements the GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints interface.
 */
export function instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints(value: object): value is GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints {
    return true;
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSON(json: any): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints {
    return GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints {
    if (json == null) {
        return json;
    }
    return {
        
        'start': json['start'] == null ? undefined : (new Date(json['start'])),
        'end': json['end'] == null ? undefined : (new Date(json['end'])),
        'values': json['values'] == null ? undefined : GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSON(json['values']),
    };
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsToJSON(json: any): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints {
    return GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsToJSONTyped(json, false);
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsToJSONTyped(value?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'start': value['start'] == null ? undefined : ((value['start']).toISOString()),
        'end': value['end'] == null ? undefined : ((value['end']).toISOString()),
        'values': GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSON(value['values']),
    };
}

