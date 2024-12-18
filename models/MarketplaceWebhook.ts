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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { MarketplaceWebhookAttributes } from './MarketplaceWebhookAttributes';
import {
    MarketplaceWebhookAttributesFromJSON,
    MarketplaceWebhookAttributesFromJSONTyped,
    MarketplaceWebhookAttributesToJSON,
    MarketplaceWebhookAttributesToJSONTyped,
} from './MarketplaceWebhookAttributes';

/**
 * 
 * @export
 * @interface MarketplaceWebhook
 */
export interface MarketplaceWebhook {
    /**
     * 
     * @type {string}
     * @memberof MarketplaceWebhook
     */
    type: MarketplaceWebhookTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MarketplaceWebhook
     */
    id: string;
    /**
     * 
     * @type {MarketplaceWebhookAttributes}
     * @memberof MarketplaceWebhook
     */
    attributes?: MarketplaceWebhookAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof MarketplaceWebhook
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const MarketplaceWebhookTypeEnum = {
    MarketplaceWebhooks: 'marketplaceWebhooks'
} as const;
export type MarketplaceWebhookTypeEnum = typeof MarketplaceWebhookTypeEnum[keyof typeof MarketplaceWebhookTypeEnum];


/**
 * Check if a given object implements the MarketplaceWebhook interface.
 */
export function instanceOfMarketplaceWebhook(value: object): value is MarketplaceWebhook {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function MarketplaceWebhookFromJSON(json: any): MarketplaceWebhook {
    return MarketplaceWebhookFromJSONTyped(json, false);
}

export function MarketplaceWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhook {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : MarketplaceWebhookAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function MarketplaceWebhookToJSON(json: any): MarketplaceWebhook {
    return MarketplaceWebhookToJSONTyped(json, false);
}

export function MarketplaceWebhookToJSONTyped(value?: MarketplaceWebhook | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': MarketplaceWebhookAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

