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
import type { BetaTesterCreateRequestDataRelationships } from './BetaTesterCreateRequestDataRelationships';
import {
    BetaTesterCreateRequestDataRelationshipsFromJSON,
    BetaTesterCreateRequestDataRelationshipsFromJSONTyped,
    BetaTesterCreateRequestDataRelationshipsToJSON,
    BetaTesterCreateRequestDataRelationshipsToJSONTyped,
} from './BetaTesterCreateRequestDataRelationships';
import type { BetaTesterCreateRequestDataAttributes } from './BetaTesterCreateRequestDataAttributes';
import {
    BetaTesterCreateRequestDataAttributesFromJSON,
    BetaTesterCreateRequestDataAttributesFromJSONTyped,
    BetaTesterCreateRequestDataAttributesToJSON,
    BetaTesterCreateRequestDataAttributesToJSONTyped,
} from './BetaTesterCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BetaTesterCreateRequestData
 */
export interface BetaTesterCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaTesterCreateRequestData
     */
    type: BetaTesterCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BetaTesterCreateRequestDataAttributes}
     * @memberof BetaTesterCreateRequestData
     */
    attributes: BetaTesterCreateRequestDataAttributes;
    /**
     * 
     * @type {BetaTesterCreateRequestDataRelationships}
     * @memberof BetaTesterCreateRequestData
     */
    relationships?: BetaTesterCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BetaTesterCreateRequestDataTypeEnum = {
    BetaTesters: 'betaTesters'
} as const;
export type BetaTesterCreateRequestDataTypeEnum = typeof BetaTesterCreateRequestDataTypeEnum[keyof typeof BetaTesterCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaTesterCreateRequestData interface.
 */
export function instanceOfBetaTesterCreateRequestData(value: object): value is BetaTesterCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function BetaTesterCreateRequestDataFromJSON(json: any): BetaTesterCreateRequestData {
    return BetaTesterCreateRequestDataFromJSONTyped(json, false);
}

export function BetaTesterCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': BetaTesterCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : BetaTesterCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BetaTesterCreateRequestDataToJSON(json: any): BetaTesterCreateRequestData {
    return BetaTesterCreateRequestDataToJSONTyped(json, false);
}

export function BetaTesterCreateRequestDataToJSONTyped(value?: BetaTesterCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': BetaTesterCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': BetaTesterCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

