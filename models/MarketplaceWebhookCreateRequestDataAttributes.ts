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
 * @interface MarketplaceWebhookCreateRequestDataAttributes
 */
export interface MarketplaceWebhookCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof MarketplaceWebhookCreateRequestDataAttributes
     */
    endpointUrl: string;
    /**
     * 
     * @type {string}
     * @memberof MarketplaceWebhookCreateRequestDataAttributes
     */
    secret: string;
}

/**
 * Check if a given object implements the MarketplaceWebhookCreateRequestDataAttributes interface.
 */
export function instanceOfMarketplaceWebhookCreateRequestDataAttributes(value: object): value is MarketplaceWebhookCreateRequestDataAttributes {
    if (!('endpointUrl' in value) || value['endpointUrl'] === undefined) return false;
    if (!('secret' in value) || value['secret'] === undefined) return false;
    return true;
}

export function MarketplaceWebhookCreateRequestDataAttributesFromJSON(json: any): MarketplaceWebhookCreateRequestDataAttributes {
    return MarketplaceWebhookCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function MarketplaceWebhookCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhookCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'endpointUrl': json['endpointUrl'],
        'secret': json['secret'],
    };
}

export function MarketplaceWebhookCreateRequestDataAttributesToJSON(json: any): MarketplaceWebhookCreateRequestDataAttributes {
    return MarketplaceWebhookCreateRequestDataAttributesToJSONTyped(json, false);
}

export function MarketplaceWebhookCreateRequestDataAttributesToJSONTyped(value?: MarketplaceWebhookCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'endpointUrl': value['endpointUrl'],
        'secret': value['secret'],
    };
}

