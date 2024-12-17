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
 * @interface SubscriptionPromotionalOfferAttributes
 */
export interface SubscriptionPromotionalOfferAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferAttributes
     */
    offerCode?: string;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof SubscriptionPromotionalOfferAttributes
     */
    duration?: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof SubscriptionPromotionalOfferAttributes
     */
    offerMode?: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionPromotionalOfferAttributes
     */
    numberOfPeriods?: number;
}



/**
 * Check if a given object implements the SubscriptionPromotionalOfferAttributes interface.
 */
export function instanceOfSubscriptionPromotionalOfferAttributes(value: object): value is SubscriptionPromotionalOfferAttributes {
    return true;
}

export function SubscriptionPromotionalOfferAttributesFromJSON(json: any): SubscriptionPromotionalOfferAttributes {
    return SubscriptionPromotionalOfferAttributesFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'offerCode': json['offerCode'] == null ? undefined : json['offerCode'],
        'duration': json['duration'] == null ? undefined : SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': json['offerMode'] == null ? undefined : SubscriptionOfferModeFromJSON(json['offerMode']),
        'numberOfPeriods': json['numberOfPeriods'] == null ? undefined : json['numberOfPeriods'],
    };
}

export function SubscriptionPromotionalOfferAttributesToJSON(json: any): SubscriptionPromotionalOfferAttributes {
    return SubscriptionPromotionalOfferAttributesToJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferAttributesToJSONTyped(value?: SubscriptionPromotionalOfferAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'offerCode': value['offerCode'],
        'duration': SubscriptionOfferDurationToJSON(value['duration']),
        'offerMode': SubscriptionOfferModeToJSON(value['offerMode']),
        'numberOfPeriods': value['numberOfPeriods'],
    };
}

