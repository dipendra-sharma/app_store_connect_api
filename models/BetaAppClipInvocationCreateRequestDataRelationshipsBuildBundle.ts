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
import type { BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData } from './BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData';
import {
    BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSON,
    BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSONTyped,
    BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataToJSON,
    BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataToJSONTyped,
} from './BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle
 */
export interface BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle {
    /**
     * 
     * @type {BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData}
     * @memberof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle
     */
    data: BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData;
}

/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle(value: object): value is BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleFromJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle {
    return BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSON(json['data']),
    };
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleToJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle {
    return BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleToJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleToJSONTyped(value?: BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataToJSON(value['data']),
    };
}

