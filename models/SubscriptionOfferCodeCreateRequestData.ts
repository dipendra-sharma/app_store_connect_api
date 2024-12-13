
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
import type { SubscriptionOfferCodeCreateRequestDataAttributes } from './SubscriptionOfferCodeCreateRequestDataAttributes';
import {
    SubscriptionOfferCodeCreateRequestDataAttributesFromJSON,
    SubscriptionOfferCodeCreateRequestDataAttributesFromJSONTyped,
    SubscriptionOfferCodeCreateRequestDataAttributesToJSON,
    SubscriptionOfferCodeCreateRequestDataAttributesToJSONTyped,
} from './SubscriptionOfferCodeCreateRequestDataAttributes';
import type { SubscriptionOfferCodeCreateRequestDataRelationships } from './SubscriptionOfferCodeCreateRequestDataRelationships';
import {
    SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSON,
    SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionOfferCodeCreateRequestDataRelationshipsToJSON,
    SubscriptionOfferCodeCreateRequestDataRelationshipsToJSONTyped,
} from './SubscriptionOfferCodeCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCreateRequestData
 */
export interface SubscriptionOfferCodeCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeCreateRequestData
     */
    type: SubscriptionOfferCodeCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionOfferCodeCreateRequestDataAttributes}
     * @memberof SubscriptionOfferCodeCreateRequestData
     */
    attributes: SubscriptionOfferCodeCreateRequestDataAttributes;
    /**
     * 
     * @type {SubscriptionOfferCodeCreateRequestDataRelationships}
     * @memberof SubscriptionOfferCodeCreateRequestData
     */
    relationships: SubscriptionOfferCodeCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionOfferCodeCreateRequestDataTypeEnum = {
    SubscriptionOfferCodes: 'subscriptionOfferCodes'
} as const;
export type SubscriptionOfferCodeCreateRequestDataTypeEnum = typeof SubscriptionOfferCodeCreateRequestDataTypeEnum[keyof typeof SubscriptionOfferCodeCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodeCreateRequestData interface.
 */
export function instanceOfSubscriptionOfferCodeCreateRequestData(value: object): value is SubscriptionOfferCodeCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodeCreateRequestDataFromJSON(json: any): SubscriptionOfferCodeCreateRequestData {
    return SubscriptionOfferCodeCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': SubscriptionOfferCodeCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionOfferCodeCreateRequestDataToJSON(json: any): SubscriptionOfferCodeCreateRequestData {
    return SubscriptionOfferCodeCreateRequestDataToJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestDataToJSONTyped(value?: SubscriptionOfferCodeCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': SubscriptionOfferCodeCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': SubscriptionOfferCodeCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}
