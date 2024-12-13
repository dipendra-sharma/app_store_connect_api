
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
 * @interface SubscriptionGroupLocalizationUpdateRequestDataAttributes
 */
export interface SubscriptionGroupLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupLocalizationUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupLocalizationUpdateRequestDataAttributes
     */
    customAppName?: string;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfSubscriptionGroupLocalizationUpdateRequestDataAttributes(value: object): value is SubscriptionGroupLocalizationUpdateRequestDataAttributes {
    return true;
}

export function SubscriptionGroupLocalizationUpdateRequestDataAttributesFromJSON(json: any): SubscriptionGroupLocalizationUpdateRequestDataAttributes {
    return SubscriptionGroupLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'customAppName': json['customAppName'] == null ? undefined : json['customAppName'],
    };
}

export function SubscriptionGroupLocalizationUpdateRequestDataAttributesToJSON(json: any): SubscriptionGroupLocalizationUpdateRequestDataAttributes {
    return SubscriptionGroupLocalizationUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationUpdateRequestDataAttributesToJSONTyped(value?: SubscriptionGroupLocalizationUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'customAppName': value['customAppName'],
    };
}

