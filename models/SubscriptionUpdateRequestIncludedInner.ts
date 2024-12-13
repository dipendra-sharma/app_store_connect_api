
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

import type { SubscriptionIntroductoryOfferInlineCreate } from './SubscriptionIntroductoryOfferInlineCreate';
import {
    instanceOfSubscriptionIntroductoryOfferInlineCreate,
    SubscriptionIntroductoryOfferInlineCreateFromJSON,
    SubscriptionIntroductoryOfferInlineCreateFromJSONTyped,
    SubscriptionIntroductoryOfferInlineCreateToJSON,
} from './SubscriptionIntroductoryOfferInlineCreate';
import type { SubscriptionPriceInlineCreate } from './SubscriptionPriceInlineCreate';
import {
    instanceOfSubscriptionPriceInlineCreate,
    SubscriptionPriceInlineCreateFromJSON,
    SubscriptionPriceInlineCreateFromJSONTyped,
    SubscriptionPriceInlineCreateToJSON,
} from './SubscriptionPriceInlineCreate';
import type { SubscriptionPromotionalOfferInlineCreate } from './SubscriptionPromotionalOfferInlineCreate';
import {
    instanceOfSubscriptionPromotionalOfferInlineCreate,
    SubscriptionPromotionalOfferInlineCreateFromJSON,
    SubscriptionPromotionalOfferInlineCreateFromJSONTyped,
    SubscriptionPromotionalOfferInlineCreateToJSON,
} from './SubscriptionPromotionalOfferInlineCreate';

/**
 * @type SubscriptionUpdateRequestIncludedInner
 * 
 * @export
 */
export type SubscriptionUpdateRequestIncludedInner = SubscriptionIntroductoryOfferInlineCreate | SubscriptionPriceInlineCreate | SubscriptionPromotionalOfferInlineCreate;

export function SubscriptionUpdateRequestIncludedInnerFromJSON(json: any): SubscriptionUpdateRequestIncludedInner {
    return SubscriptionUpdateRequestIncludedInnerFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequestIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfSubscriptionIntroductoryOfferInlineCreate(json)) {
        return SubscriptionIntroductoryOfferInlineCreateFromJSONTyped(json, true);
    }
    if (instanceOfSubscriptionPriceInlineCreate(json)) {
        return SubscriptionPriceInlineCreateFromJSONTyped(json, true);
    }
    if (instanceOfSubscriptionPromotionalOfferInlineCreate(json)) {
        return SubscriptionPromotionalOfferInlineCreateFromJSONTyped(json, true);
    }

    return {} as any;
}

export function SubscriptionUpdateRequestIncludedInnerToJSON(json: any): any {
    return SubscriptionUpdateRequestIncludedInnerToJSONTyped(json, false);
}

export function SubscriptionUpdateRequestIncludedInnerToJSONTyped(value?: SubscriptionUpdateRequestIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfSubscriptionIntroductoryOfferInlineCreate(value)) {
        return SubscriptionIntroductoryOfferInlineCreateToJSON(value as SubscriptionIntroductoryOfferInlineCreate);
    }
    if (instanceOfSubscriptionPriceInlineCreate(value)) {
        return SubscriptionPriceInlineCreateToJSON(value as SubscriptionPriceInlineCreate);
    }
    if (instanceOfSubscriptionPromotionalOfferInlineCreate(value)) {
        return SubscriptionPromotionalOfferInlineCreateToJSON(value as SubscriptionPromotionalOfferInlineCreate);
    }

    return {};
}
