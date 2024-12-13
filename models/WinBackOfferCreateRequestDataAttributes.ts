
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
import type { IntegerRange } from './IntegerRange';
import {
    IntegerRangeFromJSON,
    IntegerRangeFromJSONTyped,
    IntegerRangeToJSON,
    IntegerRangeToJSONTyped,
} from './IntegerRange';
import type { SubscriptionOfferDuration } from './SubscriptionOfferDuration';
import {
    SubscriptionOfferDurationFromJSON,
    SubscriptionOfferDurationFromJSONTyped,
    SubscriptionOfferDurationToJSON,
    SubscriptionOfferDurationToJSONTyped,
} from './SubscriptionOfferDuration';
import type { SubscriptionOfferMode } from './SubscriptionOfferMode';
import {
    SubscriptionOfferModeFromJSON,
    SubscriptionOfferModeFromJSONTyped,
    SubscriptionOfferModeToJSON,
    SubscriptionOfferModeToJSONTyped,
} from './SubscriptionOfferMode';

/**
 * 
 * @export
 * @interface WinBackOfferCreateRequestDataAttributes
 */
export interface WinBackOfferCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    offerId: string;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    duration: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    offerMode: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    periodCount: number;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    customerEligibilityPaidSubscriptionDurationInMonths: number;
    /**
     * 
     * @type {IntegerRange}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    customerEligibilityTimeSinceLastSubscribedInMonths: IntegerRange;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    customerEligibilityWaitBetweenOffersInMonths?: number;
    /**
     * 
     * @type {Date}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    endDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    priority: WinBackOfferCreateRequestDataAttributesPriorityEnum;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    promotionIntent?: WinBackOfferCreateRequestDataAttributesPromotionIntentEnum;
}


/**
 * @export
 */
export const WinBackOfferCreateRequestDataAttributesPriorityEnum = {
    High: 'HIGH',
    Normal: 'NORMAL'
} as const;
export type WinBackOfferCreateRequestDataAttributesPriorityEnum = typeof WinBackOfferCreateRequestDataAttributesPriorityEnum[keyof typeof WinBackOfferCreateRequestDataAttributesPriorityEnum];

/**
 * @export
 */
export const WinBackOfferCreateRequestDataAttributesPromotionIntentEnum = {
    NotPromoted: 'NOT_PROMOTED',
    UseAutoGeneratedAssets: 'USE_AUTO_GENERATED_ASSETS'
} as const;
export type WinBackOfferCreateRequestDataAttributesPromotionIntentEnum = typeof WinBackOfferCreateRequestDataAttributesPromotionIntentEnum[keyof typeof WinBackOfferCreateRequestDataAttributesPromotionIntentEnum];


/**
 * Check if a given object implements the WinBackOfferCreateRequestDataAttributes interface.
 */
export function instanceOfWinBackOfferCreateRequestDataAttributes(value: object): value is WinBackOfferCreateRequestDataAttributes {
    if (!('referenceName' in value) || value['referenceName'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('duration' in value) || value['duration'] === undefined) return false;
    if (!('offerMode' in value) || value['offerMode'] === undefined) return false;
    if (!('periodCount' in value) || value['periodCount'] === undefined) return false;
    if (!('customerEligibilityPaidSubscriptionDurationInMonths' in value) || value['customerEligibilityPaidSubscriptionDurationInMonths'] === undefined) return false;
    if (!('customerEligibilityTimeSinceLastSubscribedInMonths' in value) || value['customerEligibilityTimeSinceLastSubscribedInMonths'] === undefined) return false;
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    if (!('priority' in value) || value['priority'] === undefined) return false;
    return true;
}

export function WinBackOfferCreateRequestDataAttributesFromJSON(json: any): WinBackOfferCreateRequestDataAttributes {
    return WinBackOfferCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function WinBackOfferCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'],
        'offerId': json['offerId'],
        'duration': SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': SubscriptionOfferModeFromJSON(json['offerMode']),
        'periodCount': json['periodCount'],
        'customerEligibilityPaidSubscriptionDurationInMonths': json['customerEligibilityPaidSubscriptionDurationInMonths'],
        'customerEligibilityTimeSinceLastSubscribedInMonths': IntegerRangeFromJSON(json['customerEligibilityTimeSinceLastSubscribedInMonths']),
        'customerEligibilityWaitBetweenOffersInMonths': json['customerEligibilityWaitBetweenOffersInMonths'] == null ? undefined : json['customerEligibilityWaitBetweenOffersInMonths'],
        'startDate': (new Date(json['startDate'])),
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'priority': json['priority'],
        'promotionIntent': json['promotionIntent'] == null ? undefined : json['promotionIntent'],
    };
}

export function WinBackOfferCreateRequestDataAttributesToJSON(json: any): WinBackOfferCreateRequestDataAttributes {
    return WinBackOfferCreateRequestDataAttributesToJSONTyped(json, false);
}

export function WinBackOfferCreateRequestDataAttributesToJSONTyped(value?: WinBackOfferCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'referenceName': value['referenceName'],
        'offerId': value['offerId'],
        'duration': SubscriptionOfferDurationToJSON(value['duration']),
        'offerMode': SubscriptionOfferModeToJSON(value['offerMode']),
        'periodCount': value['periodCount'],
        'customerEligibilityPaidSubscriptionDurationInMonths': value['customerEligibilityPaidSubscriptionDurationInMonths'],
        'customerEligibilityTimeSinceLastSubscribedInMonths': IntegerRangeToJSON(value['customerEligibilityTimeSinceLastSubscribedInMonths']),
        'customerEligibilityWaitBetweenOffersInMonths': value['customerEligibilityWaitBetweenOffersInMonths'],
        'startDate': ((value['startDate']).toISOString().substring(0,10)),
        'endDate': value['endDate'] == null ? undefined : ((value['endDate']).toISOString().substring(0,10)),
        'priority': value['priority'],
        'promotionIntent': value['promotionIntent'],
    };
}
