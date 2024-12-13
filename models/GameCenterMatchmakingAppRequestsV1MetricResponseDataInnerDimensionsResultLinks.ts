
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
 * @interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks
 */
export interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks
     */
    groupBy?: string;
}

/**
 * Check if a given object implements the GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks interface.
 */
export function instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks(value: object): value is GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks {
    return true;
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksFromJSON(json: any): GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks {
    return GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksFromJSONTyped(json, false);
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks {
    if (json == null) {
        return json;
    }
    return {
        
        'groupBy': json['groupBy'] == null ? undefined : json['groupBy'],
    };
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksToJSON(json: any): GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks {
    return GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksToJSONTyped(json, false);
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinksToJSONTyped(value?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultLinks | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'groupBy': value['groupBy'],
    };
}
