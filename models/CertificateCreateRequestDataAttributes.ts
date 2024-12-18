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
import type { CertificateType } from './CertificateType';
import {
    CertificateTypeFromJSON,
    CertificateTypeFromJSONTyped,
    CertificateTypeToJSON,
    CertificateTypeToJSONTyped,
} from './CertificateType';

/**
 * 
 * @export
 * @interface CertificateCreateRequestDataAttributes
 */
export interface CertificateCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof CertificateCreateRequestDataAttributes
     */
    csrContent: string;
    /**
     * 
     * @type {CertificateType}
     * @memberof CertificateCreateRequestDataAttributes
     */
    certificateType: CertificateType;
}



/**
 * Check if a given object implements the CertificateCreateRequestDataAttributes interface.
 */
export function instanceOfCertificateCreateRequestDataAttributes(value: object): value is CertificateCreateRequestDataAttributes {
    if (!('csrContent' in value) || value['csrContent'] === undefined) return false;
    if (!('certificateType' in value) || value['certificateType'] === undefined) return false;
    return true;
}

export function CertificateCreateRequestDataAttributesFromJSON(json: any): CertificateCreateRequestDataAttributes {
    return CertificateCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function CertificateCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'csrContent': json['csrContent'],
        'certificateType': CertificateTypeFromJSON(json['certificateType']),
    };
}

export function CertificateCreateRequestDataAttributesToJSON(json: any): CertificateCreateRequestDataAttributes {
    return CertificateCreateRequestDataAttributesToJSONTyped(json, false);
}

export function CertificateCreateRequestDataAttributesToJSONTyped(value?: CertificateCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'csrContent': value['csrContent'],
        'certificateType': CertificateTypeToJSON(value['certificateType']),
    };
}

