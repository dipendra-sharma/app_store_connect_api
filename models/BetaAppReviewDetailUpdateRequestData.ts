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
import type { AppStoreReviewDetailAttributes } from './AppStoreReviewDetailAttributes';
import {
    AppStoreReviewDetailAttributesFromJSON,
    AppStoreReviewDetailAttributesFromJSONTyped,
    AppStoreReviewDetailAttributesToJSON,
    AppStoreReviewDetailAttributesToJSONTyped,
} from './AppStoreReviewDetailAttributes';

/**
 * 
 * @export
 * @interface BetaAppReviewDetailUpdateRequestData
 */
export interface BetaAppReviewDetailUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppReviewDetailUpdateRequestData
     */
    type: BetaAppReviewDetailUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppReviewDetailUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppStoreReviewDetailAttributes}
     * @memberof BetaAppReviewDetailUpdateRequestData
     */
    attributes?: AppStoreReviewDetailAttributes;
}


/**
 * @export
 */
export const BetaAppReviewDetailUpdateRequestDataTypeEnum = {
    BetaAppReviewDetails: 'betaAppReviewDetails'
} as const;
export type BetaAppReviewDetailUpdateRequestDataTypeEnum = typeof BetaAppReviewDetailUpdateRequestDataTypeEnum[keyof typeof BetaAppReviewDetailUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaAppReviewDetailUpdateRequestData interface.
 */
export function instanceOfBetaAppReviewDetailUpdateRequestData(value: object): value is BetaAppReviewDetailUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaAppReviewDetailUpdateRequestDataFromJSON(json: any): BetaAppReviewDetailUpdateRequestData {
    return BetaAppReviewDetailUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaAppReviewDetailUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewDetailUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppStoreReviewDetailAttributesFromJSON(json['attributes']),
    };
}

export function BetaAppReviewDetailUpdateRequestDataToJSON(json: any): BetaAppReviewDetailUpdateRequestData {
    return BetaAppReviewDetailUpdateRequestDataToJSONTyped(json, false);
}

export function BetaAppReviewDetailUpdateRequestDataToJSONTyped(value?: BetaAppReviewDetailUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppStoreReviewDetailAttributesToJSON(value['attributes']),
    };
}

