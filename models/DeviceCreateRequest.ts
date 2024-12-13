
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
import type { DeviceCreateRequestData } from './DeviceCreateRequestData';
import {
    DeviceCreateRequestDataFromJSON,
    DeviceCreateRequestDataFromJSONTyped,
    DeviceCreateRequestDataToJSON,
    DeviceCreateRequestDataToJSONTyped,
} from './DeviceCreateRequestData';

/**
 * 
 * @export
 * @interface DeviceCreateRequest
 */
export interface DeviceCreateRequest {
    /**
     * 
     * @type {DeviceCreateRequestData}
     * @memberof DeviceCreateRequest
     */
    data: DeviceCreateRequestData;
}

/**
 * Check if a given object implements the DeviceCreateRequest interface.
 */
export function instanceOfDeviceCreateRequest(value: object): value is DeviceCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function DeviceCreateRequestFromJSON(json: any): DeviceCreateRequest {
    return DeviceCreateRequestFromJSONTyped(json, false);
}

export function DeviceCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': DeviceCreateRequestDataFromJSON(json['data']),
    };
}

export function DeviceCreateRequestToJSON(json: any): DeviceCreateRequest {
    return DeviceCreateRequestToJSONTyped(json, false);
}

export function DeviceCreateRequestToJSONTyped(value?: DeviceCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': DeviceCreateRequestDataToJSON(value['data']),
    };
}

