
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
import type { SubscriptionPriceInlineCreateAttributes } from './SubscriptionPriceInlineCreateAttributes';
import {
    SubscriptionPriceInlineCreateAttributesFromJSON,
    SubscriptionPriceInlineCreateAttributesFromJSONTyped,
    SubscriptionPriceInlineCreateAttributesToJSON,
    SubscriptionPriceInlineCreateAttributesToJSONTyped,
} from './SubscriptionPriceInlineCreateAttributes';
import type { SubscriptionPriceCreateRequestDataRelationships } from './SubscriptionPriceCreateRequestDataRelationships';
import {
    SubscriptionPriceCreateRequestDataRelationshipsFromJSON,
    SubscriptionPriceCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionPriceCreateRequestDataRelationshipsToJSON,
    SubscriptionPriceCreateRequestDataRelationshipsToJSONTyped,
} from './SubscriptionPriceCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SubscriptionPriceCreateRequestData
 */
export interface SubscriptionPriceCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPriceCreateRequestData
     */
    type: SubscriptionPriceCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionPriceInlineCreateAttributes}
     * @memberof SubscriptionPriceCreateRequestData
     */
    attributes?: SubscriptionPriceInlineCreateAttributes;
    /**
     * 
     * @type {SubscriptionPriceCreateRequestDataRelationships}
     * @memberof SubscriptionPriceCreateRequestData
     */
    relationships: SubscriptionPriceCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionPriceCreateRequestDataTypeEnum = {
    SubscriptionPrices: 'subscriptionPrices'
} as const;
export type SubscriptionPriceCreateRequestDataTypeEnum = typeof SubscriptionPriceCreateRequestDataTypeEnum[keyof typeof SubscriptionPriceCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionPriceCreateRequestData interface.
 */
export function instanceOfSubscriptionPriceCreateRequestData(value: object): value is SubscriptionPriceCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function SubscriptionPriceCreateRequestDataFromJSON(json: any): SubscriptionPriceCreateRequestData {
    return SubscriptionPriceCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionPriceCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPriceCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': json['attributes'] == null ? undefined : SubscriptionPriceInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': SubscriptionPriceCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionPriceCreateRequestDataToJSON(json: any): SubscriptionPriceCreateRequestData {
    return SubscriptionPriceCreateRequestDataToJSONTyped(json, false);
}

export function SubscriptionPriceCreateRequestDataToJSONTyped(value?: SubscriptionPriceCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': SubscriptionPriceInlineCreateAttributesToJSON(value['attributes']),
        'relationships': SubscriptionPriceCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}
