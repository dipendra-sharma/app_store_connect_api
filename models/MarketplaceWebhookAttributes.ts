
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
 * @interface MarketplaceWebhookAttributes
 */
export interface MarketplaceWebhookAttributes {
    /**
     * 
     * @type {string}
     * @memberof MarketplaceWebhookAttributes
     */
    endpointUrl?: string;
}

/**
 * Check if a given object implements the MarketplaceWebhookAttributes interface.
 */
export function instanceOfMarketplaceWebhookAttributes(value: object): value is MarketplaceWebhookAttributes {
    return true;
}

export function MarketplaceWebhookAttributesFromJSON(json: any): MarketplaceWebhookAttributes {
    return MarketplaceWebhookAttributesFromJSONTyped(json, false);
}

export function MarketplaceWebhookAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhookAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'endpointUrl': json['endpointUrl'] == null ? undefined : json['endpointUrl'],
    };
}

export function MarketplaceWebhookAttributesToJSON(json: any): MarketplaceWebhookAttributes {
    return MarketplaceWebhookAttributesToJSONTyped(json, false);
}

export function MarketplaceWebhookAttributesToJSONTyped(value?: MarketplaceWebhookAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'endpointUrl': value['endpointUrl'],
    };
}

