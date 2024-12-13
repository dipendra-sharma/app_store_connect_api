
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
 * @interface SubscriptionOfferCodeOneTimeUseCodeAttributes
 */
export interface SubscriptionOfferCodeOneTimeUseCodeAttributes {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeAttributes
     */
    numberOfCodes?: number;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeAttributes
     */
    createdDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeAttributes
     */
    expirationDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeAttributes
     */
    active?: boolean;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeAttributes interface.
 */
export function instanceOfSubscriptionOfferCodeOneTimeUseCodeAttributes(value: object): value is SubscriptionOfferCodeOneTimeUseCodeAttributes {
    return true;
}

export function SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSON(json: any): SubscriptionOfferCodeOneTimeUseCodeAttributes {
    return SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeOneTimeUseCodeAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'numberOfCodes': json['numberOfCodes'] == null ? undefined : json['numberOfCodes'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'expirationDate': json['expirationDate'] == null ? undefined : (new Date(json['expirationDate'])),
        'active': json['active'] == null ? undefined : json['active'],
    };
}

export function SubscriptionOfferCodeOneTimeUseCodeAttributesToJSON(json: any): SubscriptionOfferCodeOneTimeUseCodeAttributes {
    return SubscriptionOfferCodeOneTimeUseCodeAttributesToJSONTyped(json, false);
}

export function SubscriptionOfferCodeOneTimeUseCodeAttributesToJSONTyped(value?: SubscriptionOfferCodeOneTimeUseCodeAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'numberOfCodes': value['numberOfCodes'],
        'createdDate': value['createdDate'] == null ? undefined : ((value['createdDate']).toISOString()),
        'expirationDate': value['expirationDate'] == null ? undefined : ((value['expirationDate']).toISOString().substring(0,10)),
        'active': value['active'],
    };
}

