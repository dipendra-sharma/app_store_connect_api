
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
import type { BetaTesterUsagesV1MetricResponseDataInner } from './BetaTesterUsagesV1MetricResponseDataInner';
import {
    BetaTesterUsagesV1MetricResponseDataInnerFromJSON,
    BetaTesterUsagesV1MetricResponseDataInnerFromJSONTyped,
    BetaTesterUsagesV1MetricResponseDataInnerToJSON,
    BetaTesterUsagesV1MetricResponseDataInnerToJSONTyped,
} from './BetaTesterUsagesV1MetricResponseDataInner';
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
 * @interface BetaTesterUsagesV1MetricResponse
 */
export interface BetaTesterUsagesV1MetricResponse {
    /**
     * 
     * @type {Array<BetaTesterUsagesV1MetricResponseDataInner>}
     * @memberof BetaTesterUsagesV1MetricResponse
     */
    data: Array<BetaTesterUsagesV1MetricResponseDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaTesterUsagesV1MetricResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaTesterUsagesV1MetricResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaTesterUsagesV1MetricResponse interface.
 */
export function instanceOfBetaTesterUsagesV1MetricResponse(value: object): value is BetaTesterUsagesV1MetricResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaTesterUsagesV1MetricResponseFromJSON(json: any): BetaTesterUsagesV1MetricResponse {
    return BetaTesterUsagesV1MetricResponseFromJSONTyped(json, false);
}

export function BetaTesterUsagesV1MetricResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterUsagesV1MetricResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaTesterUsagesV1MetricResponseDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaTesterUsagesV1MetricResponseToJSON(json: any): BetaTesterUsagesV1MetricResponse {
    return BetaTesterUsagesV1MetricResponseToJSONTyped(json, false);
}

export function BetaTesterUsagesV1MetricResponseToJSONTyped(value?: BetaTesterUsagesV1MetricResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaTesterUsagesV1MetricResponseDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

