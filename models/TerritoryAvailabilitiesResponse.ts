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
import type { TerritoryAvailability } from './TerritoryAvailability';
import {
    TerritoryAvailabilityFromJSON,
    TerritoryAvailabilityFromJSONTyped,
    TerritoryAvailabilityToJSON,
    TerritoryAvailabilityToJSONTyped,
} from './TerritoryAvailability';
import type { Territory } from './Territory';
import {
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
    TerritoryToJSONTyped,
} from './Territory';
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
 * @interface TerritoryAvailabilitiesResponse
 */
export interface TerritoryAvailabilitiesResponse {
    /**
     * 
     * @type {Array<TerritoryAvailability>}
     * @memberof TerritoryAvailabilitiesResponse
     */
    data: Array<TerritoryAvailability>;
    /**
     * 
     * @type {Array<Territory>}
     * @memberof TerritoryAvailabilitiesResponse
     */
    included?: Array<Territory>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof TerritoryAvailabilitiesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof TerritoryAvailabilitiesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the TerritoryAvailabilitiesResponse interface.
 */
export function instanceOfTerritoryAvailabilitiesResponse(value: object): value is TerritoryAvailabilitiesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function TerritoryAvailabilitiesResponseFromJSON(json: any): TerritoryAvailabilitiesResponse {
    return TerritoryAvailabilitiesResponseFromJSONTyped(json, false);
}

export function TerritoryAvailabilitiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryAvailabilitiesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(TerritoryAvailabilityFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(TerritoryFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function TerritoryAvailabilitiesResponseToJSON(json: any): TerritoryAvailabilitiesResponse {
    return TerritoryAvailabilitiesResponseToJSONTyped(json, false);
}

export function TerritoryAvailabilitiesResponseToJSONTyped(value?: TerritoryAvailabilitiesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(TerritoryAvailabilityToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(TerritoryToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

