
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
import type { AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters } from './AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters';
import {
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSONTyped,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSONTyped,
} from './AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters';
import type { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult } from './GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult';
import {
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultFromJSON,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultFromJSONTyped,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultToJSON,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultToJSONTyped,
} from './GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions
 */
export interface GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    /**
     * 
     * @type {GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions
     */
    result?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult;
    /**
     * 
     * @type {AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions
     */
    gameCenterDetail?: AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions interface.
 */
export function instanceOfGameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions(value: object): value is GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    return true;
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSON(json: any): GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    return GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultFromJSON(json['result']),
        'gameCenterDetail': json['gameCenterDetail'] == null ? undefined : AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON(json['gameCenterDetail']),
    };
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsToJSON(json: any): GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    return GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsToJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsToJSONTyped(value?: GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultToJSON(value['result']),
        'gameCenterDetail': AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON(value['gameCenterDetail']),
    };
}

