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
import type { BetaGroupCreateRequestData } from './BetaGroupCreateRequestData';
import {
    BetaGroupCreateRequestDataFromJSON,
    BetaGroupCreateRequestDataFromJSONTyped,
    BetaGroupCreateRequestDataToJSON,
    BetaGroupCreateRequestDataToJSONTyped,
} from './BetaGroupCreateRequestData';

/**
 * 
 * @export
 * @interface BetaGroupCreateRequest
 */
export interface BetaGroupCreateRequest {
    /**
     * 
     * @type {BetaGroupCreateRequestData}
     * @memberof BetaGroupCreateRequest
     */
    data: BetaGroupCreateRequestData;
}

/**
 * Check if a given object implements the BetaGroupCreateRequest interface.
 */
export function instanceOfBetaGroupCreateRequest(value: object): value is BetaGroupCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaGroupCreateRequestFromJSON(json: any): BetaGroupCreateRequest {
    return BetaGroupCreateRequestFromJSONTyped(json, false);
}

export function BetaGroupCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaGroupCreateRequestDataFromJSON(json['data']),
    };
}

export function BetaGroupCreateRequestToJSON(json: any): BetaGroupCreateRequest {
    return BetaGroupCreateRequestToJSONTyped(json, false);
}

export function BetaGroupCreateRequestToJSONTyped(value?: BetaGroupCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaGroupCreateRequestDataToJSON(value['data']),
    };
}

