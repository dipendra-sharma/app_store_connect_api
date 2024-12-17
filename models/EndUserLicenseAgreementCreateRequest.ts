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
import type { EndUserLicenseAgreementCreateRequestData } from './EndUserLicenseAgreementCreateRequestData';
import {
    EndUserLicenseAgreementCreateRequestDataFromJSON,
    EndUserLicenseAgreementCreateRequestDataFromJSONTyped,
    EndUserLicenseAgreementCreateRequestDataToJSON,
    EndUserLicenseAgreementCreateRequestDataToJSONTyped,
} from './EndUserLicenseAgreementCreateRequestData';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementCreateRequest
 */
export interface EndUserLicenseAgreementCreateRequest {
    /**
     * 
     * @type {EndUserLicenseAgreementCreateRequestData}
     * @memberof EndUserLicenseAgreementCreateRequest
     */
    data: EndUserLicenseAgreementCreateRequestData;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementCreateRequest interface.
 */
export function instanceOfEndUserLicenseAgreementCreateRequest(value: object): value is EndUserLicenseAgreementCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function EndUserLicenseAgreementCreateRequestFromJSON(json: any): EndUserLicenseAgreementCreateRequest {
    return EndUserLicenseAgreementCreateRequestFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': EndUserLicenseAgreementCreateRequestDataFromJSON(json['data']),
    };
}

export function EndUserLicenseAgreementCreateRequestToJSON(json: any): EndUserLicenseAgreementCreateRequest {
    return EndUserLicenseAgreementCreateRequestToJSONTyped(json, false);
}

export function EndUserLicenseAgreementCreateRequestToJSONTyped(value?: EndUserLicenseAgreementCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': EndUserLicenseAgreementCreateRequestDataToJSON(value['data']),
    };
}

