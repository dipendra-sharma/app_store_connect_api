
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
import type { FileLocation } from './FileLocation';
import {
    FileLocationFromJSON,
    FileLocationFromJSONTyped,
    FileLocationToJSON,
    FileLocationToJSONTyped,
} from './FileLocation';

/**
 * 
 * @export
 * @interface CiIssueAttributes
 */
export interface CiIssueAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiIssueAttributes
     */
    issueType?: CiIssueAttributesIssueTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiIssueAttributes
     */
    message?: string;
    /**
     * 
     * @type {FileLocation}
     * @memberof CiIssueAttributes
     */
    fileSource?: FileLocation;
    /**
     * 
     * @type {string}
     * @memberof CiIssueAttributes
     */
    category?: string;
}


/**
 * @export
 */
export const CiIssueAttributesIssueTypeEnum = {
    AnalyzerWarning: 'ANALYZER_WARNING',
    Error: 'ERROR',
    TestFailure: 'TEST_FAILURE',
    Warning: 'WARNING'
} as const;
export type CiIssueAttributesIssueTypeEnum = typeof CiIssueAttributesIssueTypeEnum[keyof typeof CiIssueAttributesIssueTypeEnum];


/**
 * Check if a given object implements the CiIssueAttributes interface.
 */
export function instanceOfCiIssueAttributes(value: object): value is CiIssueAttributes {
    return true;
}

export function CiIssueAttributesFromJSON(json: any): CiIssueAttributes {
    return CiIssueAttributesFromJSONTyped(json, false);
}

export function CiIssueAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiIssueAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'issueType': json['issueType'] == null ? undefined : json['issueType'],
        'message': json['message'] == null ? undefined : json['message'],
        'fileSource': json['fileSource'] == null ? undefined : FileLocationFromJSON(json['fileSource']),
        'category': json['category'] == null ? undefined : json['category'],
    };
}

export function CiIssueAttributesToJSON(json: any): CiIssueAttributes {
    return CiIssueAttributesToJSONTyped(json, false);
}

export function CiIssueAttributesToJSONTyped(value?: CiIssueAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'issueType': value['issueType'],
        'message': value['message'],
        'fileSource': FileLocationToJSON(value['fileSource']),
        'category': value['category'],
    };
}
