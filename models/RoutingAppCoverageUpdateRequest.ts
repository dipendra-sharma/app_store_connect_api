
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
import type { RoutingAppCoverageUpdateRequestData } from './RoutingAppCoverageUpdateRequestData';
import {
    RoutingAppCoverageUpdateRequestDataFromJSON,
    RoutingAppCoverageUpdateRequestDataFromJSONTyped,
    RoutingAppCoverageUpdateRequestDataToJSON,
    RoutingAppCoverageUpdateRequestDataToJSONTyped,
} from './RoutingAppCoverageUpdateRequestData';

/**
 * 
 * @export
 * @interface RoutingAppCoverageUpdateRequest
 */
export interface RoutingAppCoverageUpdateRequest {
    /**
     * 
     * @type {RoutingAppCoverageUpdateRequestData}
     * @memberof RoutingAppCoverageUpdateRequest
     */
    data: RoutingAppCoverageUpdateRequestData;
}

/**
 * Check if a given object implements the RoutingAppCoverageUpdateRequest interface.
 */
export function instanceOfRoutingAppCoverageUpdateRequest(value: object): value is RoutingAppCoverageUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function RoutingAppCoverageUpdateRequestFromJSON(json: any): RoutingAppCoverageUpdateRequest {
    return RoutingAppCoverageUpdateRequestFromJSONTyped(json, false);
}

export function RoutingAppCoverageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': RoutingAppCoverageUpdateRequestDataFromJSON(json['data']),
    };
}

export function RoutingAppCoverageUpdateRequestToJSON(json: any): RoutingAppCoverageUpdateRequest {
    return RoutingAppCoverageUpdateRequestToJSONTyped(json, false);
}

export function RoutingAppCoverageUpdateRequestToJSONTyped(value?: RoutingAppCoverageUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': RoutingAppCoverageUpdateRequestDataToJSON(value['data']),
    };
}
