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
import type { EndUserLicenseAgreement } from './EndUserLicenseAgreement';
import {
    EndUserLicenseAgreementFromJSON,
    EndUserLicenseAgreementFromJSONTyped,
    EndUserLicenseAgreementToJSON,
    EndUserLicenseAgreementToJSONTyped,
} from './EndUserLicenseAgreement';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementWithoutIncludesResponse
 */
export interface EndUserLicenseAgreementWithoutIncludesResponse {
    /**
     * 
     * @type {EndUserLicenseAgreement}
     * @memberof EndUserLicenseAgreementWithoutIncludesResponse
     */
    data: EndUserLicenseAgreement;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof EndUserLicenseAgreementWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementWithoutIncludesResponse interface.
 */
export function instanceOfEndUserLicenseAgreementWithoutIncludesResponse(value: object): value is EndUserLicenseAgreementWithoutIncludesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function EndUserLicenseAgreementWithoutIncludesResponseFromJSON(json: any): EndUserLicenseAgreementWithoutIncludesResponse {
    return EndUserLicenseAgreementWithoutIncludesResponseFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementWithoutIncludesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': EndUserLicenseAgreementFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function EndUserLicenseAgreementWithoutIncludesResponseToJSON(json: any): EndUserLicenseAgreementWithoutIncludesResponse {
    return EndUserLicenseAgreementWithoutIncludesResponseToJSONTyped(json, false);
}

export function EndUserLicenseAgreementWithoutIncludesResponseToJSONTyped(value?: EndUserLicenseAgreementWithoutIncludesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': EndUserLicenseAgreementToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

