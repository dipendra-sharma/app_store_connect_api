
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
 * @interface BundleIdAttributes
 */
export interface BundleIdAttributes {
    /**
     * 
     * @type {string}
     * @memberof BundleIdAttributes
     */
    name?: string;
    /**
     * 
     * @type {BundleIdPlatform}
     * @memberof BundleIdAttributes
     */
    platform?: BundleIdPlatform;
    /**
     * 
     * @type {string}
     * @memberof BundleIdAttributes
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof BundleIdAttributes
     */
    seedId?: string;
}



/**
 * Check if a given object implements the BundleIdAttributes interface.
 */
export function instanceOfBundleIdAttributes(value: object): value is BundleIdAttributes {
    return true;
}

export function BundleIdAttributesFromJSON(json: any): BundleIdAttributes {
    return BundleIdAttributesFromJSONTyped(json, false);
}

export function BundleIdAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'platform': json['platform'] == null ? undefined : BundleIdPlatformFromJSON(json['platform']),
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'seedId': json['seedId'] == null ? undefined : json['seedId'],
    };
}

export function BundleIdAttributesToJSON(json: any): BundleIdAttributes {
    return BundleIdAttributesToJSONTyped(json, false);
}

export function BundleIdAttributesToJSONTyped(value?: BundleIdAttributes | null, ignoreDiscriminator: boolean = false): any {
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

