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
import type { CiBuildRunRelationshipsWorkflowData } from './CiBuildRunRelationshipsWorkflowData';
import {
    CiBuildRunRelationshipsWorkflowDataFromJSON,
    CiBuildRunRelationshipsWorkflowDataFromJSONTyped,
    CiBuildRunRelationshipsWorkflowDataToJSON,
    CiBuildRunRelationshipsWorkflowDataToJSONTyped,
} from './CiBuildRunRelationshipsWorkflowData';

/**
 * 
 * @export
 * @interface CiBuildRunRelationshipsWorkflow
 */
export interface CiBuildRunRelationshipsWorkflow {
    /**
     * 
     * @type {CiBuildRunRelationshipsWorkflowData}
     * @memberof CiBuildRunRelationshipsWorkflow
     */
    data?: CiBuildRunRelationshipsWorkflowData;
}

/**
 * Check if a given object implements the CiBuildRunRelationshipsWorkflow interface.
 */
export function instanceOfCiBuildRunRelationshipsWorkflow(value: object): value is CiBuildRunRelationshipsWorkflow {
    return true;
}

export function CiBuildRunRelationshipsWorkflowFromJSON(json: any): CiBuildRunRelationshipsWorkflow {
    return CiBuildRunRelationshipsWorkflowFromJSONTyped(json, false);
}

export function CiBuildRunRelationshipsWorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsWorkflow {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : CiBuildRunRelationshipsWorkflowDataFromJSON(json['data']),
    };
}

export function CiBuildRunRelationshipsWorkflowToJSON(json: any): CiBuildRunRelationshipsWorkflow {
    return CiBuildRunRelationshipsWorkflowToJSONTyped(json, false);
}

export function CiBuildRunRelationshipsWorkflowToJSONTyped(value?: CiBuildRunRelationshipsWorkflow | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CiBuildRunRelationshipsWorkflowDataToJSON(value['data']),
    };
}

