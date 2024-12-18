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
import type { SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner } from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner';
import {
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSON,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSONTyped,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerToJSON,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerToJSONTyped,
} from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner';

/**
 * 
 * @export
 * @interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters {
    /**
     * 
     * @type {Array<SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner>}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters
     */
    data: Array<SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner>;
}

/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters interface.
 */
export function instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters(value: object): value is SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSON)),
    };
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSONTyped(value?: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerToJSON)),
    };
}

