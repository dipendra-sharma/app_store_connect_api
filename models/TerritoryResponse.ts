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
import type { Territory } from './Territory';
import {
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
    TerritoryToJSONTyped,
} from './Territory';
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
 * @interface TerritoryResponse
 */
export interface TerritoryResponse {
    /**
     * 
     * @type {Territory}
     * @memberof TerritoryResponse
     */
    data: Territory;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof TerritoryResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the TerritoryResponse interface.
 */
export function instanceOfTerritoryResponse(value: object): value is TerritoryResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function TerritoryResponseFromJSON(json: any): TerritoryResponse {
    return TerritoryResponseFromJSONTyped(json, false);
}

export function TerritoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': TerritoryFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function TerritoryResponseToJSON(json: any): TerritoryResponse {
    return TerritoryResponseToJSONTyped(json, false);
}

export function TerritoryResponseToJSONTyped(value?: TerritoryResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': TerritoryToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

