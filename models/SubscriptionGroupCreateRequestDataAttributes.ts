
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
 * @interface SubscriptionGroupCreateRequestDataAttributes
 */
export interface SubscriptionGroupCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupCreateRequestDataAttributes
     */
    referenceName: string;
}

/**
 * Check if a given object implements the SubscriptionGroupCreateRequestDataAttributes interface.
 */
export function instanceOfSubscriptionGroupCreateRequestDataAttributes(value: object): value is SubscriptionGroupCreateRequestDataAttributes {
    if (!('referenceName' in value) || value['referenceName'] === undefined) return false;
    return true;
}

export function SubscriptionGroupCreateRequestDataAttributesFromJSON(json: any): SubscriptionGroupCreateRequestDataAttributes {
    return SubscriptionGroupCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function SubscriptionGroupCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'],
    };
}

export function SubscriptionGroupCreateRequestDataAttributesToJSON(json: any): SubscriptionGroupCreateRequestDataAttributes {
    return SubscriptionGroupCreateRequestDataAttributesToJSONTyped(json, false);
}

export function SubscriptionGroupCreateRequestDataAttributesToJSONTyped(value?: SubscriptionGroupCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'referenceName': value['referenceName'],
    };
}
