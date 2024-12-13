
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
import type { BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData } from './BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData';
import {
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON,
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped,
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON,
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSONTyped,
} from './BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData';

/**
 * 
 * @export
 * @interface CiProductRelationshipsBundleId
 */
export interface CiProductRelationshipsBundleId {
    /**
     * 
     * @type {BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData}
     * @memberof CiProductRelationshipsBundleId
     */
    data?: BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData;
}

/**
 * Check if a given object implements the CiProductRelationshipsBundleId interface.
 */
export function instanceOfCiProductRelationshipsBundleId(value: object): value is CiProductRelationshipsBundleId {
    return true;
}

export function CiProductRelationshipsBundleIdFromJSON(json: any): CiProductRelationshipsBundleId {
    return CiProductRelationshipsBundleIdFromJSONTyped(json, false);
}

export function CiProductRelationshipsBundleIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductRelationshipsBundleId {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON(json['data']),
    };
}

export function CiProductRelationshipsBundleIdToJSON(json: any): CiProductRelationshipsBundleId {
    return CiProductRelationshipsBundleIdToJSONTyped(json, false);
}

export function CiProductRelationshipsBundleIdToJSONTyped(value?: CiProductRelationshipsBundleId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON(value['data']),
    };
}

