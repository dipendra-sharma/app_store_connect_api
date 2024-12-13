
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
/**
 * 
 * @export
 * @interface CiBuildRunRelationshipsWorkflowData
 */
export interface CiBuildRunRelationshipsWorkflowData {
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunRelationshipsWorkflowData
     */
    type: CiBuildRunRelationshipsWorkflowDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunRelationshipsWorkflowData
     */
    id: string;
}


/**
 * @export
 */
export const CiBuildRunRelationshipsWorkflowDataTypeEnum = {
    CiWorkflows: 'ciWorkflows'
} as const;
export type CiBuildRunRelationshipsWorkflowDataTypeEnum = typeof CiBuildRunRelationshipsWorkflowDataTypeEnum[keyof typeof CiBuildRunRelationshipsWorkflowDataTypeEnum];


/**
 * Check if a given object implements the CiBuildRunRelationshipsWorkflowData interface.
 */
export function instanceOfCiBuildRunRelationshipsWorkflowData(value: object): value is CiBuildRunRelationshipsWorkflowData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function CiBuildRunRelationshipsWorkflowDataFromJSON(json: any): CiBuildRunRelationshipsWorkflowData {
    return CiBuildRunRelationshipsWorkflowDataFromJSONTyped(json, false);
}

export function CiBuildRunRelationshipsWorkflowDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsWorkflowData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CiBuildRunRelationshipsWorkflowDataToJSON(json: any): CiBuildRunRelationshipsWorkflowData {
    return CiBuildRunRelationshipsWorkflowDataToJSONTyped(json, false);
}

export function CiBuildRunRelationshipsWorkflowDataToJSONTyped(value?: CiBuildRunRelationshipsWorkflowData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
