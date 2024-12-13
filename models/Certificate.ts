
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
import type { CertificateAttributes } from './CertificateAttributes';
import {
    CertificateAttributesFromJSON,
    CertificateAttributesFromJSONTyped,
    CertificateAttributesToJSON,
    CertificateAttributesToJSONTyped,
} from './CertificateAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface Certificate
 */
export interface Certificate {
    /**
     * 
     * @type {string}
     * @memberof Certificate
     */
    type: CertificateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Certificate
     */
    id: string;
    /**
     * 
     * @type {CertificateAttributes}
     * @memberof Certificate
     */
    attributes?: CertificateAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof Certificate
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const CertificateTypeEnum = {
    Certificates: 'certificates'
} as const;
export type CertificateTypeEnum = typeof CertificateTypeEnum[keyof typeof CertificateTypeEnum];


/**
 * Check if a given object implements the Certificate interface.
 */
export function instanceOfCertificate(value: object): value is Certificate {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function CertificateFromJSON(json: any): Certificate {
    return CertificateFromJSONTyped(json, false);
}

export function CertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Certificate {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : CertificateAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function CertificateToJSON(json: any): Certificate {
    return CertificateToJSONTyped(json, false);
}

export function CertificateToJSONTyped(value?: Certificate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': CertificateAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

