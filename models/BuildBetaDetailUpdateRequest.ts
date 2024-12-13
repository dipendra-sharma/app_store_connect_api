
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
import type { BuildBetaDetailUpdateRequestData } from './BuildBetaDetailUpdateRequestData';
import {
    BuildBetaDetailUpdateRequestDataFromJSON,
    BuildBetaDetailUpdateRequestDataFromJSONTyped,
    BuildBetaDetailUpdateRequestDataToJSON,
    BuildBetaDetailUpdateRequestDataToJSONTyped,
} from './BuildBetaDetailUpdateRequestData';

/**
 * 
 * @export
 * @interface BuildBetaDetailUpdateRequest
 */
export interface BuildBetaDetailUpdateRequest {
    /**
     * 
     * @type {BuildBetaDetailUpdateRequestData}
     * @memberof BuildBetaDetailUpdateRequest
     */
    data: BuildBetaDetailUpdateRequestData;
}

/**
 * Check if a given object implements the BuildBetaDetailUpdateRequest interface.
 */
export function instanceOfBuildBetaDetailUpdateRequest(value: object): value is BuildBetaDetailUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BuildBetaDetailUpdateRequestFromJSON(json: any): BuildBetaDetailUpdateRequest {
    return BuildBetaDetailUpdateRequestFromJSONTyped(json, false);
}

export function BuildBetaDetailUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaDetailUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BuildBetaDetailUpdateRequestDataFromJSON(json['data']),
    };
}

export function BuildBetaDetailUpdateRequestToJSON(json: any): BuildBetaDetailUpdateRequest {
    return BuildBetaDetailUpdateRequestToJSONTyped(json, false);
}

export function BuildBetaDetailUpdateRequestToJSONTyped(value?: BuildBetaDetailUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BuildBetaDetailUpdateRequestDataToJSON(value['data']),
    };
}
