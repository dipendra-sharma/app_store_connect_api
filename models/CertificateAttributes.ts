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
import type { BundleIdPlatform } from './BundleIdPlatform';
import {
    BundleIdPlatformFromJSON,
    BundleIdPlatformFromJSONTyped,
    BundleIdPlatformToJSON,
    BundleIdPlatformToJSONTyped,
} from './BundleIdPlatform';

/**
 * 
 * @export
 * @interface CertificateAttributes
 */
export interface CertificateAttributes {
    /**
     * 
     * @type {string}
     * @memberof CertificateAttributes
     */
    name?: string;
    /**
     * 
     * @type {CertificateType}
     * @memberof CertificateAttributes
     */
    certificateType?: CertificateType;
    /**
     * 
     * @type {string}
     * @memberof CertificateAttributes
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateAttributes
     */
    serialNumber?: string;
    /**
     * 
     * @type {BundleIdPlatform}
     * @memberof CertificateAttributes
     */
    platform?: BundleIdPlatform;
    /**
     * 
     * @type {Date}
     * @memberof CertificateAttributes
     */
    expirationDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CertificateAttributes
     */
    certificateContent?: string;
}



/**
 * Check if a given object implements the CertificateAttributes interface.
 */
export function instanceOfCertificateAttributes(value: object): value is CertificateAttributes {
    return true;
}

export function CertificateAttributesFromJSON(json: any): CertificateAttributes {
    return CertificateAttributesFromJSONTyped(json, false);
}

export function CertificateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'certificateType': json['certificateType'] == null ? undefined : CertificateTypeFromJSON(json['certificateType']),
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
        'serialNumber': json['serialNumber'] == null ? undefined : json['serialNumber'],
        'platform': json['platform'] == null ? undefined : BundleIdPlatformFromJSON(json['platform']),
        'expirationDate': json['expirationDate'] == null ? undefined : (new Date(json['expirationDate'])),
        'certificateContent': json['certificateContent'] == null ? undefined : json['certificateContent'],
    };
}

export function CertificateAttributesToJSON(json: any): CertificateAttributes {
    return CertificateAttributesToJSONTyped(json, false);
}

export function CertificateAttributesToJSONTyped(value?: CertificateAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'certificateType': CertificateTypeToJSON(value['certificateType']),
        'displayName': value['displayName'],
        'serialNumber': value['serialNumber'],
        'platform': BundleIdPlatformToJSON(value['platform']),
        'expirationDate': value['expirationDate'] == null ? undefined : ((value['expirationDate']).toISOString()),
        'certificateContent': value['certificateContent'],
    };
}

