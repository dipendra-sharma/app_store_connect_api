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
import type { DeviceAttributes } from './DeviceAttributes';
import {
    DeviceAttributesFromJSON,
    DeviceAttributesFromJSONTyped,
    DeviceAttributesToJSON,
    DeviceAttributesToJSONTyped,
} from './DeviceAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface Device
 */
export interface Device {
    /**
     * 
     * @type {string}
     * @memberof Device
     */
    type: DeviceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Device
     */
    id: string;
    /**
     * 
     * @type {DeviceAttributes}
     * @memberof Device
     */
    attributes?: DeviceAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof Device
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const DeviceTypeEnum = {
    Devices: 'devices'
} as const;
export type DeviceTypeEnum = typeof DeviceTypeEnum[keyof typeof DeviceTypeEnum];


/**
 * Check if a given object implements the Device interface.
 */
export function instanceOfDevice(value: object): value is Device {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function DeviceFromJSON(json: any): Device {
    return DeviceFromJSONTyped(json, false);
}

export function DeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Device {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : DeviceAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function DeviceToJSON(json: any): Device {
    return DeviceToJSONTyped(json, false);
}

export function DeviceToJSONTyped(value?: Device | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': DeviceAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

