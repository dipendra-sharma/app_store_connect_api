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
import type { BetaLicenseAgreementUpdateRequestData } from './BetaLicenseAgreementUpdateRequestData';
import {
    BetaLicenseAgreementUpdateRequestDataFromJSON,
    BetaLicenseAgreementUpdateRequestDataFromJSONTyped,
    BetaLicenseAgreementUpdateRequestDataToJSON,
    BetaLicenseAgreementUpdateRequestDataToJSONTyped,
} from './BetaLicenseAgreementUpdateRequestData';

/**
 * 
 * @export
 * @interface BetaLicenseAgreementUpdateRequest
 */
export interface BetaLicenseAgreementUpdateRequest {
    /**
     * 
     * @type {BetaLicenseAgreementUpdateRequestData}
     * @memberof BetaLicenseAgreementUpdateRequest
     */
    data: BetaLicenseAgreementUpdateRequestData;
}

/**
 * Check if a given object implements the BetaLicenseAgreementUpdateRequest interface.
 */
export function instanceOfBetaLicenseAgreementUpdateRequest(value: object): value is BetaLicenseAgreementUpdateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaLicenseAgreementUpdateRequestFromJSON(json: any): BetaLicenseAgreementUpdateRequest {
    return BetaLicenseAgreementUpdateRequestFromJSONTyped(json, false);
}

export function BetaLicenseAgreementUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaLicenseAgreementUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaLicenseAgreementUpdateRequestDataFromJSON(json['data']),
    };
}

export function BetaLicenseAgreementUpdateRequestToJSON(json: any): BetaLicenseAgreementUpdateRequest {
    return BetaLicenseAgreementUpdateRequestToJSONTyped(json, false);
}

export function BetaLicenseAgreementUpdateRequestToJSONTyped(value?: BetaLicenseAgreementUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaLicenseAgreementUpdateRequestDataToJSON(value['data']),
    };
}

