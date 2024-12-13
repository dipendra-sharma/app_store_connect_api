
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
import type { RoutingAppCoverageCreateRequestData } from './RoutingAppCoverageCreateRequestData';
import {
    RoutingAppCoverageCreateRequestDataFromJSON,
    RoutingAppCoverageCreateRequestDataFromJSONTyped,
    RoutingAppCoverageCreateRequestDataToJSON,
    RoutingAppCoverageCreateRequestDataToJSONTyped,
} from './RoutingAppCoverageCreateRequestData';

/**
 * 
 * @export
 * @interface RoutingAppCoverageCreateRequest
 */
export interface RoutingAppCoverageCreateRequest {
    /**
     * 
     * @type {RoutingAppCoverageCreateRequestData}
     * @memberof RoutingAppCoverageCreateRequest
     */
    data: RoutingAppCoverageCreateRequestData;
}

/**
 * Check if a given object implements the RoutingAppCoverageCreateRequest interface.
 */
export function instanceOfRoutingAppCoverageCreateRequest(value: object): value is RoutingAppCoverageCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function RoutingAppCoverageCreateRequestFromJSON(json: any): RoutingAppCoverageCreateRequest {
    return RoutingAppCoverageCreateRequestFromJSONTyped(json, false);
}

export function RoutingAppCoverageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': RoutingAppCoverageCreateRequestDataFromJSON(json['data']),
    };
}

export function RoutingAppCoverageCreateRequestToJSON(json: any): RoutingAppCoverageCreateRequest {
    return RoutingAppCoverageCreateRequestToJSONTyped(json, false);
}

export function RoutingAppCoverageCreateRequestToJSONTyped(value?: RoutingAppCoverageCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': RoutingAppCoverageCreateRequestDataToJSON(value['data']),
    };
}
