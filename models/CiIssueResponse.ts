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
import type { CiIssue } from './CiIssue';
import {
    CiIssueFromJSON,
    CiIssueFromJSONTyped,
    CiIssueToJSON,
    CiIssueToJSONTyped,
} from './CiIssue';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface CiIssueResponse
 */
export interface CiIssueResponse {
    /**
     * 
     * @type {CiIssue}
     * @memberof CiIssueResponse
     */
    data: CiIssue;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CiIssueResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CiIssueResponse interface.
 */
export function instanceOfCiIssueResponse(value: object): value is CiIssueResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CiIssueResponseFromJSON(json: any): CiIssueResponse {
    return CiIssueResponseFromJSONTyped(json, false);
}

export function CiIssueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiIssueResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CiIssueFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CiIssueResponseToJSON(json: any): CiIssueResponse {
    return CiIssueResponseToJSONTyped(json, false);
}

export function CiIssueResponseToJSONTyped(value?: CiIssueResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CiIssueToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

