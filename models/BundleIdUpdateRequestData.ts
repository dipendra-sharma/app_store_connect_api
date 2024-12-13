
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
import type { BundleIdUpdateRequestDataAttributes } from './BundleIdUpdateRequestDataAttributes';
import {
    BundleIdUpdateRequestDataAttributesFromJSON,
    BundleIdUpdateRequestDataAttributesFromJSONTyped,
    BundleIdUpdateRequestDataAttributesToJSON,
    BundleIdUpdateRequestDataAttributesToJSONTyped,
} from './BundleIdUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BundleIdUpdateRequestData
 */
export interface BundleIdUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BundleIdUpdateRequestData
     */
    type: BundleIdUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BundleIdUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BundleIdUpdateRequestDataAttributes}
     * @memberof BundleIdUpdateRequestData
     */
    attributes?: BundleIdUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const BundleIdUpdateRequestDataTypeEnum = {
    BundleIds: 'bundleIds'
} as const;
export type BundleIdUpdateRequestDataTypeEnum = typeof BundleIdUpdateRequestDataTypeEnum[keyof typeof BundleIdUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BundleIdUpdateRequestData interface.
 */
export function instanceOfBundleIdUpdateRequestData(value: object): value is BundleIdUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BundleIdUpdateRequestDataFromJSON(json: any): BundleIdUpdateRequestData {
    return BundleIdUpdateRequestDataFromJSONTyped(json, false);
}

export function BundleIdUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BundleIdUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BundleIdUpdateRequestDataToJSON(json: any): BundleIdUpdateRequestData {
    return BundleIdUpdateRequestDataToJSONTyped(json, false);
}

export function BundleIdUpdateRequestDataToJSONTyped(value?: BundleIdUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BundleIdUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

