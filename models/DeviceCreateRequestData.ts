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
import type { DeviceCreateRequestDataAttributes } from './DeviceCreateRequestDataAttributes';
import {
    DeviceCreateRequestDataAttributesFromJSON,
    DeviceCreateRequestDataAttributesFromJSONTyped,
    DeviceCreateRequestDataAttributesToJSON,
    DeviceCreateRequestDataAttributesToJSONTyped,
} from './DeviceCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface DeviceCreateRequestData
 */
export interface DeviceCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof DeviceCreateRequestData
     */
    type: DeviceCreateRequestDataTypeEnum;
    /**
     * 
     * @type {DeviceCreateRequestDataAttributes}
     * @memberof DeviceCreateRequestData
     */
    attributes: DeviceCreateRequestDataAttributes;
}


/**
 * @export
 */
export const DeviceCreateRequestDataTypeEnum = {
    Devices: 'devices'
} as const;
export type DeviceCreateRequestDataTypeEnum = typeof DeviceCreateRequestDataTypeEnum[keyof typeof DeviceCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the DeviceCreateRequestData interface.
 */
export function instanceOfDeviceCreateRequestData(value: object): value is DeviceCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function DeviceCreateRequestDataFromJSON(json: any): DeviceCreateRequestData {
    return DeviceCreateRequestDataFromJSONTyped(json, false);
}

export function DeviceCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': DeviceCreateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function DeviceCreateRequestDataToJSON(json: any): DeviceCreateRequestData {
    return DeviceCreateRequestDataToJSONTyped(json, false);
}

export function DeviceCreateRequestDataToJSONTyped(value?: DeviceCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': DeviceCreateRequestDataAttributesToJSON(value['attributes']),
    };
}

