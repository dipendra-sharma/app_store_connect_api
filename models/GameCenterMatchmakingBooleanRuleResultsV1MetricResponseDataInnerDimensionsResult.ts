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
import type { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks } from './GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks';
import {
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksFromJSON,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksFromJSONTyped,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksToJSON,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksToJSONTyped,
} from './GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult
 */
export interface GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult {
    /**
     * 
     * @type {GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks}
     * @memberof GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult
     */
    links?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult
     */
    data?: string;
}

/**
 * Check if a given object implements the GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult interface.
 */
export function instanceOfGameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult(value: object): value is GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult {
    return true;
}

export function GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResultFromJSON(json: any): GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult {
    return GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResultFromJSONTyped(json, false);
}

export function GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : json['data'],
    };
}

export function GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResultToJSON(json: any): GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult {
    return GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResultToJSONTyped(json, false);
}

export function GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResultToJSONTyped(value?: GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDimensionsResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksToJSON(value['links']),
        'data': value['data'],
    };
}

