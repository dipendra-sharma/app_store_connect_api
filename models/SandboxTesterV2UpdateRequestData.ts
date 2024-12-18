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
import type { SandboxTesterV2UpdateRequestDataAttributes } from './SandboxTesterV2UpdateRequestDataAttributes';
import {
    SandboxTesterV2UpdateRequestDataAttributesFromJSON,
    SandboxTesterV2UpdateRequestDataAttributesFromJSONTyped,
    SandboxTesterV2UpdateRequestDataAttributesToJSON,
    SandboxTesterV2UpdateRequestDataAttributesToJSONTyped,
} from './SandboxTesterV2UpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface SandboxTesterV2UpdateRequestData
 */
export interface SandboxTesterV2UpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SandboxTesterV2UpdateRequestData
     */
    type: SandboxTesterV2UpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SandboxTesterV2UpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {SandboxTesterV2UpdateRequestDataAttributes}
     * @memberof SandboxTesterV2UpdateRequestData
     */
    attributes?: SandboxTesterV2UpdateRequestDataAttributes;
}


/**
 * @export
 */
export const SandboxTesterV2UpdateRequestDataTypeEnum = {
    SandboxTesters: 'sandboxTesters'
} as const;
export type SandboxTesterV2UpdateRequestDataTypeEnum = typeof SandboxTesterV2UpdateRequestDataTypeEnum[keyof typeof SandboxTesterV2UpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the SandboxTesterV2UpdateRequestData interface.
 */
export function instanceOfSandboxTesterV2UpdateRequestData(value: object): value is SandboxTesterV2UpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SandboxTesterV2UpdateRequestDataFromJSON(json: any): SandboxTesterV2UpdateRequestData {
    return SandboxTesterV2UpdateRequestDataFromJSONTyped(json, false);
}

export function SandboxTesterV2UpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTesterV2UpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : SandboxTesterV2UpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function SandboxTesterV2UpdateRequestDataToJSON(json: any): SandboxTesterV2UpdateRequestData {
    return SandboxTesterV2UpdateRequestDataToJSONTyped(json, false);
}

export function SandboxTesterV2UpdateRequestDataToJSONTyped(value?: SandboxTesterV2UpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': SandboxTesterV2UpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

