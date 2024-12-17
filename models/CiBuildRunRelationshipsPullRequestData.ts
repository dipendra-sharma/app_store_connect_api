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
 * @interface CiBuildRunRelationshipsPullRequestData
 */
export interface CiBuildRunRelationshipsPullRequestData {
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunRelationshipsPullRequestData
     */
    type: CiBuildRunRelationshipsPullRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunRelationshipsPullRequestData
     */
    id: string;
}


/**
 * @export
 */
export const CiBuildRunRelationshipsPullRequestDataTypeEnum = {
    ScmPullRequests: 'scmPullRequests'
} as const;
export type CiBuildRunRelationshipsPullRequestDataTypeEnum = typeof CiBuildRunRelationshipsPullRequestDataTypeEnum[keyof typeof CiBuildRunRelationshipsPullRequestDataTypeEnum];


/**
 * Check if a given object implements the CiBuildRunRelationshipsPullRequestData interface.
 */
export function instanceOfCiBuildRunRelationshipsPullRequestData(value: object): value is CiBuildRunRelationshipsPullRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function CiBuildRunRelationshipsPullRequestDataFromJSON(json: any): CiBuildRunRelationshipsPullRequestData {
    return CiBuildRunRelationshipsPullRequestDataFromJSONTyped(json, false);
}

export function CiBuildRunRelationshipsPullRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsPullRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CiBuildRunRelationshipsPullRequestDataToJSON(json: any): CiBuildRunRelationshipsPullRequestData {
    return CiBuildRunRelationshipsPullRequestDataToJSONTyped(json, false);
}

export function CiBuildRunRelationshipsPullRequestDataToJSONTyped(value?: CiBuildRunRelationshipsPullRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

