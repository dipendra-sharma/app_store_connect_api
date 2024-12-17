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
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
    AppToJSONTyped,
} from './App';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
import type { BetaLicenseAgreement } from './BetaLicenseAgreement';
import {
    BetaLicenseAgreementFromJSON,
    BetaLicenseAgreementFromJSONTyped,
    BetaLicenseAgreementToJSON,
    BetaLicenseAgreementToJSONTyped,
} from './BetaLicenseAgreement';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface BetaLicenseAgreementsResponse
 */
export interface BetaLicenseAgreementsResponse {
    /**
     * 
     * @type {Array<BetaLicenseAgreement>}
     * @memberof BetaLicenseAgreementsResponse
     */
    data: Array<BetaLicenseAgreement>;
    /**
     * 
     * @type {Array<App>}
     * @memberof BetaLicenseAgreementsResponse
     */
    included?: Array<App>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaLicenseAgreementsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaLicenseAgreementsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaLicenseAgreementsResponse interface.
 */
export function instanceOfBetaLicenseAgreementsResponse(value: object): value is BetaLicenseAgreementsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaLicenseAgreementsResponseFromJSON(json: any): BetaLicenseAgreementsResponse {
    return BetaLicenseAgreementsResponseFromJSONTyped(json, false);
}

export function BetaLicenseAgreementsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaLicenseAgreementsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaLicenseAgreementFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaLicenseAgreementsResponseToJSON(json: any): BetaLicenseAgreementsResponse {
    return BetaLicenseAgreementsResponseToJSONTyped(json, false);
}

export function BetaLicenseAgreementsResponseToJSONTyped(value?: BetaLicenseAgreementsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaLicenseAgreementToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

