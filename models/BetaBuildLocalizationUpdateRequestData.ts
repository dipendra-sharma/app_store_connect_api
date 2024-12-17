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
import type { BetaBuildLocalizationUpdateRequestDataAttributes } from './BetaBuildLocalizationUpdateRequestDataAttributes';
import {
    BetaBuildLocalizationUpdateRequestDataAttributesFromJSON,
    BetaBuildLocalizationUpdateRequestDataAttributesFromJSONTyped,
    BetaBuildLocalizationUpdateRequestDataAttributesToJSON,
    BetaBuildLocalizationUpdateRequestDataAttributesToJSONTyped,
} from './BetaBuildLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BetaBuildLocalizationUpdateRequestData
 */
export interface BetaBuildLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaBuildLocalizationUpdateRequestData
     */
    type: BetaBuildLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaBuildLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BetaBuildLocalizationUpdateRequestDataAttributes}
     * @memberof BetaBuildLocalizationUpdateRequestData
     */
    attributes?: BetaBuildLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const BetaBuildLocalizationUpdateRequestDataTypeEnum = {
    BetaBuildLocalizations: 'betaBuildLocalizations'
} as const;
export type BetaBuildLocalizationUpdateRequestDataTypeEnum = typeof BetaBuildLocalizationUpdateRequestDataTypeEnum[keyof typeof BetaBuildLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaBuildLocalizationUpdateRequestData interface.
 */
export function instanceOfBetaBuildLocalizationUpdateRequestData(value: object): value is BetaBuildLocalizationUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaBuildLocalizationUpdateRequestDataFromJSON(json: any): BetaBuildLocalizationUpdateRequestData {
    return BetaBuildLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaBuildLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BetaBuildLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BetaBuildLocalizationUpdateRequestDataToJSON(json: any): BetaBuildLocalizationUpdateRequestData {
    return BetaBuildLocalizationUpdateRequestDataToJSONTyped(json, false);
}

export function BetaBuildLocalizationUpdateRequestDataToJSONTyped(value?: BetaBuildLocalizationUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BetaBuildLocalizationUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

