
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
import type { CiTestResult } from './CiTestResult';
import {
    CiTestResultFromJSON,
    CiTestResultFromJSONTyped,
    CiTestResultToJSON,
    CiTestResultToJSONTyped,
} from './CiTestResult';
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
 * @interface CiTestResultResponse
 */
export interface CiTestResultResponse {
    /**
     * 
     * @type {CiTestResult}
     * @memberof CiTestResultResponse
     */
    data: CiTestResult;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CiTestResultResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CiTestResultResponse interface.
 */
export function instanceOfCiTestResultResponse(value: object): value is CiTestResultResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CiTestResultResponseFromJSON(json: any): CiTestResultResponse {
    return CiTestResultResponseFromJSONTyped(json, false);
}

export function CiTestResultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiTestResultResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CiTestResultFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CiTestResultResponseToJSON(json: any): CiTestResultResponse {
    return CiTestResultResponseToJSONTyped(json, false);
}

export function CiTestResultResponseToJSONTyped(value?: CiTestResultResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CiTestResultToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

