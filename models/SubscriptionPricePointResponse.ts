
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
import type { SubscriptionPricePoint } from './SubscriptionPricePoint';
import {
    SubscriptionPricePointFromJSON,
    SubscriptionPricePointFromJSONTyped,
    SubscriptionPricePointToJSON,
    SubscriptionPricePointToJSONTyped,
} from './SubscriptionPricePoint';
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
 * @interface SubscriptionPricePointResponse
 */
export interface SubscriptionPricePointResponse {
    /**
     * 
     * @type {SubscriptionPricePoint}
     * @memberof SubscriptionPricePointResponse
     */
    data: SubscriptionPricePoint;
    /**
     * 
     * @type {Array<Territory>}
     * @memberof SubscriptionPricePointResponse
     */
    included?: Array<Territory>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionPricePointResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionPricePointResponse interface.
 */
export function instanceOfSubscriptionPricePointResponse(value: object): value is SubscriptionPricePointResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function SubscriptionPricePointResponseFromJSON(json: any): SubscriptionPricePointResponse {
    return SubscriptionPricePointResponseFromJSONTyped(json, false);
}

export function SubscriptionPricePointResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPricePointResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SubscriptionPricePointFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(TerritoryFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionPricePointResponseToJSON(json: any): SubscriptionPricePointResponse {
    return SubscriptionPricePointResponseToJSONTyped(json, false);
}

export function SubscriptionPricePointResponseToJSONTyped(value?: SubscriptionPricePointResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SubscriptionPricePointToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(TerritoryToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}
