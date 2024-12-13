
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
/**
 * 
 * @export
 * @interface MarketplaceSearchDetailCreateRequestDataAttributes
 */
export interface MarketplaceSearchDetailCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof MarketplaceSearchDetailCreateRequestDataAttributes
     */
    catalogUrl: string;
}

/**
 * Check if a given object implements the MarketplaceSearchDetailCreateRequestDataAttributes interface.
 */
export function instanceOfMarketplaceSearchDetailCreateRequestDataAttributes(value: object): value is MarketplaceSearchDetailCreateRequestDataAttributes {
    if (!('catalogUrl' in value) || value['catalogUrl'] === undefined) return false;
    return true;
}

export function MarketplaceSearchDetailCreateRequestDataAttributesFromJSON(json: any): MarketplaceSearchDetailCreateRequestDataAttributes {
    return MarketplaceSearchDetailCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function MarketplaceSearchDetailCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceSearchDetailCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'catalogUrl': json['catalogUrl'],
    };
}

export function MarketplaceSearchDetailCreateRequestDataAttributesToJSON(json: any): MarketplaceSearchDetailCreateRequestDataAttributes {
    return MarketplaceSearchDetailCreateRequestDataAttributesToJSONTyped(json, false);
}

export function MarketplaceSearchDetailCreateRequestDataAttributesToJSONTyped(value?: MarketplaceSearchDetailCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'catalogUrl': value['catalogUrl'],
    };
}
