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
import type { CertificateCreateRequestDataAttributes } from './CertificateCreateRequestDataAttributes';
import {
    CertificateCreateRequestDataAttributesFromJSON,
    CertificateCreateRequestDataAttributesFromJSONTyped,
    CertificateCreateRequestDataAttributesToJSON,
    CertificateCreateRequestDataAttributesToJSONTyped,
} from './CertificateCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface CertificateCreateRequestData
 */
export interface CertificateCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof CertificateCreateRequestData
     */
    type: CertificateCreateRequestDataTypeEnum;
    /**
     * 
     * @type {CertificateCreateRequestDataAttributes}
     * @memberof CertificateCreateRequestData
     */
    attributes: CertificateCreateRequestDataAttributes;
}


/**
 * @export
 */
export const CertificateCreateRequestDataTypeEnum = {
    Certificates: 'certificates'
} as const;
export type CertificateCreateRequestDataTypeEnum = typeof CertificateCreateRequestDataTypeEnum[keyof typeof CertificateCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the CertificateCreateRequestData interface.
 */
export function instanceOfCertificateCreateRequestData(value: object): value is CertificateCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function CertificateCreateRequestDataFromJSON(json: any): CertificateCreateRequestData {
    return CertificateCreateRequestDataFromJSONTyped(json, false);
}

export function CertificateCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': CertificateCreateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function CertificateCreateRequestDataToJSON(json: any): CertificateCreateRequestData {
    return CertificateCreateRequestDataToJSONTyped(json, false);
}

export function CertificateCreateRequestDataToJSONTyped(value?: CertificateCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': CertificateCreateRequestDataAttributesToJSON(value['attributes']),
    };
}

