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
import type { BetaGroupUpdateRequestDataAttributes } from './BetaGroupUpdateRequestDataAttributes';
import {
    BetaGroupUpdateRequestDataAttributesFromJSON,
    BetaGroupUpdateRequestDataAttributesFromJSONTyped,
    BetaGroupUpdateRequestDataAttributesToJSON,
    BetaGroupUpdateRequestDataAttributesToJSONTyped,
} from './BetaGroupUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BetaGroupUpdateRequestData
 */
export interface BetaGroupUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaGroupUpdateRequestData
     */
    type: BetaGroupUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaGroupUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BetaGroupUpdateRequestDataAttributes}
     * @memberof BetaGroupUpdateRequestData
     */
    attributes?: BetaGroupUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const BetaGroupUpdateRequestDataTypeEnum = {
    BetaGroups: 'betaGroups'
} as const;
export type BetaGroupUpdateRequestDataTypeEnum = typeof BetaGroupUpdateRequestDataTypeEnum[keyof typeof BetaGroupUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaGroupUpdateRequestData interface.
 */
export function instanceOfBetaGroupUpdateRequestData(value: object): value is BetaGroupUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaGroupUpdateRequestDataFromJSON(json: any): BetaGroupUpdateRequestData {
    return BetaGroupUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaGroupUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BetaGroupUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BetaGroupUpdateRequestDataToJSON(json: any): BetaGroupUpdateRequestData {
    return BetaGroupUpdateRequestDataToJSONTyped(json, false);
}

export function BetaGroupUpdateRequestDataToJSONTyped(value?: BetaGroupUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BetaGroupUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

