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


/**
 * 
 * @export
 */
export const SubscriptionOfferEligibility = {
    StackWithIntroOffers: 'STACK_WITH_INTRO_OFFERS',
    ReplaceIntroOffers: 'REPLACE_INTRO_OFFERS'
} as const;
export type SubscriptionOfferEligibility = typeof SubscriptionOfferEligibility[keyof typeof SubscriptionOfferEligibility];


export function instanceOfSubscriptionOfferEligibility(value: any): boolean {
    for (const key in SubscriptionOfferEligibility) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionOfferEligibility, key)) {
            if (SubscriptionOfferEligibility[key as keyof typeof SubscriptionOfferEligibility] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionOfferEligibilityFromJSON(json: any): SubscriptionOfferEligibility {
    return SubscriptionOfferEligibilityFromJSONTyped(json, false);
}

export function SubscriptionOfferEligibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferEligibility {
    return json as SubscriptionOfferEligibility;
}

export function SubscriptionOfferEligibilityToJSON(value?: SubscriptionOfferEligibility | null): any {
    return value as any;
}

export function SubscriptionOfferEligibilityToJSONTyped(value: any, ignoreDiscriminator: boolean): SubscriptionOfferEligibility {
    return value as SubscriptionOfferEligibility;
}

