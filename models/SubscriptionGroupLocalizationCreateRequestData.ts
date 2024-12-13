
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
import type { SubscriptionGroupLocalizationCreateRequestDataRelationships } from './SubscriptionGroupLocalizationCreateRequestDataRelationships';
import {
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSON,
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsToJSON,
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsToJSONTyped,
} from './SubscriptionGroupLocalizationCreateRequestDataRelationships';
import type { SubscriptionGroupLocalizationCreateRequestDataAttributes } from './SubscriptionGroupLocalizationCreateRequestDataAttributes';
import {
    SubscriptionGroupLocalizationCreateRequestDataAttributesFromJSON,
    SubscriptionGroupLocalizationCreateRequestDataAttributesFromJSONTyped,
    SubscriptionGroupLocalizationCreateRequestDataAttributesToJSON,
    SubscriptionGroupLocalizationCreateRequestDataAttributesToJSONTyped,
} from './SubscriptionGroupLocalizationCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalizationCreateRequestData
 */
export interface SubscriptionGroupLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupLocalizationCreateRequestData
     */
    type: SubscriptionGroupLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionGroupLocalizationCreateRequestDataAttributes}
     * @memberof SubscriptionGroupLocalizationCreateRequestData
     */
    attributes: SubscriptionGroupLocalizationCreateRequestDataAttributes;
    /**
     * 
     * @type {SubscriptionGroupLocalizationCreateRequestDataRelationships}
     * @memberof SubscriptionGroupLocalizationCreateRequestData
     */
    relationships: SubscriptionGroupLocalizationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionGroupLocalizationCreateRequestDataTypeEnum = {
    SubscriptionGroupLocalizations: 'subscriptionGroupLocalizations'
} as const;
export type SubscriptionGroupLocalizationCreateRequestDataTypeEnum = typeof SubscriptionGroupLocalizationCreateRequestDataTypeEnum[keyof typeof SubscriptionGroupLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionGroupLocalizationCreateRequestData interface.
 */
export function instanceOfSubscriptionGroupLocalizationCreateRequestData(value: object): value is SubscriptionGroupLocalizationCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function SubscriptionGroupLocalizationCreateRequestDataFromJSON(json: any): SubscriptionGroupLocalizationCreateRequestData {
    return SubscriptionGroupLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': SubscriptionGroupLocalizationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionGroupLocalizationCreateRequestDataToJSON(json: any): SubscriptionGroupLocalizationCreateRequestData {
    return SubscriptionGroupLocalizationCreateRequestDataToJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationCreateRequestDataToJSONTyped(value?: SubscriptionGroupLocalizationCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': SubscriptionGroupLocalizationCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': SubscriptionGroupLocalizationCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

