
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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
import type { InAppPurchaseLocalization } from './InAppPurchaseLocalization';
import {
    InAppPurchaseLocalizationFromJSON,
    InAppPurchaseLocalizationFromJSONTyped,
    InAppPurchaseLocalizationToJSON,
    InAppPurchaseLocalizationToJSONTyped,
} from './InAppPurchaseLocalization';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
import type { InAppPurchaseV2 } from './InAppPurchaseV2';
import {
    InAppPurchaseV2FromJSON,
    InAppPurchaseV2FromJSONTyped,
    InAppPurchaseV2ToJSON,
    InAppPurchaseV2ToJSONTyped,
} from './InAppPurchaseV2';

/**
 * 
 * @export
 * @interface InAppPurchaseLocalizationsResponse
 */
export interface InAppPurchaseLocalizationsResponse {
    /**
     * 
     * @type {Array<InAppPurchaseLocalization>}
     * @memberof InAppPurchaseLocalizationsResponse
     */
    data: Array<InAppPurchaseLocalization>;
    /**
     * 
     * @type {Array<InAppPurchaseV2>}
     * @memberof InAppPurchaseLocalizationsResponse
     */
    included?: Array<InAppPurchaseV2>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof InAppPurchaseLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof InAppPurchaseLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the InAppPurchaseLocalizationsResponse interface.
 */
export function instanceOfInAppPurchaseLocalizationsResponse(value: object): value is InAppPurchaseLocalizationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function InAppPurchaseLocalizationsResponseFromJSON(json: any): InAppPurchaseLocalizationsResponse {
    return InAppPurchaseLocalizationsResponseFromJSONTyped(json, false);
}

export function InAppPurchaseLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalizationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(InAppPurchaseLocalizationFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(InAppPurchaseV2FromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function InAppPurchaseLocalizationsResponseToJSON(json: any): InAppPurchaseLocalizationsResponse {
    return InAppPurchaseLocalizationsResponseToJSONTyped(json, false);
}

export function InAppPurchaseLocalizationsResponseToJSONTyped(value?: InAppPurchaseLocalizationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(InAppPurchaseLocalizationToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(InAppPurchaseV2ToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

