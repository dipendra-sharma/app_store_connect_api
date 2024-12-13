
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
import type { BetaAppClipInvocationLocalizationUpdateRequestDataAttributes } from './BetaAppClipInvocationLocalizationUpdateRequestDataAttributes';
import {
    BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSON,
    BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSONTyped,
    BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSON,
    BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSONTyped,
} from './BetaAppClipInvocationLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationUpdateRequestData
 */
export interface BetaAppClipInvocationLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestData
     */
    type: BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationUpdateRequestDataAttributes}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestData
     */
    attributes?: BetaAppClipInvocationLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum = {
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
} as const;
export type BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum = typeof BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum[keyof typeof BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationUpdateRequestData interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationUpdateRequestData(value: object): value is BetaAppClipInvocationLocalizationUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataFromJSON(json: any): BetaAppClipInvocationLocalizationUpdateRequestData {
    return BetaAppClipInvocationLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataToJSON(json: any): BetaAppClipInvocationLocalizationUpdateRequestData {
    return BetaAppClipInvocationLocalizationUpdateRequestDataToJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataToJSONTyped(value?: BetaAppClipInvocationLocalizationUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

