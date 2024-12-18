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
 * @interface SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner
 */
export interface SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner
     */
    type: SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum = {
    SubscriptionOfferCodeOneTimeUseCodes: 'subscriptionOfferCodeOneTimeUseCodes'
} as const;
export type SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum = typeof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum[keyof typeof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner interface.
 */
export function instanceOfSubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner(value: object): value is SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSON(json: any): SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner {
    return SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerToJSON(json: any): SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner {
    return SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerToJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerToJSONTyped(value?: SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

