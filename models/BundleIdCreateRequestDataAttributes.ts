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
 * @interface BundleIdCreateRequestDataAttributes
 */
export interface BundleIdCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BundleIdCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {BundleIdPlatform}
     * @memberof BundleIdCreateRequestDataAttributes
     */
    platform: BundleIdPlatform;
    /**
     * 
     * @type {string}
     * @memberof BundleIdCreateRequestDataAttributes
     */
    identifier: string;
    /**
     * 
     * @type {string}
     * @memberof BundleIdCreateRequestDataAttributes
     */
    seedId?: string;
}



/**
 * Check if a given object implements the BundleIdCreateRequestDataAttributes interface.
 */
export function instanceOfBundleIdCreateRequestDataAttributes(value: object): value is BundleIdCreateRequestDataAttributes {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('platform' in value) || value['platform'] === undefined) return false;
    if (!('identifier' in value) || value['identifier'] === undefined) return false;
    return true;
}

export function BundleIdCreateRequestDataAttributesFromJSON(json: any): BundleIdCreateRequestDataAttributes {
    return BundleIdCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function BundleIdCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'platform': BundleIdPlatformFromJSON(json['platform']),
        'identifier': json['identifier'],
        'seedId': json['seedId'] == null ? undefined : json['seedId'],
    };
}

export function BundleIdCreateRequestDataAttributesToJSON(json: any): BundleIdCreateRequestDataAttributes {
    return BundleIdCreateRequestDataAttributesToJSONTyped(json, false);
}

export function BundleIdCreateRequestDataAttributesToJSONTyped(value?: BundleIdCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'platform': BundleIdPlatformToJSON(value['platform']),
        'identifier': value['identifier'],
        'seedId': value['seedId'],
    };
}

