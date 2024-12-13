
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
import type { BetaAppLocalizationUpdateRequestData } from './BetaAppLocalizationUpdateRequestData';
import {
    BetaAppLocalizationUpdateRequestDataFromJSON,
    BetaAppLocalizationUpdateRequestDataFromJSONTyped,
    BetaAppLocalizationUpdateRequestDataToJSON,
    BetaAppLocalizationUpdateRequestDataToJSONTyped,
} from './BetaAppLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface BetaAppLocalizationUpdateRequest
 */
export interface BetaAppLocalizationUpdateRequest {
    /**
     * 
     * @type {BetaAppLocalizationUpdateRequestData}
     * @memberof BetaAppLocalizationUpdateRequest
     */
    data: BetaAppLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the BetaAppLocalizationUpdateRequest interface.
 */
export function instanceOfBetaAppLocalizationUpdateRequest(value: object): value is BetaAppLocalizationUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaAppLocalizationUpdateRequestFromJSON(json: any): BetaAppLocalizationUpdateRequest {
    return BetaAppLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function BetaAppLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalizationUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaAppLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function BetaAppLocalizationUpdateRequestToJSON(json: any): BetaAppLocalizationUpdateRequest {
    return BetaAppLocalizationUpdateRequestToJSONTyped(json, false);
}

export function BetaAppLocalizationUpdateRequestToJSONTyped(value?: BetaAppLocalizationUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaAppLocalizationUpdateRequestDataToJSON(value['data']),
    };
}

