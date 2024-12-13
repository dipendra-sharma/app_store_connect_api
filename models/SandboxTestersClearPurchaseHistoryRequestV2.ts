
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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface SandboxTestersClearPurchaseHistoryRequestV2
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2 {
    /**
     * 
     * @type {string}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2
     */
    type: SandboxTestersClearPurchaseHistoryRequestV2TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2
     */
    id: string;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SandboxTestersClearPurchaseHistoryRequestV2TypeEnum = {
    SandboxTestersClearPurchaseHistoryRequest: 'sandboxTestersClearPurchaseHistoryRequest'
} as const;
export type SandboxTestersClearPurchaseHistoryRequestV2TypeEnum = typeof SandboxTestersClearPurchaseHistoryRequestV2TypeEnum[keyof typeof SandboxTestersClearPurchaseHistoryRequestV2TypeEnum];


/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2 interface.
 */
export function instanceOfSandboxTestersClearPurchaseHistoryRequestV2(value: object): value is SandboxTestersClearPurchaseHistoryRequestV2 {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SandboxTestersClearPurchaseHistoryRequestV2FromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2 {
    return SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SandboxTestersClearPurchaseHistoryRequestV2ToJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2 {
    return SandboxTestersClearPurchaseHistoryRequestV2ToJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2ToJSONTyped(value?: SandboxTestersClearPurchaseHistoryRequestV2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'links': ResourceLinksToJSON(value['links']),
    };
}
