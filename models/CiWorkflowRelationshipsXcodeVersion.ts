
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
import type { CiMacOsVersionRelationshipsXcodeVersionsDataInner } from './CiMacOsVersionRelationshipsXcodeVersionsDataInner';
import {
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSONTyped,
} from './CiMacOsVersionRelationshipsXcodeVersionsDataInner';

/**
 * 
 * @export
 * @interface CiWorkflowRelationshipsXcodeVersion
 */
export interface CiWorkflowRelationshipsXcodeVersion {
    /**
     * 
     * @type {CiMacOsVersionRelationshipsXcodeVersionsDataInner}
     * @memberof CiWorkflowRelationshipsXcodeVersion
     */
    data?: CiMacOsVersionRelationshipsXcodeVersionsDataInner;
}

/**
 * Check if a given object implements the CiWorkflowRelationshipsXcodeVersion interface.
 */
export function instanceOfCiWorkflowRelationshipsXcodeVersion(value: object): value is CiWorkflowRelationshipsXcodeVersion {
    return true;
}

export function CiWorkflowRelationshipsXcodeVersionFromJSON(json: any): CiWorkflowRelationshipsXcodeVersion {
    return CiWorkflowRelationshipsXcodeVersionFromJSONTyped(json, false);
}

export function CiWorkflowRelationshipsXcodeVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowRelationshipsXcodeVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON(json['data']),
    };
}

export function CiWorkflowRelationshipsXcodeVersionToJSON(json: any): CiWorkflowRelationshipsXcodeVersion {
    return CiWorkflowRelationshipsXcodeVersionToJSONTyped(json, false);
}

export function CiWorkflowRelationshipsXcodeVersionToJSONTyped(value?: CiWorkflowRelationshipsXcodeVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON(value['data']),
    };
}

