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
 * @interface SubscriptionIntroductoryOfferInlineCreateAttributes
 */
export interface SubscriptionIntroductoryOfferInlineCreateAttributes {
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    endDate?: Date;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    duration: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    offerMode: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    numberOfPeriods: number;
}



/**
 * Check if a given object implements the SubscriptionIntroductoryOfferInlineCreateAttributes interface.
 */
export function instanceOfSubscriptionIntroductoryOfferInlineCreateAttributes(value: object): value is SubscriptionIntroductoryOfferInlineCreateAttributes {
    if (!('duration' in value) || value['duration'] === undefined) return false;
    if (!('offerMode' in value) || value['offerMode'] === undefined) return false;
    if (!('numberOfPeriods' in value) || value['numberOfPeriods'] === undefined) return false;
    return true;
}

export function SubscriptionIntroductoryOfferInlineCreateAttributesFromJSON(json: any): SubscriptionIntroductoryOfferInlineCreateAttributes {
    return SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferInlineCreateAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'startDate': json['startDate'] == null ? undefined : (new Date(json['startDate'])),
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'duration': SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': SubscriptionOfferModeFromJSON(json['offerMode']),
        'numberOfPeriods': json['numberOfPeriods'],
    };
}

export function SubscriptionIntroductoryOfferInlineCreateAttributesToJSON(json: any): SubscriptionIntroductoryOfferInlineCreateAttributes {
    return SubscriptionIntroductoryOfferInlineCreateAttributesToJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferInlineCreateAttributesToJSONTyped(value?: SubscriptionIntroductoryOfferInlineCreateAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'startDate': value['startDate'] == null ? undefined : ((value['startDate']).toISOString().substring(0,10)),
        'endDate': value['endDate'] == null ? undefined : ((value['endDate']).toISOString().substring(0,10)),
        'duration': SubscriptionOfferDurationToJSON(value['duration']),
        'offerMode': SubscriptionOfferModeToJSON(value['offerMode']),
        'numberOfPeriods': value['numberOfPeriods'],
    };
}

