
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
import type { SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters } from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters';
import {
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSONTyped,
} from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters';

/**
 * 
 * @export
 * @interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships {
    /**
     * 
     * @type {SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships
     */
    sandboxTesters: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters;
}

/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships interface.
 */
export function instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships(value: object): value is SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships {
    if (!('sandboxTesters' in value) || value['sandboxTesters'] === undefined) return false;
    return true;
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'sandboxTesters': SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON(json['sandboxTesters']),
    };
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsToJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsToJSONTyped(value?: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sandboxTesters': SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON(value['sandboxTesters']),
    };
}

