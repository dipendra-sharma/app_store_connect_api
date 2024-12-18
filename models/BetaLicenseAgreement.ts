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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { BetaLicenseAgreementAttributes } from './BetaLicenseAgreementAttributes';
import {
    BetaLicenseAgreementAttributesFromJSON,
    BetaLicenseAgreementAttributesFromJSONTyped,
    BetaLicenseAgreementAttributesToJSON,
    BetaLicenseAgreementAttributesToJSONTyped,
} from './BetaLicenseAgreementAttributes';
import type { BetaAppLocalizationRelationships } from './BetaAppLocalizationRelationships';
import {
    BetaAppLocalizationRelationshipsFromJSON,
    BetaAppLocalizationRelationshipsFromJSONTyped,
    BetaAppLocalizationRelationshipsToJSON,
    BetaAppLocalizationRelationshipsToJSONTyped,
} from './BetaAppLocalizationRelationships';

/**
 * 
 * @export
 * @interface BetaLicenseAgreement
 */
export interface BetaLicenseAgreement {
    /**
     * 
     * @type {string}
     * @memberof BetaLicenseAgreement
     */
    type: BetaLicenseAgreementTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaLicenseAgreement
     */
    id: string;
    /**
     * 
     * @type {BetaLicenseAgreementAttributes}
     * @memberof BetaLicenseAgreement
     */
    attributes?: BetaLicenseAgreementAttributes;
    /**
     * 
     * @type {BetaAppLocalizationRelationships}
     * @memberof BetaLicenseAgreement
     */
    relationships?: BetaAppLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaLicenseAgreement
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BetaLicenseAgreementTypeEnum = {
    BetaLicenseAgreements: 'betaLicenseAgreements'
} as const;
export type BetaLicenseAgreementTypeEnum = typeof BetaLicenseAgreementTypeEnum[keyof typeof BetaLicenseAgreementTypeEnum];


/**
 * Check if a given object implements the BetaLicenseAgreement interface.
 */
export function instanceOfBetaLicenseAgreement(value: object): value is BetaLicenseAgreement {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaLicenseAgreementFromJSON(json: any): BetaLicenseAgreement {
    return BetaLicenseAgreementFromJSONTyped(json, false);
}

export function BetaLicenseAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaLicenseAgreement {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BetaLicenseAgreementAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : BetaAppLocalizationRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BetaLicenseAgreementToJSON(json: any): BetaLicenseAgreement {
    return BetaLicenseAgreementToJSONTyped(json, false);
}

export function BetaLicenseAgreementToJSONTyped(value?: BetaLicenseAgreement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BetaLicenseAgreementAttributesToJSON(value['attributes']),
        'relationships': BetaAppLocalizationRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

