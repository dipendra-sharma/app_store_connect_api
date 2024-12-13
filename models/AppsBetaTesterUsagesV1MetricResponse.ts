
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
import type { AppsBetaTesterUsagesV1MetricResponseDataInner } from './AppsBetaTesterUsagesV1MetricResponseDataInner';
import {
    AppsBetaTesterUsagesV1MetricResponseDataInnerFromJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerFromJSONTyped,
    AppsBetaTesterUsagesV1MetricResponseDataInnerToJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerToJSONTyped,
} from './AppsBetaTesterUsagesV1MetricResponseDataInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';
import type { BetaTester } from './BetaTester';
import {
    BetaTesterFromJSON,
    BetaTesterFromJSONTyped,
    BetaTesterToJSON,
    BetaTesterToJSONTyped,
} from './BetaTester';

/**
 * 
 * @export
 * @interface AppsBetaTesterUsagesV1MetricResponse
 */
export interface AppsBetaTesterUsagesV1MetricResponse {
    /**
     * 
     * @type {Array<AppsBetaTesterUsagesV1MetricResponseDataInner>}
     * @memberof AppsBetaTesterUsagesV1MetricResponse
     */
    data: Array<AppsBetaTesterUsagesV1MetricResponseDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppsBetaTesterUsagesV1MetricResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppsBetaTesterUsagesV1MetricResponse
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<BetaTester>}
     * @memberof AppsBetaTesterUsagesV1MetricResponse
     */
    included?: Array<BetaTester>;
}

/**
 * Check if a given object implements the AppsBetaTesterUsagesV1MetricResponse interface.
 */
export function instanceOfAppsBetaTesterUsagesV1MetricResponse(value: object): value is AppsBetaTesterUsagesV1MetricResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppsBetaTesterUsagesV1MetricResponseFromJSON(json: any): AppsBetaTesterUsagesV1MetricResponse {
    return AppsBetaTesterUsagesV1MetricResponseFromJSONTyped(json, false);
}

export function AppsBetaTesterUsagesV1MetricResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppsBetaTesterUsagesV1MetricResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppsBetaTesterUsagesV1MetricResponseDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(BetaTesterFromJSON)),
    };
}

export function AppsBetaTesterUsagesV1MetricResponseToJSON(json: any): AppsBetaTesterUsagesV1MetricResponse {
    return AppsBetaTesterUsagesV1MetricResponseToJSONTyped(json, false);
}

export function AppsBetaTesterUsagesV1MetricResponseToJSONTyped(value?: AppsBetaTesterUsagesV1MetricResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppsBetaTesterUsagesV1MetricResponseDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(BetaTesterToJSON)),
    };
}

