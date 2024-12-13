
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
 * @interface SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner
 */
export interface SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner
     */
    type: SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum = {
    SubscriptionGroupLocalizations: 'subscriptionGroupLocalizations'
} as const;
export type SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum = typeof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum[keyof typeof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner interface.
 */
export function instanceOfSubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner(value: object): value is SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerFromJSON(json: any): SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner {
    return SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerFromJSONTyped(json, false);
}

export function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerToJSON(json: any): SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner {
    return SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerToJSONTyped(json, false);
}

export function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerToJSONTyped(value?: SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
