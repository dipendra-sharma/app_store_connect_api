
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
import type { BundleIdUpdateRequestData } from './BundleIdUpdateRequestData';
import {
    BundleIdUpdateRequestDataFromJSON,
    BundleIdUpdateRequestDataFromJSONTyped,
    BundleIdUpdateRequestDataToJSON,
    BundleIdUpdateRequestDataToJSONTyped,
} from './BundleIdUpdateRequestData';

/**
 * 
 * @export
 * @interface BundleIdUpdateRequest
 */
export interface BundleIdUpdateRequest {
    /**
     * 
     * @type {BundleIdUpdateRequestData}
     * @memberof BundleIdUpdateRequest
     */
    data: BundleIdUpdateRequestData;
}

/**
 * Check if a given object implements the BundleIdUpdateRequest interface.
 */
export function instanceOfBundleIdUpdateRequest(value: object): value is BundleIdUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BundleIdUpdateRequestFromJSON(json: any): BundleIdUpdateRequest {
    return BundleIdUpdateRequestFromJSONTyped(json, false);
}

export function BundleIdUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BundleIdUpdateRequestDataFromJSON(json['data']),
    };
}

export function BundleIdUpdateRequestToJSON(json: any): BundleIdUpdateRequest {
    return BundleIdUpdateRequestToJSONTyped(json, false);
}

export function BundleIdUpdateRequestToJSONTyped(value?: BundleIdUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BundleIdUpdateRequestDataToJSON(value['data']),
    };
}

