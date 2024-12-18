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
import type { AppPricePointsV3ResponseIncludedInner } from './AppPricePointsV3ResponseIncludedInner';
import {
    AppPricePointsV3ResponseIncludedInnerFromJSON,
    AppPricePointsV3ResponseIncludedInnerFromJSONTyped,
    AppPricePointsV3ResponseIncludedInnerToJSON,
    AppPricePointsV3ResponseIncludedInnerToJSONTyped,
} from './AppPricePointsV3ResponseIncludedInner';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementResponse
 */
export interface EndUserLicenseAgreementResponse {
    /**
     * 
     * @type {EndUserLicenseAgreement}
     * @memberof EndUserLicenseAgreementResponse
     */
    data: EndUserLicenseAgreement;
    /**
     * 
     * @type {Array<AppPricePointsV3ResponseIncludedInner>}
     * @memberof EndUserLicenseAgreementResponse
     */
    included?: Array<AppPricePointsV3ResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof EndUserLicenseAgreementResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementResponse interface.
 */
export function instanceOfEndUserLicenseAgreementResponse(value: object): value is EndUserLicenseAgreementResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function EndUserLicenseAgreementResponseFromJSON(json: any): EndUserLicenseAgreementResponse {
    return EndUserLicenseAgreementResponseFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': EndUserLicenseAgreementFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppPricePointsV3ResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function EndUserLicenseAgreementResponseToJSON(json: any): EndUserLicenseAgreementResponse {
    return EndUserLicenseAgreementResponseToJSONTyped(json, false);
}

export function EndUserLicenseAgreementResponseToJSONTyped(value?: EndUserLicenseAgreementResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': EndUserLicenseAgreementToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppPricePointsV3ResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

