
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
import type { BetaBuildLocalizationCreateRequestData } from './BetaBuildLocalizationCreateRequestData';
import {
    BetaBuildLocalizationCreateRequestDataFromJSON,
    BetaBuildLocalizationCreateRequestDataFromJSONTyped,
    BetaBuildLocalizationCreateRequestDataToJSON,
    BetaBuildLocalizationCreateRequestDataToJSONTyped,
} from './BetaBuildLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface BetaBuildLocalizationCreateRequest
 */
export interface BetaBuildLocalizationCreateRequest {
    /**
     * 
     * @type {BetaBuildLocalizationCreateRequestData}
     * @memberof BetaBuildLocalizationCreateRequest
     */
    data: BetaBuildLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the BetaBuildLocalizationCreateRequest interface.
 */
export function instanceOfBetaBuildLocalizationCreateRequest(value: object): value is BetaBuildLocalizationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaBuildLocalizationCreateRequestFromJSON(json: any): BetaBuildLocalizationCreateRequest {
    return BetaBuildLocalizationCreateRequestFromJSONTyped(json, false);
}

export function BetaBuildLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaBuildLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function BetaBuildLocalizationCreateRequestToJSON(json: any): BetaBuildLocalizationCreateRequest {
    return BetaBuildLocalizationCreateRequestToJSONTyped(json, false);
}

export function BetaBuildLocalizationCreateRequestToJSONTyped(value?: BetaBuildLocalizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaBuildLocalizationCreateRequestDataToJSON(value['data']),
    };
}

