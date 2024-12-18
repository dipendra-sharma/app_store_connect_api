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
 * @interface WinBackOfferAttributes
 */
export interface WinBackOfferAttributes {
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferAttributes
     */
    offerId?: string;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof WinBackOfferAttributes
     */
    duration?: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof WinBackOfferAttributes
     */
    offerMode?: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferAttributes
     */
    periodCount?: number;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferAttributes
     */
    customerEligibilityPaidSubscriptionDurationInMonths?: number;
    /**
     * 
     * @type {IntegerRange}
     * @memberof WinBackOfferAttributes
     */
    customerEligibilityTimeSinceLastSubscribedInMonths?: IntegerRange;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferAttributes
     */
    customerEligibilityWaitBetweenOffersInMonths?: number;
    /**
     * 
     * @type {Date}
     * @memberof WinBackOfferAttributes
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WinBackOfferAttributes
     */
    endDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferAttributes
     */
    priority?: WinBackOfferAttributesPriorityEnum;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferAttributes
     */
    promotionIntent?: WinBackOfferAttributesPromotionIntentEnum;
}


/**
 * @export
 */
export const WinBackOfferAttributesPriorityEnum = {
    High: 'HIGH',
    Normal: 'NORMAL'
} as const;
export type WinBackOfferAttributesPriorityEnum = typeof WinBackOfferAttributesPriorityEnum[keyof typeof WinBackOfferAttributesPriorityEnum];

/**
 * @export
 */
export const WinBackOfferAttributesPromotionIntentEnum = {
    NotPromoted: 'NOT_PROMOTED',
    UseAutoGeneratedAssets: 'USE_AUTO_GENERATED_ASSETS'
} as const;
export type WinBackOfferAttributesPromotionIntentEnum = typeof WinBackOfferAttributesPromotionIntentEnum[keyof typeof WinBackOfferAttributesPromotionIntentEnum];


/**
 * Check if a given object implements the WinBackOfferAttributes interface.
 */
export function instanceOfWinBackOfferAttributes(value: object): value is WinBackOfferAttributes {
    return true;
}

export function WinBackOfferAttributesFromJSON(json: any): WinBackOfferAttributes {
    return WinBackOfferAttributesFromJSONTyped(json, false);
}

export function WinBackOfferAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'] == null ? undefined : json['referenceName'],
        'offerId': json['offerId'] == null ? undefined : json['offerId'],
        'duration': json['duration'] == null ? undefined : SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': json['offerMode'] == null ? undefined : SubscriptionOfferModeFromJSON(json['offerMode']),
        'periodCount': json['periodCount'] == null ? undefined : json['periodCount'],
        'customerEligibilityPaidSubscriptionDurationInMonths': json['customerEligibilityPaidSubscriptionDurationInMonths'] == null ? undefined : json['customerEligibilityPaidSubscriptionDurationInMonths'],
        'customerEligibilityTimeSinceLastSubscribedInMonths': json['customerEligibilityTimeSinceLastSubscribedInMonths'] == null ? undefined : IntegerRangeFromJSON(json['customerEligibilityTimeSinceLastSubscribedInMonths']),
        'customerEligibilityWaitBetweenOffersInMonths': json['customerEligibilityWaitBetweenOffersInMonths'] == null ? undefined : json['customerEligibilityWaitBetweenOffersInMonths'],
        'startDate': json['startDate'] == null ? undefined : (new Date(json['startDate'])),
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'priority': json['priority'] == null ? undefined : json['priority'],
        'promotionIntent': json['promotionIntent'] == null ? undefined : json['promotionIntent'],
    };
}

export function WinBackOfferAttributesToJSON(json: any): WinBackOfferAttributes {
    return WinBackOfferAttributesToJSONTyped(json, false);
}

export function WinBackOfferAttributesToJSONTyped(value?: WinBackOfferAttributes | null, ignoreDiscriminator: boolean = false): any {
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
        'startDate': value['startDate'] == null ? undefined : ((value['startDate']).toISOString().substring(0,10)),
        'endDate': value['endDate'] == null ? undefined : ((value['endDate']).toISOString().substring(0,10)),
        'priority': value['priority'],
        'promotionIntent': value['promotionIntent'],
    };
}

