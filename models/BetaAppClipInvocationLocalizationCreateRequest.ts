
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
import type { BetaAppClipInvocationLocalizationCreateRequestData } from './BetaAppClipInvocationLocalizationCreateRequestData';
import {
    BetaAppClipInvocationLocalizationCreateRequestDataFromJSON,
    BetaAppClipInvocationLocalizationCreateRequestDataFromJSONTyped,
    BetaAppClipInvocationLocalizationCreateRequestDataToJSON,
    BetaAppClipInvocationLocalizationCreateRequestDataToJSONTyped,
} from './BetaAppClipInvocationLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationCreateRequest
 */
export interface BetaAppClipInvocationLocalizationCreateRequest {
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationCreateRequestData}
     * @memberof BetaAppClipInvocationLocalizationCreateRequest
     */
    data: BetaAppClipInvocationLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequest interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationCreateRequest(value: object): value is BetaAppClipInvocationLocalizationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaAppClipInvocationLocalizationCreateRequestFromJSON(json: any): BetaAppClipInvocationLocalizationCreateRequest {
    return BetaAppClipInvocationLocalizationCreateRequestFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaAppClipInvocationLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function BetaAppClipInvocationLocalizationCreateRequestToJSON(json: any): BetaAppClipInvocationLocalizationCreateRequest {
    return BetaAppClipInvocationLocalizationCreateRequestToJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationCreateRequestToJSONTyped(value?: BetaAppClipInvocationLocalizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaAppClipInvocationLocalizationCreateRequestDataToJSON(value['data']),
    };
}

