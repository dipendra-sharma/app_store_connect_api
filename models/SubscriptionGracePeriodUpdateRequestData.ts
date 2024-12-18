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
import type { SubscriptionGracePeriodAttributes } from './SubscriptionGracePeriodAttributes';
import {
    SubscriptionGracePeriodAttributesFromJSON,
    SubscriptionGracePeriodAttributesFromJSONTyped,
    SubscriptionGracePeriodAttributesToJSON,
    SubscriptionGracePeriodAttributesToJSONTyped,
} from './SubscriptionGracePeriodAttributes';

/**
 * 
 * @export
 * @interface SubscriptionGracePeriodUpdateRequestData
 */
export interface SubscriptionGracePeriodUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGracePeriodUpdateRequestData
     */
    type: SubscriptionGracePeriodUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGracePeriodUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {SubscriptionGracePeriodAttributes}
     * @memberof SubscriptionGracePeriodUpdateRequestData
     */
    attributes?: SubscriptionGracePeriodAttributes;
}


/**
 * @export
 */
export const SubscriptionGracePeriodUpdateRequestDataTypeEnum = {
    SubscriptionGracePeriods: 'subscriptionGracePeriods'
} as const;
export type SubscriptionGracePeriodUpdateRequestDataTypeEnum = typeof SubscriptionGracePeriodUpdateRequestDataTypeEnum[keyof typeof SubscriptionGracePeriodUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionGracePeriodUpdateRequestData interface.
 */
export function instanceOfSubscriptionGracePeriodUpdateRequestData(value: object): value is SubscriptionGracePeriodUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SubscriptionGracePeriodUpdateRequestDataFromJSON(json: any): SubscriptionGracePeriodUpdateRequestData {
    return SubscriptionGracePeriodUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionGracePeriodUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGracePeriodUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : SubscriptionGracePeriodAttributesFromJSON(json['attributes']),
    };
}

export function SubscriptionGracePeriodUpdateRequestDataToJSON(json: any): SubscriptionGracePeriodUpdateRequestData {
    return SubscriptionGracePeriodUpdateRequestDataToJSONTyped(json, false);
}

export function SubscriptionGracePeriodUpdateRequestDataToJSONTyped(value?: SubscriptionGracePeriodUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': SubscriptionGracePeriodAttributesToJSON(value['attributes']),
    };
}

