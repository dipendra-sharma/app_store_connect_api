
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
import type { CiWorkflowCreateRequestDataAttributes } from './CiWorkflowCreateRequestDataAttributes';
import {
    CiWorkflowCreateRequestDataAttributesFromJSON,
    CiWorkflowCreateRequestDataAttributesFromJSONTyped,
    CiWorkflowCreateRequestDataAttributesToJSON,
    CiWorkflowCreateRequestDataAttributesToJSONTyped,
} from './CiWorkflowCreateRequestDataAttributes';
import type { CiWorkflowCreateRequestDataRelationships } from './CiWorkflowCreateRequestDataRelationships';
import {
    CiWorkflowCreateRequestDataRelationshipsFromJSON,
    CiWorkflowCreateRequestDataRelationshipsFromJSONTyped,
    CiWorkflowCreateRequestDataRelationshipsToJSON,
    CiWorkflowCreateRequestDataRelationshipsToJSONTyped,
} from './CiWorkflowCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface CiWorkflowCreateRequestData
 */
export interface CiWorkflowCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowCreateRequestData
     */
    type: CiWorkflowCreateRequestDataTypeEnum;
    /**
     * 
     * @type {CiWorkflowCreateRequestDataAttributes}
     * @memberof CiWorkflowCreateRequestData
     */
    attributes: CiWorkflowCreateRequestDataAttributes;
    /**
     * 
     * @type {CiWorkflowCreateRequestDataRelationships}
     * @memberof CiWorkflowCreateRequestData
     */
    relationships: CiWorkflowCreateRequestDataRelationships;
}


/**
 * @export
 */
export const CiWorkflowCreateRequestDataTypeEnum = {
    CiWorkflows: 'ciWorkflows'
} as const;
export type CiWorkflowCreateRequestDataTypeEnum = typeof CiWorkflowCreateRequestDataTypeEnum[keyof typeof CiWorkflowCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the CiWorkflowCreateRequestData interface.
 */
export function instanceOfCiWorkflowCreateRequestData(value: object): value is CiWorkflowCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function CiWorkflowCreateRequestDataFromJSON(json: any): CiWorkflowCreateRequestData {
    return CiWorkflowCreateRequestDataFromJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': CiWorkflowCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': CiWorkflowCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function CiWorkflowCreateRequestDataToJSON(json: any): CiWorkflowCreateRequestData {
    return CiWorkflowCreateRequestDataToJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataToJSONTyped(value?: CiWorkflowCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': CiWorkflowCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': CiWorkflowCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

