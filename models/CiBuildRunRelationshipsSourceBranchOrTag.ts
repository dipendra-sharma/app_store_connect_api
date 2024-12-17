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
import type { CiBuildRunRelationshipsSourceBranchOrTagData } from './CiBuildRunRelationshipsSourceBranchOrTagData';
import {
    CiBuildRunRelationshipsSourceBranchOrTagDataFromJSON,
    CiBuildRunRelationshipsSourceBranchOrTagDataFromJSONTyped,
    CiBuildRunRelationshipsSourceBranchOrTagDataToJSON,
    CiBuildRunRelationshipsSourceBranchOrTagDataToJSONTyped,
} from './CiBuildRunRelationshipsSourceBranchOrTagData';

/**
 * 
 * @export
 * @interface CiBuildRunRelationshipsSourceBranchOrTag
 */
export interface CiBuildRunRelationshipsSourceBranchOrTag {
    /**
     * 
     * @type {CiBuildRunRelationshipsSourceBranchOrTagData}
     * @memberof CiBuildRunRelationshipsSourceBranchOrTag
     */
    data?: CiBuildRunRelationshipsSourceBranchOrTagData;
}

/**
 * Check if a given object implements the CiBuildRunRelationshipsSourceBranchOrTag interface.
 */
export function instanceOfCiBuildRunRelationshipsSourceBranchOrTag(value: object): value is CiBuildRunRelationshipsSourceBranchOrTag {
    return true;
}

export function CiBuildRunRelationshipsSourceBranchOrTagFromJSON(json: any): CiBuildRunRelationshipsSourceBranchOrTag {
    return CiBuildRunRelationshipsSourceBranchOrTagFromJSONTyped(json, false);
}

export function CiBuildRunRelationshipsSourceBranchOrTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsSourceBranchOrTag {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : CiBuildRunRelationshipsSourceBranchOrTagDataFromJSON(json['data']),
    };
}

export function CiBuildRunRelationshipsSourceBranchOrTagToJSON(json: any): CiBuildRunRelationshipsSourceBranchOrTag {
    return CiBuildRunRelationshipsSourceBranchOrTagToJSONTyped(json, false);
}

export function CiBuildRunRelationshipsSourceBranchOrTagToJSONTyped(value?: CiBuildRunRelationshipsSourceBranchOrTag | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CiBuildRunRelationshipsSourceBranchOrTagDataToJSON(value['data']),
    };
}

