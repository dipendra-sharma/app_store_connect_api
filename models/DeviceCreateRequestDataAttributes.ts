
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
import type { BundleIdPlatform } from './BundleIdPlatform';
import {
    BundleIdPlatformFromJSON,
    BundleIdPlatformFromJSONTyped,
    BundleIdPlatformToJSON,
    BundleIdPlatformToJSONTyped,
} from './BundleIdPlatform';

/**
 * 
 * @export
 * @interface DeviceCreateRequestDataAttributes
 */
export interface DeviceCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof DeviceCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {BundleIdPlatform}
     * @memberof DeviceCreateRequestDataAttributes
     */
    platform: BundleIdPlatform;
    /**
     * 
     * @type {string}
     * @memberof DeviceCreateRequestDataAttributes
     */
    udid: string;
}



/**
 * Check if a given object implements the DeviceCreateRequestDataAttributes interface.
 */
export function instanceOfDeviceCreateRequestDataAttributes(value: object): value is DeviceCreateRequestDataAttributes {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('platform' in value) || value['platform'] === undefined) return false;
    if (!('udid' in value) || value['udid'] === undefined) return false;
    return true;
}

export function DeviceCreateRequestDataAttributesFromJSON(json: any): DeviceCreateRequestDataAttributes {
    return DeviceCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function DeviceCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'platform': BundleIdPlatformFromJSON(json['platform']),
        'udid': json['udid'],
    };
}

export function DeviceCreateRequestDataAttributesToJSON(json: any): DeviceCreateRequestDataAttributes {
    return DeviceCreateRequestDataAttributesToJSONTyped(json, false);
}

export function DeviceCreateRequestDataAttributesToJSONTyped(value?: DeviceCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'platform': BundleIdPlatformToJSON(value['platform']),
        'udid': value['udid'],
    };
}
