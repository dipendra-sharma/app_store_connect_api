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
import type { CiWorkflowRelationshipsMacOsVersionData } from './CiWorkflowRelationshipsMacOsVersionData';
import {
    CiWorkflowRelationshipsMacOsVersionDataFromJSON,
    CiWorkflowRelationshipsMacOsVersionDataFromJSONTyped,
    CiWorkflowRelationshipsMacOsVersionDataToJSON,
    CiWorkflowRelationshipsMacOsVersionDataToJSONTyped,
} from './CiWorkflowRelationshipsMacOsVersionData';

/**
 * 
 * @export
 * @interface CiWorkflowCreateRequestDataRelationshipsMacOsVersion
 */
export interface CiWorkflowCreateRequestDataRelationshipsMacOsVersion {
    /**
     * 
     * @type {CiWorkflowRelationshipsMacOsVersionData}
     * @memberof CiWorkflowCreateRequestDataRelationshipsMacOsVersion
     */
    data: CiWorkflowRelationshipsMacOsVersionData;
}

/**
 * Check if a given object implements the CiWorkflowCreateRequestDataRelationshipsMacOsVersion interface.
 */
export function instanceOfCiWorkflowCreateRequestDataRelationshipsMacOsVersion(value: object): value is CiWorkflowCreateRequestDataRelationshipsMacOsVersion {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSON(json: any): CiWorkflowCreateRequestDataRelationshipsMacOsVersion {
    return CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowCreateRequestDataRelationshipsMacOsVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CiWorkflowRelationshipsMacOsVersionDataFromJSON(json['data']),
    };
}

export function CiWorkflowCreateRequestDataRelationshipsMacOsVersionToJSON(json: any): CiWorkflowCreateRequestDataRelationshipsMacOsVersion {
    return CiWorkflowCreateRequestDataRelationshipsMacOsVersionToJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataRelationshipsMacOsVersionToJSONTyped(value?: CiWorkflowCreateRequestDataRelationshipsMacOsVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CiWorkflowRelationshipsMacOsVersionDataToJSON(value['data']),
    };
}

