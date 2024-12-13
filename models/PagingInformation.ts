
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
import type { PagingInformationPaging } from './PagingInformationPaging';
import {
    PagingInformationPagingFromJSON,
    PagingInformationPagingFromJSONTyped,
    PagingInformationPagingToJSON,
    PagingInformationPagingToJSONTyped,
} from './PagingInformationPaging';

/**
 * 
 * @export
 * @interface PagingInformation
 */
export interface PagingInformation {
    /**
     * 
     * @type {PagingInformationPaging}
     * @memberof PagingInformation
     */
    paging: PagingInformationPaging;
}

/**
 * Check if a given object implements the PagingInformation interface.
 */
export function instanceOfPagingInformation(value: object): value is PagingInformation {
    if (!('paging' in value) || value['paging'] === undefined) return false;
    return true;
}

export function PagingInformationFromJSON(json: any): PagingInformation {
    return PagingInformationFromJSONTyped(json, false);
}

export function PagingInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagingInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'paging': PagingInformationPagingFromJSON(json['paging']),
    };
}

export function PagingInformationToJSON(json: any): PagingInformation {
    return PagingInformationToJSONTyped(json, false);
}

export function PagingInformationToJSONTyped(value?: PagingInformation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'paging': PagingInformationPagingToJSON(value['paging']),
    };
}
