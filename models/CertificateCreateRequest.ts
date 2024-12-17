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
import type { CertificateCreateRequestData } from './CertificateCreateRequestData';
import {
    CertificateCreateRequestDataFromJSON,
    CertificateCreateRequestDataFromJSONTyped,
    CertificateCreateRequestDataToJSON,
    CertificateCreateRequestDataToJSONTyped,
} from './CertificateCreateRequestData';

/**
 * 
 * @export
 * @interface CertificateCreateRequest
 */
export interface CertificateCreateRequest {
    /**
     * 
     * @type {CertificateCreateRequestData}
     * @memberof CertificateCreateRequest
     */
    data: CertificateCreateRequestData;
}

/**
 * Check if a given object implements the CertificateCreateRequest interface.
 */
export function instanceOfCertificateCreateRequest(value: object): value is CertificateCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CertificateCreateRequestFromJSON(json: any): CertificateCreateRequest {
    return CertificateCreateRequestFromJSONTyped(json, false);
}

export function CertificateCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CertificateCreateRequestDataFromJSON(json['data']),
    };
}

export function CertificateCreateRequestToJSON(json: any): CertificateCreateRequest {
    return CertificateCreateRequestToJSONTyped(json, false);
}

export function CertificateCreateRequestToJSONTyped(value?: CertificateCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CertificateCreateRequestDataToJSON(value['data']),
    };
}

