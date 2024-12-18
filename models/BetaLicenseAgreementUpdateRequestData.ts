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
import type { BetaLicenseAgreementAttributes } from './BetaLicenseAgreementAttributes';
import {
    BetaLicenseAgreementAttributesFromJSON,
    BetaLicenseAgreementAttributesFromJSONTyped,
    BetaLicenseAgreementAttributesToJSON,
    BetaLicenseAgreementAttributesToJSONTyped,
} from './BetaLicenseAgreementAttributes';

/**
 * 
 * @export
 * @interface BetaLicenseAgreementUpdateRequestData
 */
export interface BetaLicenseAgreementUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaLicenseAgreementUpdateRequestData
     */
    type: BetaLicenseAgreementUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaLicenseAgreementUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BetaLicenseAgreementAttributes}
     * @memberof BetaLicenseAgreementUpdateRequestData
     */
    attributes?: BetaLicenseAgreementAttributes;
}


/**
 * @export
 */
export const BetaLicenseAgreementUpdateRequestDataTypeEnum = {
    BetaLicenseAgreements: 'betaLicenseAgreements'
} as const;
export type BetaLicenseAgreementUpdateRequestDataTypeEnum = typeof BetaLicenseAgreementUpdateRequestDataTypeEnum[keyof typeof BetaLicenseAgreementUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaLicenseAgreementUpdateRequestData interface.
 */
export function instanceOfBetaLicenseAgreementUpdateRequestData(value: object): value is BetaLicenseAgreementUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaLicenseAgreementUpdateRequestDataFromJSON(json: any): BetaLicenseAgreementUpdateRequestData {
    return BetaLicenseAgreementUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaLicenseAgreementUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaLicenseAgreementUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BetaLicenseAgreementAttributesFromJSON(json['attributes']),
    };
}

export function BetaLicenseAgreementUpdateRequestDataToJSON(json: any): BetaLicenseAgreementUpdateRequestData {
    return BetaLicenseAgreementUpdateRequestDataToJSONTyped(json, false);
}

export function BetaLicenseAgreementUpdateRequestDataToJSONTyped(value?: BetaLicenseAgreementUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BetaLicenseAgreementAttributesToJSON(value['attributes']),
    };
}

